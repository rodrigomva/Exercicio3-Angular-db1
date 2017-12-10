"use strict";
var Servidor = (function () {
    function Servidor() {
    }
    Servidor.Ip = function () {
        return "http://localhost:52551/api/";
    };
    return Servidor;
}());
exports.Servidor = Servidor;
