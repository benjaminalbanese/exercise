import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'levigo-exercise';
  strings : string[] = ['Default: erster String', 'Default: zweiter String'];

  addItem($event: string) {
    if ($event !== undefined) {
      this.strings.push($event);
    }
  }
}
