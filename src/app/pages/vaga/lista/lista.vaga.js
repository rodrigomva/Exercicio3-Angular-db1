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
var VagaService_1 = require("../../../service/VagaService");
var ListaVagaComponent = (function () {
    function ListaVagaComponent(vagaSerivce) {
        this.vagaSerivce = vagaSerivce;
        this.aberto = true;
    }
    ListaVagaComponent.prototype.ngOnInit = function () {
        // Carregar as vagas em aberto
        this.buscarTodosAbertos();
    };
    ListaVagaComponent.prototype.buscarTodosAbertos = function () {
        var _this = this;
        this.aberto = true;
        this.vagaSerivce.buscarTodasAbertas()
            .subscribe(function (data) {
            //Carrega a lista com o retorno da requisicao
            _this.list = data;
        }, function (error) { return _this.erroServidor = error._body; });
    };
    ListaVagaComponent.prototype.buscarTodosEncerrados = function () {
        var _this = this;
        this.aberto = false;
        this.vagaSerivce.buscarTodasEncerradas()
            .subscribe(function (data) {
            //Carrega a lista com o retorno da requisicao
            _this.list = data;
        }, function (error) { return _this.erroServidor = error._body; });
    };
    //Confirma a exclusão da vaga
    ListaVagaComponent.prototype.confirmarExlucao = function (item) {
        if (confirm("Deseja excluir a vaga " + item.Nome)) {
            this.excluirCandidato(item);
        }
    };
    //Exclui o vaga
    ListaVagaComponent.prototype.excluirCandidato = function (vaga) {
        var _this = this;
        this.vagaSerivce.excluir(vaga)
            .subscribe(function (data) {
            _this.buscarTodosAbertos();
        }, function (error) { _this.erroServidor = error._body; });
    };
    return ListaVagaComponent;
}());
ListaVagaComponent = __decorate([
    core_1.Component({
        templateUrl: './lista.vaga.html'
    }),
    __metadata("design:paramtypes", [VagaService_1.VagaService])
], ListaVagaComponent);
exports.ListaVagaComponent = ListaVagaComponent;
