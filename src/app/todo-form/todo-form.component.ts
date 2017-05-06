import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  todos: TodoForm[] = [];
  model = new TodoForm(0, "", false);

  people = [
    {id: 1, name: "taro"},
    {id: 2, name: "jiro"},
    {id: 3, name: "ichiro"}
  ];

  ngOnInit() {
  }

  onSubmit() {
    if(this.model.id === 0) {
      this.model.id = this.todos.length + 1;
      this.todos.push(this.model);
    }else{
      this.todos[this.model.id - 1] = this.model;
    }
    this.model = new TodoForm(0, "", false);
  }

  onEdit(id: number) {
    this.model = Object.assign({}, this.todos[id - 1]);
  }
}

import * as moment from 'moment';

export class TodoForm {
  constructor(
    public id: number,
    public title: string,
    public active: boolean,
    public assigneeID?: number
  ) {  }
}
