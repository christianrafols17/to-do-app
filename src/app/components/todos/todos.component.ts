import { Component } from '@angular/core';
import { Todo } from '../../models/Todo';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  todoValue: String = '';
  descValue: String = '';
  faCheckCircle = faCheckCircle;

  showForm = false;
  
  todoList: Todo[] = [
    {
      content: "First Todo",
      description: "Check Functionality",
      value: false
    },
    {
      content: "Second Todo",
      description: "Check Functionality",
      value: false
    }
  ];

  finishedList: Todo[] = [

  ]
  constructor() {}

  addTodo() {
    this.todoList.push({content: this.todoValue, description: this.descValue, value: false});
    this.todoValue = "";
    this.descValue = "";
  }

  changeTodo(i: number, value: boolean) {
    const item = this.todoList.splice(i, 1);
    this.finishedList.push(item[0]);
  }

  changeFinished(i: number, value: boolean) {
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
