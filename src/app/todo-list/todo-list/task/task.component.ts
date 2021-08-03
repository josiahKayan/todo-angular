import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  public todoList$: Observable<any> = of([]);

  ngOnInit() {
    this.todoList$ = this.todoService.getTodoList$;
  }
}
