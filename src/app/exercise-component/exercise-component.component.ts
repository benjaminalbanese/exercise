import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-exercise-component',
  templateUrl: './exercise-component.component.html',
  styleUrls: ['./exercise-component.component.css']
})
export class ExerciseComponentComponent implements OnInit {

  // whatever
  @Input() displayTexts : string[] = [];
  constructor() {
  }

  ngOnInit(): void {
  }

}
