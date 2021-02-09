import { Component, h, Prop, State } from "@stencil/core";

export interface RainbowItem {
  text: { [lang: string]: string };
  color: string;
  items: { [lang: string]: string; image: string };
}

@Component({
  tag: "app-home",
  styleUrl: "app-home.css",
  shadow: true,
})
export class AppHome {
  @Prop() items: RainbowItem[];
  @Prop() language: string = navigator.language || "de-DE";

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
      this.speak(this.currentItem.text, this.language).then(() => {
        setTimeout(() => {
          this.speak(this.currentItem.items, this.language);
        }, 500)
      });
    }
  }

  speak(texts: { [lang: string]: string }, language: string) {
    return new Promise((res, rej) => {
      if (texts == null) {
        return rej("item is null or undefined");
      }

      const text = texts[language];
      if (text == null) {
        return rej(`text is not available for language "${language}`);
      }

      setTimeout(() => {
        const msg = new SpeechSynthesisUtterance(text);
        msg.rate = 0.5;
        window.speechSynthesis.speak(msg);
        msg.onend = (e) => res(e);
      }, 200);
    });
  }

  render() {
    return (
      <div class="app-home" onClick={() => this.next()}>
        {this.currentItem ? (
          <div
            class="colored-bg"
            style={{ backgroundColor: this.currentItem.color }}
          >
            <img title="illustration" class="illustration" src={this.currentItem.items.image} />
          </div>
        ) : (
          <div class="colored-bg">
            <div class="centered">Click to start</div>
          </div>
        )}
      </div>
    );
  }
}
