import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodoList$: Observable<Task[]> = this.http.get<Task[]>(
    'http://localhost:3333/todolist'
  );

  // getTodoList(): Observable<Task[]> {
  //   return this.http.get<Task[]>('http://localhost:3333/todolist');
  // }
}
