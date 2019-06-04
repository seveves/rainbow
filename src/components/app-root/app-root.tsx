import { Component, h } from '@stencil/core';
import { RainbowItem } from '../app-home/app-home';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  items: RainbowItem[] = [
    {
      text: { 'de-DE': 'Rot', 'en-US': 'Red' },
      color: 'red'
    },
    {
      text: { 'de-DE': 'Grün', 'en-US': 'Green' },
      color: 'green'
    },
    {
      text: { 'de-DE': 'Blau', 'en-US': 'Blue' },
      color: 'blue'
    },
    {
      text: { 'de-DE': 'Gelb', 'en-US': 'Yellow' },
      color: 'yellow'
    },
    {
      text: { 'de-DE': 'Weiß', 'en-US': 'White' },
      color: 'white'
    },
    {
      text: { 'de-DE': 'Grau', 'en-US': 'Grey' },
      color: 'grey'
    },
    {
      text: { 'de-DE': 'Lila', 'en-US': 'Purple' },
      color: 'purple'
    },
    {
      text: { 'de-DE': 'Türkis', 'en-US': 'Turquoise' },
      color: 'turquoise'
    },
    {
      text: { 'de-DE': 'Schwarz', 'en-US': 'Black' },
      color: 'black'
    },
    {
      text: { 'de-DE': 'Braun', 'en-US': 'Brown' },
      color: 'saddlebrown'
    },
    {
      text: { 'de-DE': 'Pink', 'en-US': 'Pink' },
      color: 'pink'
    },
    {
      text: { 'de-DE': 'Khaki', 'en-US': 'Khaki' },
      color: 'khaki'
    },
    {
      text: { 'de-DE': 'Orange', 'en-US': 'Orange' },
      color: 'orange'
    }
  ];

  shuffle(items: RainbowItem[]) {
    const shuffled = items.map(i => ({ ...i }));
    let currentIndex = shuffled.length;
    let temporaryValue: RainbowItem;
    let randomIndex: number;

  
    while (0 !== currentIndex) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = shuffled[currentIndex];
      shuffled[currentIndex] = shuffled[randomIndex];
      shuffled[randomIndex] = temporaryValue;
    }
  
    return shuffled;
  }

  render() {
    return (
      <div>
        <main>
          <app-home items={this.shuffle(this.items)} />
        </main>
      </div>
    );
  }
}
