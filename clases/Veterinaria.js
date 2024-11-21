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
            console.log("Proovedor eliminado");
        }
        else {
            console.log("El ID ingresado no pertenece a ningún proovedor");
        }
    };
    Veterinaria.prototype.mostrarProovedores = function () {
        if (this.proovedores.length === 0) {
            console.log("No hay proovedores registrados");
            return;
        }
        this.proovedores.forEach(function (proovedor, index) {
            console.log("".concat(index + 1, " - Nombre: ").concat(proovedor.getNombre(), ", telefono: ").concat(proovedor.getTelefono(), ", id: ").concat(proovedor.getId()));
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
            console.log("Cliente eliminado");
            // Eliminar los pacientes relacionados con este cliente
            this.pacientes = this.pacientes.filter(function (paciente) { return paciente.getidDueño() !== id; });
            console.log("Pacientes del cliente con id ".concat(id, " eliminados"));
        }
        else {
            console.log("El ID ingresado no pertenece a ningún cliente");
        }
    };
    Veterinaria.prototype.mostrarClientes = function () {
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados");
            return;
        }
        this.clientes.forEach(function (cliente, index) {
            console.log("".concat(index + 1, " - Nombre: ").concat(cliente.getNombre(), ", telefono: ").concat(cliente.getTelefono(), ", id: ").concat(cliente.getId()));
        });
    };
    // Métodos paciente
    Veterinaria.prototype.agregarPaciente = function (paciente) {
        this.pacientes.push(paciente);
        console.log("Agregado nuevo paciente ".concat(paciente.getNombre(), " con id ").concat(paciente.getidDueño()));
    };
    Veterinaria.prototype.eliminarPaciente = function (nombre) {
        var index = this.pacientes.findIndex(function (paciente) { return paciente.getNombre() === nombre; });
        if (index > -1) {
            this.pacientes.splice(index, 1);
            console.log("Paciente eliminado");
        }
        else {
            console.log("El nombre ingresado no pertenece a ningún paciente");
        }
    };
    Veterinaria.prototype.mostrarPacientes = function () {
        if (this.pacientes.length === 0) {
            console.log("No hay pacientes registrados");
            return;
        }
        this.pacientes.forEach(function (paciente, index) {
            console.log("".concat(index + 1, " - Nombre: ").concat(paciente.getNombre(), ", edad: ").concat(paciente.getEdad(), ", especie: ").concat(paciente.getEspecie(), ", ID del due\u00F1o: ").concat(paciente.getidDueño()));
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
