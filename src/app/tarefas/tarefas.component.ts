import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { task } from '../entity/task';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
  providers: [MessageService],
})
export class TarefasComponent implements OnInit {
  constructor(
    public taskService: TaskService,
    private messageService: MessageService
  ) {
    this.renovaTask();
  }

  task: task;
  visible: true;

  ngOnInit(): void {}

  addTask() {
    console.log('chamou o addTask');
    if (this.task.id != 0) {
      console.log(`Editando tarefa ${this.task.description}`);

      this.renovaTask();
    } else {
      if (this.task.description.trim().length > 0) {
        console.log('entrou no metodo');
        this.taskService.addTask(this.task);
        this.renovaTask();
      }
    }
  }

  onRowSelect(event) {
    this.messageService.add({
      severity: 'info',
      summary: 'Tarefa Selecionada',
      detail: this.task.description,
    });
  }
  delTask() {
    console.log(`Tarefa a ser removida ${this.task.description}`);
    if (this.task.id > 0) {
      console.log(`remover tarefa ${this.task.id}`);
      this.taskService.deleteTask(this.task);
      this.renovaTask();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Selecione ao menos uma tarefa',
      });
    }
  }

  taskDone() {
    console.log(`Tarefa a ser concluida ${this.task.description}`);
    if (this.task.id > 0) {
      console.log(`concluir tarefa`);
      this.task.done = true;
      this.renovaTask();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Selecione ao menos uma tarefa',
      });
    }
  }
  renovaTask() {
    this.task = {
      id: 0,
      description: '',
      done: false,
    };
  }
}
