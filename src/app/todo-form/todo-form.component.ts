import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor() { }

  todos: TodoForm[] = [];
  model = new TodoForm(0, "", false);

  people: Person[] = [
    {id: 1, name: "taro"},
    {id: 2, name: "jiro"},
    {id: 3, name: "ichiro"}
  ];

  options = [ "あかさたな", "はまやらわ", "ををを" ];

  // assigneeのauto complete
  assigneeFormControl = new FormControl();
  filteredAssignee: Observable<Person[]>;

  ngOnInit() {
    this.filteredAssignee = this.assigneeFormControl.valueChanges
         .startWith(null)
         .map(val => val ? this.assigneeFilter(val) : this.people.slice());

    this.assigneeFormControl.asyncValidator
  }
  
  assigneeFilter(val: string): Person[] {
    return this.people.filter(p => new RegExp(`^${val}`, 'gi').test(p.name)); 
  }

  displayAssignee(person: Person): string {
      return person ? person.name : '';
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
    public priority?: number,
    public assignee?: Person,
  ) {  }
}

interface Person { id: number, name: string };
