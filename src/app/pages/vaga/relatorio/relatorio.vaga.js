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
var ip_servidor_1 = require("../../../service/ip.servidor");
var platform_browser_1 = require("@angular/platform-browser");
var RelatorioVagaComponent = (function () {
    function RelatorioVagaComponent(vagaSerivce, route, sanitizer) {
        this.vagaSerivce = vagaSerivce;
        this.route = route;
        this.sanitizer = sanitizer;
    }
    RelatorioVagaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.vagaId = params['vagaId'];
            _this.url = _this.sanitizer.bypassSecurityTrustResourceUrl(ip_servidor_1.Servidor.Ip() + "Vaga/Relatorio/" + _this.vagaId);
        });
    };
    return RelatorioVagaComponent;
}());
RelatorioVagaComponent = __decorate([
    core_1.Component({
        templateUrl: './relatorio.vaga.html'
    }),
    __metadata("design:paramtypes", [VagaService_1.VagaService, router_1.ActivatedRoute, platform_browser_1.DomSanitizer])
], RelatorioVagaComponent);
exports.RelatorioVagaComponent = RelatorioVagaComponent;
