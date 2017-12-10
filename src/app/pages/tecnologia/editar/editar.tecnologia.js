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
var EditarTecnologiaComponent = (function () {
    function EditarTecnologiaComponent(tecnologiaSerivce, router, route) {
        this.tecnologiaSerivce = tecnologiaSerivce;
        this.router = router;
        this.route = route;
    }
    EditarTecnologiaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tecnologia = new tecnologia_model_1.TecnologiaModel();
        //Buscar parametro da tecnologiaId
        this.route.params.subscribe(function (params) {
            var tecnologiaId = params['tecnologiaId'];
            _this.buscarPorId(tecnologiaId);
        });
    };
    EditarTecnologiaComponent.prototype.buscarPorId = function (tecnologiaId) {
        var _this = this;
        this.tecnologiaSerivce.buscarPorId(tecnologiaId)
            .subscribe(function (tecnologia) { return _this.tecnologia = tecnologia; }, function (error) { return console.log(error); });
    };
    EditarTecnologiaComponent.prototype.editar = function () {
        var _this = this;
        this.erroServidor = null;
        this.tecnologiaSerivce.editar(this.tecnologia)
            .subscribe(function (data) {
            _this.router.navigate(['./tecnologias']);
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    return EditarTecnologiaComponent;
}());
EditarTecnologiaComponent = __decorate([
    core_1.Component({
        templateUrl: './editar.tecnologia.html'
    }),
    __metadata("design:paramtypes", [TecnologiaService_1.TecnologiaService, router_1.Router, router_1.ActivatedRoute])
], EditarTecnologiaComponent);
exports.EditarTecnologiaComponent = EditarTecnologiaComponent;
