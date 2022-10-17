import { Routes } from "@angular/router";

import { ListarTarefaComponent } from "./listar-tarefa";
import { CadastrarTarefaComponent } from "./cadastrar-tarefa";
import { EditarTarefasComponent } from "./editar-tarefas";

export const TarefaRoutes: Routes = [
    {
        path: 'tarefas',
        redirectTo: 'tarefas/listar'
    },
    {
        path: 'tarefas/listar',
        component: ListarTarefaComponent
    },
    {
        path: 'tarefas/cadastrar',
        component: CadastrarTarefaComponent
    },
    {
        path: 'tarefas/editar/:id',
        component: EditarTarefasComponent
    }
];