import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExerciseComponentComponent } from './exercise-component/exercise-component.component';
import { InputComponentComponent } from './input-component/input-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponentComponent,
    InputComponentComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
