import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise-component',
  template: `
    <p>
      Text to be displayed in the child component:
      {{displayText}}
    </p>
  `,
  styleUrls: ['./exercise-component.component.css']
})
export class ExerciseComponentComponent implements OnInit {

  // whatever
  @Input() displayText : string = "";
  constructor() {
    this.displayText = "";
  }

  ngOnInit(): void {
  }

}
