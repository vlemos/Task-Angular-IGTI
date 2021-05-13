import { task } from '../entity/task';

export class TaskService {
  lastId: number = 2;

  items: task[] = [
    {
      id: 1,
      description: 'Tarefa 1',
      done: false,
    },
    {
      id: 2,
      description: 'Tarefa 2',
      done: true,
    },
  ];

  public addTask(newTask: task) {
    ++this.lastId;
    newTask.id = this.lastId;
    this.items.push(newTask);

    console.log(this.items);
  }

  deleteTask(tasktoRemove: task) {
    // pensar em como pegar o indice na lista corretamente

    this.items.splice(this.pegaIndice(tasktoRemove), 1);
  }

  pegaIndice(tasktoRemove: task): number {
    return this.items.findIndex((item) => {
      if (item.id === tasktoRemove.id) {
        return true;
      }
    });
  }
}
