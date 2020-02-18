import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  todos = [
    {
      text: "Learning Angular",
      completed: true
    },
    {
      text: "Practice Angular",
      completed: false
    }
  ];

  newTodoText = ''

  addTodo() {
    if (this.newTodoText === '') {
      return;
    }
    this.todos.push({
      text: this.newTodoText,
      completed: false
    });
    this.newTodoText = '';
  }

  getCompletedTodosCount() {
    let x = this.todos.filter(t => t.completed);
    return x.length;
  }

  deleteTodo(index: any) {
    this.todos.splice(index, 1);
  }

}
