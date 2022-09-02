import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'levigo-exercise';
  displayText: string = "";

  addItem($event: string) {
    if ($event !== undefined) {
      this.displayText = $event;
      console.log(this.displayText);
    }
  }
}
