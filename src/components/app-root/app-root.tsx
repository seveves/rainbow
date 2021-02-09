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
      items: { 'de-DE': 'Die Rakete ist rot', 'en-US': 'The rocket is red', image: '/assets/day20-rocket.svg' },
      color: 'red'
    },
    {
      text: { 'de-DE': 'Grün', 'en-US': 'Green' },
      items: { 'de-DE': 'Der Gabelstapler hebt eine grüne Kiste', 'en-US': 'The forklift lifts a green package', image: '/assets/day14-forklift.svg' },
      color: 'green'
    },
    {
      text: { 'de-DE': 'Blau', 'en-US': 'Blue' },
      items: { 'de-DE': 'Der Fisch ist blau', 'en-US': 'The fish is blue', image: '/assets/day50-pirahna.svg' },
      color: 'blue'
    },
    {
      text: { 'de-DE': 'Gelb', 'en-US': 'Yellow' },
      items: { 'de-DE': 'Die Sonne ist gelb', 'en-US': 'The sun is yellow', image: '/assets/day65-city-road.svg' },
      color: 'yellow'
    },
    {
      text: { 'de-DE': 'Weiß', 'en-US': 'White' },
      items: { 'de-DE': 'Der Schneemann ist weiß', 'en-US': 'The snowman is white', image: '/assets/day83-snowman.svg' },
      color: 'white'
    },
    {
      text: { 'de-DE': 'Grau', 'en-US': 'Grey' },
      items: { 'de-DE': 'Der Computer ist grau', 'en-US': 'The computer is grey', image: '/assets/day42-imac.svg' },
      color: 'grey'
    },
    {
      text: { 'de-DE': 'Lila', 'en-US': 'Purple' },
      items: { 'de-DE': 'Der Bus ist lila', 'en-US': 'The van is purple', image: '/assets/day66-travel.svg' },
      color: 'purple'
    },
    {
      text: { 'de-DE': 'Schwarz', 'en-US': 'Black' },
      items: { 'de-DE': 'Das Werkzeug', 'en-US': 'The toolbox', image: '/assets/day9-toolbox.svg' },
      color: 'black'
    },
    {
      text: { 'de-DE': 'Braun', 'en-US': 'Brown' },
      items: { 'de-DE': 'Die Flecken vom Hund sind braun', 'en-US': 'The dogs dots are brown', image: '/assets/day67-dog.svg' },
      color: 'saddlebrown'
    },
    {
      text: { 'de-DE': 'Pink', 'en-US': 'Pink' },
      items: { 'de-DE': 'Der Wal ist pink', 'en-US': 'The whale is pink', image: '/assets/day51-whale.svg' },
      color: 'pink'
    },
    {
      text: { 'de-DE': 'Orange', 'en-US': 'Orange' },
      items: { 'de-DE': 'Der Kürbis ist orange', 'en-US': 'The pumpkin is orange', image: '/assets/day33-pumpkin.svg' },
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
