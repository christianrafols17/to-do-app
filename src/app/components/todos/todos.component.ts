import { Component } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  todoValue: String = '';
  
  todoList: Todo[] = [
    {
      content: "Todo 1",
      value: false
    },
    {
      content: "Todo 2",
      value: false
    }
  ];

  finishedList: Todo[] = [

  ]
  constructor() {}

  addTodo() {
    this.todoList.push({content: this.todoValue, value: false});
    this.todoValue = "";
  }

  changeTodo(i: number) {
    const item = this.todoList.splice(i, 1);
    this.finishedList.push(item[0]);
  }

  changeFinished(i: number) {
    const item = this.finishedList.splice(i, 1);
    this.todoList.push(item[0]);
  }

  removeTodo(i: number) {
    this.todoList.splice(i, 1);
  }

  removeFinished(i: number) {
    this.finishedList.splice(i, 1);
  }
}
