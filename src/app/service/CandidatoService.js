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
var CandidatoService = (function () {
    // Classe contrutora
    function CandidatoService(_http) {
        this._http = _http;
        // URL base da API
        this.url = ip_servidor_1.Servidor.Ip();
    }
    //Buscar candidatos por vaga
    CandidatoService.prototype.buscarPorVaga = function (id) {
        return this._http.get(this.url + "candidato/BuscarPorVaga/" + id)
            .map(function (res) { return res.json(); });
    };
    //Buscar candidato por ID
    CandidatoService.prototype.buscarPorId = function (id) {
        return this._http.get(this.url + "candidato/BuscarPorId/" + id)
            .map(function (res) { return res.json(); });
    };
    //Cadastrar um candidato
    CandidatoService.prototype.cadastrar = function (candidato) {
        return this._http.post(this.url + "candidato/Cadastrar", candidato)
            .map(function (res) { return res.json(); });
    };
    //Excluir um candidato
    CandidatoService.prototype.excluir = function (candidato) {
        return this._http.post(this.url + "candidato/Excluir", candidato)
            .map(function (res) { return res.json(); });
    };
    return CandidatoService;
}());
CandidatoService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], CandidatoService);
exports.CandidatoService = CandidatoService;
