"use strict";
var CandidatoModel = (function () {
    function CandidatoModel() {
        this.CandidatoId = null;
        this.Nome = "";
        this.Email = "";
        this.Vaga = null;
        this.Tecnologias = new Array();
    }
    return CandidatoModel;
}());
exports.CandidatoModel = CandidatoModel;
