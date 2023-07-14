import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'docusketch-test';
  index: number = Math.floor(Math.random() * Object.keys(fas).length);
  icon = Object.values(fas)[this.index];
  buttonIsActive: boolean = true;

  shuffle() {
    this.buttonIsActive = false;
    setTimeout(() => {
      this.index = Math.floor(Math.random() * Object.keys(fas).length);
      this.icon = Object.values(fas)[this.index];
      this.buttonIsActive = true;
    }, 3000);
  }
}
