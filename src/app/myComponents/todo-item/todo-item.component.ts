import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../ToDo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;
  @Input()
  i!: number;
  @Output() todoDelete: EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckbox: EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClick(todo: Todo) {
    this.todoDelete.emit(todo);
    console.log("onClick has been triggerd")
  }
  onCheckboxClick(todo: Todo | undefined) {
    console.log(todo)
    this.todoCheckbox.emit(todo);
  }
}
