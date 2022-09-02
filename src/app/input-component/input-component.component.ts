import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {ExerciseComponentComponent} from "../exercise-component/exercise-component.component";

@Component({
  selector: 'app-input-component',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.css']
})
export class InputComponentComponent implements OnInit {

  constructor() { }
  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value:string){
    this.newItemEvent.emit(value);
  }

  ngOnInit(): void {
  }

}
