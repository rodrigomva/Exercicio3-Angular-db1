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
var ListaTecnologiaComponent = (function () {
    function ListaTecnologiaComponent(tecnologiaSerivce) {
        this.tecnologiaSerivce = tecnologiaSerivce;
        this.carregando = false;
    }
    ListaTecnologiaComponent.prototype.ngOnInit = function () {
        // Carregar as tecnologias
        this.buscarTodosAtivos();
    };
    ListaTecnologiaComponent.prototype.buscarTodosAtivos = function () {
        var _this = this;
        this.tecnologiaSerivce.buscarTodosAtivos()
            .subscribe(function (data) {
            //Carrega a lista com o retorno da requisicao
            _this.list = data;
        }, function (error) { return _this.erroServidor = error._body; });
    };
    //Confirma se dejea excluir mesmo
    ListaTecnologiaComponent.prototype.confirmarExlucao = function (item) {
        if (confirm("Deseja excluir a tecnologia  " + item.Nome)) {
            this.excluir(item);
        }
    };
    //Excluir a tecnologia
    ListaTecnologiaComponent.prototype.excluir = function (item) {
        var _this = this;
        this.tecnologiaSerivce.excluir(item)
            .subscribe(function (data) {
            _this.buscarTodosAtivos();
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    return ListaTecnologiaComponent;
}());
ListaTecnologiaComponent = __decorate([
    core_1.Component({
        templateUrl: './lista.tecnologia.html'
    }),
    __metadata("design:paramtypes", [TecnologiaService_1.TecnologiaService])
], ListaTecnologiaComponent);
exports.ListaTecnologiaComponent = ListaTecnologiaComponent;
