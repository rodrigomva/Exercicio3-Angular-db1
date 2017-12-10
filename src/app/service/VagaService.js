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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var ip_servidor_1 = require("./ip.servidor");
var VagaService = (function () {
    // Classe contrutora
    function VagaService(_http) {
        this._http = _http;
        // URL base da API
        this.url = ip_servidor_1.Servidor.Ip();
    }
    //Buscar Todas as vagas em aberto
    VagaService.prototype.buscarTodasAbertas = function () {
        return this._http.get(this.url + "vaga/BuscarTodasAbertas/")
            .map(function (res) { return res.json(); });
    };
    //Buscar Todas as vagas encerradas
    VagaService.prototype.buscarTodasEncerradas = function () {
        return this._http.get(this.url + "vaga/BuscarTodasEncerradas/")
            .map(function (res) { return res.json(); });
    };
    //Buscar Vaga por ID
    VagaService.prototype.buscarPorId = function (id) {
        return this._http.get(this.url + "vaga/BuscarPorId/" + id)
            .map(function (res) { return res.json(); });
    };
    //Cadastrar uma vaga
    VagaService.prototype.cadastrar = function (vaga) {
        return this._http.post(this.url + "vaga/Cadastrar", vaga)
            .map(function (res) { return res.json(); });
    };
    //Finalizar uma caga
    VagaService.prototype.finalizar = function (vaga) {
        return this._http.post(this.url + "vaga/Finalizar", vaga)
            .map(function (res) { return res.json(); });
    };
    //Editar uma vaga
    VagaService.prototype.editar = function (vaga) {
        return this._http.post(this.url + "vaga/Editar", vaga)
            .map(function (res) { return res.json(); });
    };
    //Excluir uma vaga
    VagaService.prototype.excluir = function (vaga) {
        return this._http.post(this.url + "vaga/Excluir", vaga)
            .map(function (res) { return res.json(); });
    };
    return VagaService;
}());
VagaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], VagaService);
exports.VagaService = VagaService;
