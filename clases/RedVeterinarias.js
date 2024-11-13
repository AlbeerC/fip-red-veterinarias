"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedVeterinarias = void 0;
var RedVeterinarias = /** @class */ (function () {
    function RedVeterinarias(nombre) {
        this.veterinarias = [];
        this.nombre = nombre;
    }
    RedVeterinarias.prototype.agregarVeterinaria = function (veterinaria) {
        this.veterinarias.push(veterinaria);
    };
    RedVeterinarias.prototype.eliminarVeterinaria = function (nombre) {
        var index = this.veterinarias.findIndex(function (vete) { return vete.getNombre().toLowerCase() === nombre.toLowerCase(); });
        // Si el índice es mayor a -1, la veterinaria a eliminar existe
        if (index > -1) {
            this.veterinarias.splice(index, 1);
        }
        else {
            console.log("El nombre ingresado no pertenece a ninguna veterinaria");
        }
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
