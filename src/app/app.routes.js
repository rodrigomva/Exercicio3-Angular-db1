"use strict";
var router_1 = require("@angular/router");
var cadastro_tecnologia_1 = require("./pages/tecnologia/cadastrar/cadastro.tecnologia");
var lista_tecnologia_1 = require("./pages/tecnologia/lista/lista.tecnologia");
var editar_tecnologia_1 = require("./pages/tecnologia/editar/editar.tecnologia");
var lista_vaga_1 = require("./pages/vaga/lista/lista.vaga");
var cadastrar_vaga_1 = require("./pages/vaga/cadastrar/cadastrar.vaga");
var cadastrar_candidato_1 = require("./pages/candidato/cadastrar/cadastrar.candidato");
var finalizar_vaga_1 = require("./pages/vaga/finalizar/finalizar.vaga");
var relatorio_vaga_1 = require("./pages/vaga/relatorio/relatorio.vaga");
//Configuração das Rotas
exports.routes = [
    //Redireciona para a lista de vagas
    { path: '', redirectTo: '/vagas', pathMatch: 'full' },
    { path: 'tecnologias', component: lista_tecnologia_1.ListaTecnologiaComponent },
    { path: 'tecnologias/cadastrar', component: cadastro_tecnologia_1.CadastrarTecnologiaComponent },
    { path: 'tecnologias/editar/:tecnologiaId', component: editar_tecnologia_1.EditarTecnologiaComponent },
    { path: 'vagas', component: lista_vaga_1.ListaVagaComponent },
    { path: 'vagas/cadastrar', component: cadastrar_vaga_1.CadastrarVagaComponent },
    { path: 'vagas/cadastrar/:vagaId', component: cadastrar_vaga_1.CadastrarVagaComponent },
    { path: 'vagas/candidato/cadastrar', component: cadastrar_candidato_1.CadastrarCandidatoComponent },
    { path: 'vagas/finalizar/:vagaId', component: finalizar_vaga_1.FinalizarVagaComponent },
    { path: 'vagas/relatorio/:vagaId', component: relatorio_vaga_1.RelatorioVagaComponent }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
