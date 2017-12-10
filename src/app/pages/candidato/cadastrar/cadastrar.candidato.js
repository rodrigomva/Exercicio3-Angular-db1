"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var TecnologiaService_1 = require("../../../service/TecnologiaService");
var router_1 = require("@angular/router");
var candidato_model_1 = require("../../../model/candidato.model");
var CandidatoService_1 = require("../../../service/CandidatoService");
var candidatoTecnologia_model_1 = require("../../../model/candidatoTecnologia.model.");
var CadastrarCandidatoComponent = (function () {
    function CadastrarCandidatoComponent(candidatoService, tecnologiaSerivce, router, route) {
        this.candidatoService = candidatoService;
        this.tecnologiaSerivce = tecnologiaSerivce;
        this.router = router;
        this.route = route;
    }
    CadastrarCandidatoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.candidato = new candidato_model_1.CandidatoModel();
        //Carregar as tecnologias
        this.buscarTecnologias();
        //Buscar parametro VagaId
        this.route.queryParams.subscribe(function (params) {
            _this.candidato.VagaId = params['vagaId'];
        });
    };
    CadastrarCandidatoComponent.prototype.buscarTecnologias = function () {
        var _this = this;
        this.tecnologiaSerivce.buscarTodosAtivos()
            .subscribe(function (data) {
            //Carrega a lista com o retorno da requisicao
            _this.listTecnologias = data;
        }, function (error) { return console.log(error); });
    };
    CadastrarCandidatoComponent.prototype.cadastrar = function () {
        var _this = this;
        this.erroServidor = null;
        this.candidatoService.cadastrar(this.candidato)
            .subscribe(function (data) {
            _this.router.navigate(['./vagas/cadastrar', _this.candidato.VagaId]);
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    CadastrarCandidatoComponent.prototype.buscarPorId = function (candidatoId) {
        var _this = this;
        this.candidatoService.buscarPorId(candidatoId)
            .subscribe(function (candidato) { return _this.candidato = candidato; }, function (error) { return console.log(error); });
    };
    //Quando o usuario marcar uma tecnologia, então adiciona na lista
    CadastrarCandidatoComponent.prototype.selecionarTecnologia = function (tecnologia, event) {
        if (event.target.checked) {
            var candidatoTecnologia = new candidatoTecnologia_model_1.CandidatoTecnologiaModel();
            candidatoTecnologia.TecnologiaId = tecnologia.TecnologiaId;
            this.candidato.Tecnologias.push(candidatoTecnologia);
        }
    };
    return CadastrarCandidatoComponent;
}());
CadastrarCandidatoComponent = __decorate([
    core_1.Component({
        templateUrl: './cadastrar.candidato.html'
    }),
    __metadata("design:paramtypes", [CandidatoService_1.CandidatoService, TecnologiaService_1.TecnologiaService, router_1.Router, router_1.ActivatedRoute])
], CadastrarCandidatoComponent);
exports.CadastrarCandidatoComponent = CadastrarCandidatoComponent;
