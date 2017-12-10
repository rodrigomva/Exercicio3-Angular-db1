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
var tecnologia_model_1 = require("../../../model/tecnologia.model");
var router_1 = require("@angular/router");
var CadastrarTecnologiaComponent = (function () {
    function CadastrarTecnologiaComponent(tecnologiaSerivce, router) {
        this.tecnologiaSerivce = tecnologiaSerivce;
        this.router = router;
    }
    CadastrarTecnologiaComponent.prototype.ngOnInit = function () {
        this.tecnologia = new tecnologia_model_1.TecnologiaModel();
    };
    CadastrarTecnologiaComponent.prototype.cadastrar = function () {
        var _this = this;
        this.erroServidor = null;
        this.tecnologiaSerivce.cadastrar(this.tecnologia)
            .subscribe(function (data) {
            _this.router.navigate(['./tecnologias']);
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    return CadastrarTecnologiaComponent;
}());
CadastrarTecnologiaComponent = __decorate([
    core_1.Component({
        templateUrl: './cadastro.tecnologia.html'
    }),
    __metadata("design:paramtypes", [TecnologiaService_1.TecnologiaService, router_1.Router])
], CadastrarTecnologiaComponent);
exports.CadastrarTecnologiaComponent = CadastrarTecnologiaComponent;
