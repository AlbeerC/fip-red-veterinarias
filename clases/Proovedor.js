"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Proovedor = void 0;
var Producto_1 = require("./Producto");
var generadorId_1 = require("../funciones/generadorId");
var Proovedor = /** @class */ (function () {
    function Proovedor(nombre, telefono) {
        this.nombre = nombre;
        this.id = (0, generadorId_1.generarId)();
        this.telefono = telefono;
        this.inventario = this.crearInventario();
    }
    Proovedor.prototype.crearInventario = function () {
        return [
            new Producto_1.Producto("Alimento para perro 3Kg", 20, 6000),
            new Producto_1.Producto("Alimento para perro 15Kg", 20, 25000),
            new Producto_1.Producto("Alimento para gatos 3kg", 18, 9000),
            new Producto_1.Producto("Alimento para gatos 7kg", 18, 18000),
            new Producto_1.Producto("Correa para perro", 30, 3000),
            new Producto_1.Producto("Correa para gato", 22, 2500)
        ];
    };
    // Getters
    Proovedor.prototype.getNombre = function () {
        return this.nombre;
    };
    Proovedor.prototype.getId = function () {
        return this.id;
    };
    Proovedor.prototype.getTelefono = function () {
        return this.telefono;
    };
    Proovedor.prototype.getInventario = function () {
        return this.inventario;
    };
    // Setters
    Proovedor.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Proovedor.prototype.setTelefono = function (telefono) {
        this.telefono = telefono;
    };
    return Proovedor;
}());
exports.Proovedor = Proovedor;
