"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var generadorId_1 = require("../funciones/generadorId");
var Cliente_1 = require("./Cliente");
var Proovedor_1 = require("./Proovedor");
var Veterinaria = /** @class */ (function () {
    function Veterinaria(nombre, ubicacion) {
        this.proovedores = [];
        this.pacientes = [];
        this.clientes = [];
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.id = (0, generadorId_1.generarId)();
    }
    // Métodos proovedor
    Veterinaria.prototype.agregarProovedor = function (nombre, telefono) {
        var nuevoProovedor = new Proovedor_1.Proovedor(nombre, telefono);
        // Verifica que no exista ya un proovedor con el mismo ID
        while (this.proovedores.some(function (proovedor) { return proovedor.getId() === nuevoProovedor.getId(); })) {
            nuevoProovedor = new Proovedor_1.Proovedor(nombre, telefono);
        }
        this.proovedores.push(nuevoProovedor);
        console.log("Agregado nuevo proovedor ".concat(nombre, " con id ").concat(nuevoProovedor.getId()));
    };
    Veterinaria.prototype.eliminarProovedor = function (id) {
        var index = this.proovedores.findIndex(function (proovedor) { return proovedor.getId() === id; });
        if (index > -1) {
            this.proovedores.splice(index, 1);
        }
        else {
            console.log("El ID ingresado no pertenece a ningún proovedor");
        }
    };
    Veterinaria.prototype.mostrarProovedores = function () {
        this.proovedores.forEach(function (proovedor) {
            console.log("Nombre: ".concat(proovedor.getNombre(), ", telefono: ").concat(proovedor.getTelefono(), ", id: ").concat(proovedor.getId()));
        });
    };
    // Métodos cliente
    Veterinaria.prototype.agregarCliente = function (nombre, telefono) {
        var nuevoCliente = new Cliente_1.Cliente(nombre, telefono, this);
        // Verifica que no exista ya un cliente con el mismo ID
        while (this.clientes.some(function (cliente) { return cliente.getId() === nuevoCliente.getId(); })) {
            nuevoCliente = new Cliente_1.Cliente(nombre, telefono, this);
        }
        this.clientes.push(nuevoCliente);
        console.log("Agregado nuevo cliente ".concat(nombre, " con id ").concat(nuevoCliente.getId()));
    };
    Veterinaria.prototype.eliminarCliente = function (id) {
        var index = this.clientes.findIndex(function (cliente) { return cliente.getId() === id; });
        if (index > -1) {
            this.clientes.splice(index, 1);
        }
        else {
            console.log("El ID ingresado no pertenece a ningún cliente");
        }
    };
    Veterinaria.prototype.mostrarClientes = function () {
        this.clientes.forEach(function (cliente) {
            console.log("Nombre: ".concat(cliente.getNombre(), ", telefono: ").concat(cliente.getTelefono(), ", id: ").concat(cliente.getId()));
        });
    };
    // Métodos paciente
    Veterinaria.prototype.agregarPaciente = function (paciente) {
        this.pacientes.push(paciente);
        console.log("Agregado nuevo paciente ".concat(paciente.getNombre(), " con id ").concat(paciente.getidDueño()));
    };
    Veterinaria.prototype.eliminarPaciente = function (id) {
        var index = this.pacientes.findIndex(function (paciente) { return paciente.getidDueño() === id; });
        if (index > -1) {
            this.pacientes.splice(index, 1);
        }
        else {
            console.log("El ID ingresado no pertenece a ningún paciente");
        }
    };
    Veterinaria.prototype.mostrarPacientes = function () {
        this.pacientes.forEach(function (paciente) {
            console.log("Nombre: ".concat(paciente.getNombre(), ", edad: ").concat(paciente.getEdad(), ", especie: ").concat(paciente.getEspecie(), ", ID del due\u00F1o: ").concat(paciente.getidDueño()));
        });
    };
    // Getters
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    Veterinaria.prototype.getUbicacion = function () {
        return this.ubicacion;
    };
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getProovedores = function () {
        return this.proovedores;
    };
    Veterinaria.prototype.getClientes = function () {
        return this.clientes;
    };
    Veterinaria.prototype.getPacientes = function () {
        return this.pacientes;
    };
    // Setters
    Veterinaria.prototype.setNombre = function (nombre) {
        this.nombre = nombre;
    };
    Veterinaria.prototype.setUbicacion = function (ubicacion) {
        this.ubicacion = ubicacion;
    };
    return Veterinaria;
}());
exports.Veterinaria = Veterinaria;
