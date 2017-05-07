import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdInputModule, MdSlideToggleModule, 
  MdSelectModule, MdAutocompleteModule } from '@angular/material';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdSlideToggleModule,
    MdSelectModule,
    MdAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
