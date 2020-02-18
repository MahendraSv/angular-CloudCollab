import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() todoInput: any;
  @Input() index: any;
  @Output() delTodo = new EventEmitter();

  deleteTodo() {
    this.delTodo.emit(this.index);
  }
}
