import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarTecnologiaComponent } from "./pages/tecnologia/cadastrar/cadastro.tecnologia";
import { ListaTecnologiaComponent } from "./pages/tecnologia/lista/lista.tecnologia";
import { EditarTecnologiaComponent } from "./pages/tecnologia/editar/editar.tecnologia";
import { ListaVagaComponent } from "./pages/vaga/lista/lista.vaga";
import { CadastrarVagaComponent } from "./pages/vaga/cadastrar/cadastrar.vaga";
import { CadastrarCandidatoComponent } from "./pages/candidato/cadastrar/cadastrar.candidato";
import { FinalizarVagaComponent } from "./pages/vaga/finalizar/finalizar.vaga";
import { RelatorioVagaComponent } from "./pages/vaga/relatorio/relatorio.vaga";


//Configuração das Rotas
export const routes: Routes = [

  //Redireciona para a lista de vagas
  { path: '', redirectTo: '/vagas', pathMatch: 'full'},
  
  { path: 'tecnologias', component: ListaTecnologiaComponent },
  { path: 'tecnologias/cadastrar', component: CadastrarTecnologiaComponent },
  { path: 'tecnologias/editar/:tecnologiaId', component: EditarTecnologiaComponent },

  { path: 'vagas', component: ListaVagaComponent },
  { path: 'vagas/cadastrar', component: CadastrarVagaComponent },
  { path: 'vagas/cadastrar/:vagaId', component: CadastrarVagaComponent },
  { path: 'vagas/candidato/cadastrar', component: CadastrarCandidatoComponent },
  { path: 'vagas/finalizar/:vagaId', component: FinalizarVagaComponent },
  { path: 'vagas/relatorio/:vagaId', component: RelatorioVagaComponent }
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);