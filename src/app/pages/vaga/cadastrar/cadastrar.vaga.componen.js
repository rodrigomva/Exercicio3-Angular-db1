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
var router_1 = require("@angular/router");
var VagaService_1 = require("../../../service/VagaService");
var vaga_model_1 = require("../../../model/vaga.model");
var CandidatoService_1 = require("../../../service/CandidatoService");
var CadastrarVagaComponent = (function () {
    function CadastrarVagaComponent(vagaSerivce, candidatoSerivce, router, route) {
        this.vagaSerivce = vagaSerivce;
        this.candidatoSerivce = candidatoSerivce;
        this.router = router;
        this.route = route;
    }
    CadastrarVagaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vaga = new vaga_model_1.VagaModel();
        this.route.params.subscribe(function (params) {
            //Atribui o parametro com o login do usuario para a varialvel
            _this.vagaId = params['vagaId'];
            if (_this.vagaId > 0)
                _this.buscarPorId();
        });
    };
    CadastrarVagaComponent.prototype.salvar = function () {
        if (this.vaga.VagaId > 0)
            this.editar();
        else
            this.cadastrar();
    };
    CadastrarVagaComponent.prototype.cadastrar = function () {
        var _this = this;
        this.erroServidor = null;
        this.vagaSerivce.cadastrar(this.vaga)
            .subscribe(function (data) {
            _this.vaga = data;
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    CadastrarVagaComponent.prototype.editar = function () {
        var _this = this;
        this.erroServidor = null;
        this.vagaSerivce.editar(this.vaga)
            .subscribe(function (data) {
            _this.vaga = data;
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    CadastrarVagaComponent.prototype.buscarPorId = function () {
        var _this = this;
        this.vagaSerivce.buscarPorId(this.vagaId)
            .subscribe(function (vaga) { return _this.vaga = vaga; }, function (error) { _this.erroServidor = error._body; });
    };
    CadastrarVagaComponent.prototype.confirmarExlucaoCandidato = function (item) {
        if (confirm("Deseja excluir o candidato " + item.Nome)) {
            this.excluirCandidato(item);
        }
    };
    CadastrarVagaComponent.prototype.excluirCandidato = function (candidato) {
        var _this = this;
        this.candidatoSerivce.excluir(candidato)
            .subscribe(function (data) {
            _this.buscarPorId();
        }, function (error) { _this.erroServidor = error._body; });
    };
    return CadastrarVagaComponent;
}());
CadastrarVagaComponent = __decorate([
    core_1.Component({
        templateUrl: './cadastrar.vaga.component.html'
    }),
    __metadata("design:paramtypes", [VagaService_1.VagaService, CandidatoService_1.CandidatoService, router_1.Router, router_1.ActivatedRoute])
], CadastrarVagaComponent);
exports.CadastrarVagaComponent = CadastrarVagaComponent;
