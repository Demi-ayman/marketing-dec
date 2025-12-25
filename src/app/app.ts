import { Component, signal } from '@angular/core';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Startup Marketing Deck';

  constructor() {
    console.log('Marketing Deck App Started');
  }
}
