import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { CadastrarTecnologiaComponent } from "./pages/tecnologia/cadastrar/cadastro.tecnologia";
import { ListaTecnologiaComponent } from "./pages/tecnologia/lista/lista.tecnologia";
import { TecnologiaService } from "./service/TecnologiaService";
import { EditarTecnologiaComponent } from "./pages/tecnologia/editar/editar.tecnologia";
import { ListaVagaComponent } from "./pages/vaga/lista/lista.vaga";
import { VagaService } from "./service/VagaService";
import { CandidatoService } from "./service/CandidatoService";
import { CadastrarVagaComponent } from "./pages/vaga/cadastrar/cadastrar.vaga";
import { CadastrarCandidatoComponent } from "./pages/candidato/cadastrar/cadastrar.candidato";
import { FinalizarVagaComponent } from "./pages/vaga/finalizar/finalizar.vaga";
import { RelatorioVagaComponent } from "./pages/vaga/relatorio/relatorio.vaga";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  declarations: [
    AppComponent,
    ListaTecnologiaComponent,
    CadastrarTecnologiaComponent,
    EditarTecnologiaComponent,
    ListaVagaComponent,
    CadastrarVagaComponent,
    CadastrarCandidatoComponent,
    FinalizarVagaComponent,
    RelatorioVagaComponent
  ],
  providers: [
    TecnologiaService,
    VagaService,
    CandidatoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}