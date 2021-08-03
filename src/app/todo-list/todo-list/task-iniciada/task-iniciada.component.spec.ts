/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TaskIniciadaComponent } from './task-iniciada.component';

describe('TaskIniciadaComponent', () => {
  let component: TaskIniciadaComponent;
  let fixture: ComponentFixture<TaskIniciadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskIniciadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskIniciadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
