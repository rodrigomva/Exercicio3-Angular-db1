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
var TecnologiaService = (function () {
    // Classe contrutora
    function TecnologiaService(_http) {
        this._http = _http;
        // URL base da API
        this.url = ip_servidor_1.Servidor.Ip();
    }
    ;
    //Buscar Todas as tecnologias
    TecnologiaService.prototype.buscarTodos = function () {
        return this._http.get(this.url + "tecnologia/BuscarTodos")
            .map(function (res) { return res.json(); });
    };
    //Buscar Todas as tecnologias ativas
    TecnologiaService.prototype.buscarTodosAtivos = function () {
        return this._http.get(this.url + "Tecnologia/BuscarTodosAtivos")
            .map(function (res) { return res.json(); });
    };
    //Buscar Tecnologia por ID
    TecnologiaService.prototype.buscarPorId = function (id) {
        return this._http.get(this.url + "Tecnologia/BuscaPorId/" + id)
            .map(function (res) { return res.json(); });
    };
    //Cadastrar uma tecnologia
    TecnologiaService.prototype.cadastrar = function (tecnologia) {
        return this._http.post(this.url + "Tecnologia/Cadastrar", tecnologia)
            .map(function (res) { return res.json(); });
    };
    //Editar uma tecnologia
    TecnologiaService.prototype.editar = function (tecnologia) {
        return this._http.post(this.url + "Tecnologia/Editar", tecnologia)
            .map(function (res) { return res.json(); });
    };
    //Excluir uma tecnologia
    TecnologiaService.prototype.excluir = function (tecnologia) {
        return this._http.post(this.url + "Tecnologia/Excluir", tecnologia)
            .map(function (res) { return res.json(); });
    };
    return TecnologiaService;
}());
TecnologiaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TecnologiaService);
exports.TecnologiaService = TecnologiaService;
