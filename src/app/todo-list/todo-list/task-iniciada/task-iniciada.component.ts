import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { Task } from 'src/app/model/task.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task-iniciada',
  templateUrl: './task-iniciada.component.html',
  styleUrls: ['./task-iniciada.component.css'],
})
export class TaskIniciadaComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  public iniciadas$: Observable<any> = of([]);

  ngOnInit() {
    this.iniciadas$ = this.todoService.getTodoList$;
  }
}
