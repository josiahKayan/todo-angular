import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list.component';
import { TaskComponent } from './task/task.component';
import { TaskIniciadaComponent } from './task-iniciada/task-iniciada.component';
import { TaskFinalizadaComponent } from './task-finalizada/task-finalizada.component';
import { ListComponent } from './list/list.component';
import { TodoService } from 'src/app/services/todo.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [
    TodoListComponent,
    TaskComponent,
    TaskIniciadaComponent,
    TaskFinalizadaComponent,
    ListComponent,
  ],
  exports: [TodoListComponent],
  providers: [TodoService],
})
export class TodoListModule {}
