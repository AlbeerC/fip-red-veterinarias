"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paciente = void 0;
var Paciente = /** @class */ (function () {
    function Paciente(nombre, especie, edad, idDueño) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.idDueño = idDueño;
        this.clasificarEspecie();
    }
    //metodos
    Paciente.prototype.clasificarEspecie = function () {
        if (this.especie.toLowerCase() !== "perro" && this.especie.toLowerCase() !== "gato") {
            this.especie = "Exótico";
        }
    };
    Paciente.prototype.obtenerInformacion = function () {
        return "Nombre: ".concat(this.nombre, ", Especie: ").concat(this.especie, ", Edad: ").concat(this.edad, " a\u00F1os, ID del Due\u00F1o: ").concat(this.idDueño);
    };
    //getters
    Paciente.prototype.getNombre = function () {
        return this.nombre;
    };
    Paciente.prototype.getEspecie = function () {
        return this.especie;
    };
    Paciente.prototype.getEdad = function () {
        return this.edad;
    };
    Paciente.prototype.getidDueño = function () {
        return this.idDueño;
    };
    //setters
    Paciente.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Paciente.prototype.setEspecie = function (especie) {
        this.especie = especie;
    };
    Paciente.prototype.setEdad = function (edad) {
        this.edad = edad;
    };
    return Paciente;
}());
exports.Paciente = Paciente;
