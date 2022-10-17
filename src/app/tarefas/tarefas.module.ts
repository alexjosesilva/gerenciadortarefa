import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarefaService } from './shared';
import { ListarTarefaComponent } from './listar-tarefa';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CadastrarTarefaComponent } from './cadastrar-tarefa/cadastrar-tarefa.component';
import { EditarTarefasComponent } from './editar-tarefas/editar-tarefas.component';

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefasComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers:[
    TarefaService
  ]
})
export class TarefasModule { }
