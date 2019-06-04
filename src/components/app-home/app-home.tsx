import { Component, h, Prop, State } from '@stencil/core';

export interface RainbowItem {
  text: { [lang: string]: string };
  color: string;
}

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @Prop() items: RainbowItem[];
  @Prop() language: string = navigator.language || 'de-DE';

  @State() currentItem: RainbowItem;

  next() {
    if (this.items == null || this.items.length <= 0) {
      return;
    }
    if (this.currentItem == null) {
      this.currentItem = this.items[0];
    }
    
    const index = this.items.indexOf(this.currentItem);
    if (index !== -1) {
      const nextIndex = index + 1;
      if (this.items.length > nextIndex) {
        this.currentItem = this.items[nextIndex];
      } else {
        this.currentItem = this.items[0];
      }
      this.speak(this.currentItem, this.language);
    }
  }

  speak(item: RainbowItem, language: string) {
    return new Promise((res, rej) => {
      if (item == null) {
        return rej('item is null or undefined');
      }
      
      const text = item.text[language];
      if (text == null) {
        return rej(`text is not available for language "${language}`);
      }

      setTimeout(() => {
        const msg = new SpeechSynthesisUtterance(text);
        msg.rate = .5;
        window.speechSynthesis.speak(msg);
        msg.onend = (e) => res(e);
      }, 500);
    });
  }

  render() {
    return (
      <div class='app-home' onClick={() => this.next()}>
        {this.currentItem
          ? <div class="colored-bg" style={{ backgroundColor: this.currentItem.color }}></div>
          : <div class="colored-bg"><div class="centered">Click to start</div></div>
        }
      </div>
    );
  }
}
