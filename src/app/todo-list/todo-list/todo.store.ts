import { BehaviorSubject } from 'rxjs';
import { Task } from 'src/app/model/task.model';

export interface State {
  todoList: Task[];
}

const state: State = {
  todoList: [],
};

export class Store {
  private subject = new BehaviorSubject<State>(state);
  private store = this.subject.asObservable();

  get value() {
    return this.subject.value;
  }

  set(name: string, state: any) {
    return this.subject.next({
      ...this.value,
      [name]: state,
    });
  }
}
