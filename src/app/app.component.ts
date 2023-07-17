import { Component } from '@angular/core';
import { fas } from '@fortawesome/free-solid-svg-icons';

console.log(fas);

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
  loader = fas['faSpinner'];
  shuffle() {
    // If we won't stack promises, we can just disable button and wait until timeout will change the icon.
    // this.buttonIsActive = false;
    setTimeout(() => {
      this.index = Math.floor(Math.random() * Object.keys(fas).length);
      this.icon = Object.values(fas)[this.index];
      // After changing icon set button active back.
      // this.buttonIsActive = true;
    }, 3000);
  }
}
