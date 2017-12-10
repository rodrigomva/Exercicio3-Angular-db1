"use strict";
var vaga_model_1 = require("./vaga.model");
var VagaPesoModel = (function () {
    function VagaPesoModel() {
        this.VagaPesoId = null;
        this.Tecnologia = null;
        this.Peso = null;
        this.Vagas = new vaga_model_1.VagaModel();
    }
    return VagaPesoModel;
}());
exports.VagaPesoModel = VagaPesoModel;
