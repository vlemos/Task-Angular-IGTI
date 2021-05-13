import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppComponent } from './app.component';
import { TarefasComponent } from './tarefas/tarefas.component';
import { PanelModule } from 'primeng/panel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';
import { OrderListModule } from 'primeng/orderlist';
import { TaskService } from './services/task.service';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { TableModule } from 'primeng/table';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [AppComponent, TarefasComponent],
  imports: [
    BrowserModule,
    ButtonModule,
    PanelModule,
    InputTextModule,
    BrowserAnimationsModule,
    TooltipModule,
    OrderListModule,
    FormsModule,
    DataViewModule,
    TableModule,
    ToastModule,
  ],
  providers: [TaskService],
  bootstrap: [AppComponent],
})
export class AppModule {}
