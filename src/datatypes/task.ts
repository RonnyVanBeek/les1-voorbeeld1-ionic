// @ts-ignore

export interface TaskI{
  name: string;
  done: boolean;
  id: number;
}

export class Task implements TaskI {
  done: boolean;
  id: number;
  name: string;

  constructor(task: TaskI) {
    Object.assign(this, task);
  }

toggleStatus(): void{
  this.done= !this.done;
  }
}
