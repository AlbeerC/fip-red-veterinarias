"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinarias = void 0;
var Veterinaria_1 = require("./Veterinaria");
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias(nombre) {
        this.veterinarias = [];
        this.nombre = nombre;
    }
    RedVeterinarias.prototype.agregarVeterinaria = function (nombre, ubicacion) {
        var nuevaVeterinaria = new Veterinaria_1.Veterinaria(nombre, ubicacion);
        this.veterinarias.push(nuevaVeterinaria);
    };
    RedVeterinarias.prototype.eliminarVeterinaria = function (nombre) {
        // Busca el índice de la veterinaria que conincida con el nombre ingresado
        var index = this.veterinarias.findIndex(function (vete) { return vete.getNombre().toLowerCase() === nombre.toLowerCase(); });
        // Si el índice es mayor a -1, la veterinaria a eliminar existe
        if (index > -1) {
            this.veterinarias.splice(index, 1);
        }
        else {
            console.log("El nombre ingresado no pertenece a ninguna veterinaria");
        }
    };
    RedVeterinarias.prototype.mostrarVeterinarias = function () {
        if (this.veterinarias.length === 0) {
            console.log("No hay veterinarias registradas");
            return;
        }
        this.veterinarias.forEach(function (veterinaria, index) {
            console.log("".concat(index + 1, " - ").concat(veterinaria.getNombre(), " - ").concat(veterinaria.getUbicacion()));
        });
    };
    // Getters
    RedVeterinarias.prototype.getNombre = function () {
        return this.nombre;
    };
    RedVeterinarias.prototype.getVeterinarias = function () {
        return this.veterinarias;
    };
    // Setters
    RedVeterinarias.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    return RedVeterinarias;
}());
exports.RedVeterinarias = RedVeterinarias;
