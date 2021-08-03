import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-task-finalizada',
  templateUrl: './task-finalizada.component.html',
  styleUrls: ['./task-finalizada.component.css'],
})
export class TaskFinalizadaComponent implements OnInit {
  constructor(private todoservice: TodoService) {}

  public finalizados$: Observable<any> = of([]);

  ngOnInit() {
    this.finalizados$ = this.todoservice.getTodoList$;
  }
}
