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
var VagaService_1 = require("../../../service/VagaService");
var vaga_model_1 = require("../../../model/vaga.model");
var vagaPeso_model_1 = require("../../../model/vagaPeso.model");
var FinalizarVagaComponent = (function () {
    function FinalizarVagaComponent(vagaSerivce, tecnologiaService, router, route) {
        this.vagaSerivce = vagaSerivce;
        this.tecnologiaService = tecnologiaService;
        this.router = router;
        this.route = route;
    }
    FinalizarVagaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.vaga = new vaga_model_1.VagaModel();
        //Busca todas as tecnologias
        this.buscarTecnologias();
        //Buscar parametro da vaga Id
        this.route.params.subscribe(function (params) {
            _this.vagaId = params['vagaId'];
            if (_this.vagaId > 0)
                _this.buscarPorId();
        });
    };
    FinalizarVagaComponent.prototype.salvar = function () {
        var _this = this;
        this.erroServidor = null;
        this.vaga.Pesos = new Array();
        //Passa todos os valores do peso para a tabela de VagaPeso
        for (var _i = 0, _a = this.listTecnologias; _i < _a.length; _i++) {
            var tecnologia = _a[_i];
            var vagaPeso = new vagaPeso_model_1.VagaPesoModel();
            vagaPeso.TecnologiaId = tecnologia.TecnologiaId;
            vagaPeso.VagaId = this.vagaId;
            vagaPeso.Peso = tecnologia.PesoVaga;
            this.vaga.Pesos.push(vagaPeso);
        }
        this.vagaSerivce.finalizar(this.vaga)
            .subscribe(function (data) {
            _this.router.navigate(['./vagas/relatorio', _this.vaga.VagaId]);
        }, function (error) {
            _this.erroServidor = error._body;
        });
    };
    FinalizarVagaComponent.prototype.buscarPorId = function () {
        var _this = this;
        this.vagaSerivce.buscarPorId(this.vagaId)
            .subscribe(function (vaga) {
            _this.vaga = vaga;
            _this.vaga.Candidatos = null;
        }, function (error) { return _this.erroServidor = error._body; });
    };
    FinalizarVagaComponent.prototype.buscarTecnologias = function () {
        var _this = this;
        this.tecnologiaService.buscarTodosAtivos()
            .subscribe(function (data) {
            //Carrega a lista com o retorno da requisicao
            _this.listTecnologias = data;
        }, function (error) { return _this.erroServidor = error._body; });
    };
    return FinalizarVagaComponent;
}());
FinalizarVagaComponent = __decorate([
    core_1.Component({
        templateUrl: './finalizar.vaga.html'
    }),
    __metadata("design:paramtypes", [VagaService_1.VagaService, TecnologiaService_1.TecnologiaService, router_1.Router, router_1.ActivatedRoute])
], FinalizarVagaComponent);
exports.FinalizarVagaComponent = FinalizarVagaComponent;
