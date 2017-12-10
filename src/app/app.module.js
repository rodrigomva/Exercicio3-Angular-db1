"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var cadastro_tecnologia_1 = require("./pages/tecnologia/cadastrar/cadastro.tecnologia");
var lista_tecnologia_1 = require("./pages/tecnologia/lista/lista.tecnologia");
var TecnologiaService_1 = require("./service/TecnologiaService");
var editar_tecnologia_1 = require("./pages/tecnologia/editar/editar.tecnologia");
var lista_vaga_1 = require("./pages/vaga/lista/lista.vaga");
var VagaService_1 = require("./service/VagaService");
var CandidatoService_1 = require("./service/CandidatoService");
var cadastrar_vaga_1 = require("./pages/vaga/cadastrar/cadastrar.vaga");
var cadastrar_candidato_1 = require("./pages/candidato/cadastrar/cadastrar.candidato");
var finalizar_vaga_1 = require("./pages/vaga/finalizar/finalizar.vaga");
var relatorio_vaga_1 = require("./pages/vaga/relatorio/relatorio.vaga");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            app_routes_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            lista_tecnologia_1.ListaTecnologiaComponent,
            cadastro_tecnologia_1.CadastrarTecnologiaComponent,
            editar_tecnologia_1.EditarTecnologiaComponent,
            lista_vaga_1.ListaVagaComponent,
            cadastrar_vaga_1.CadastrarVagaComponent,
            cadastrar_candidato_1.CadastrarCandidatoComponent,
            finalizar_vaga_1.FinalizarVagaComponent,
            relatorio_vaga_1.RelatorioVagaComponent
        ],
        providers: [
            TecnologiaService_1.TecnologiaService,
            VagaService_1.VagaService,
            CandidatoService_1.CandidatoService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
