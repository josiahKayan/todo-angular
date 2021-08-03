import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/model/task.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  @Input() taskList: Task[] = [];
}
