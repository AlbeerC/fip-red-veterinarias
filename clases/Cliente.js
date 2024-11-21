"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cliente = void 0;
var generadorId_1 = require("../funciones/generadorId");
var Paciente_1 = require("./Paciente");
var Cliente = /** @class */ (function () {
    function Cliente(nombre, telefono, veterinaria) {
        this.vip = false;
        this.visitasTotal = 0;
        this.pacientes = [];
        this.nombre = nombre;
        this.id = (0, generadorId_1.generarId)();
        this.telefono = telefono;
        this.veterinaria = veterinaria;
    }
    //Metodos
    Cliente.prototype.hacerVisita = function (paciente) {
        this.visitasTotal += 1;
        console.log(this.getNombre() + " realizo una visita con " + paciente.getNombre());
        if (this.visitasTotal === 5) {
            this.vip = true;
            console.log("El cliente " + this.nombre + " Ahora es un ciente VIP");
        }
    };
    Cliente.prototype.agregarPaciente = function (nombre, especie, edad) {
        var nuevoPaciente = new Paciente_1.Paciente(nombre, especie, edad, this.getId());
        this.pacientes.push(nuevoPaciente);
        this.veterinaria.agregarPaciente(nuevoPaciente);
    };
    Cliente.prototype.mostrarPacientes = function () {
        this.pacientes.forEach(function (paciente) {
            console.log("Nombre: ".concat(paciente.getNombre(), ", edad: ").concat(paciente.getEdad(), ", especie: ").concat(paciente.getEspecie(), ", ID del due\u00F1o: ").concat(paciente.getidDueño()));
        });
    };
    Cliente.prototype.eliminarPaciente = function (nombre) {
        var index = this.pacientes.findIndex(function (paciente) { return paciente.getNombre() === nombre; });
        var pacienteAEliminar = this.pacientes[index];
        if (index > -1) {
            this.pacientes.splice(index, 1);
            this.veterinaria.eliminarPaciente(pacienteAEliminar);
            console.log("Paciente eliminado");
        }
        else {
            console.log("El nombre ingresado no pertenece a ningún paciente");
        }
    };
    // Getters
    Cliente.prototype.getNombre = function () {
        return this.nombre;
    };
    Cliente.prototype.getId = function () {
        return this.id;
    };
    Cliente.prototype.getVip = function () {
        return this.vip;
    };
    Cliente.prototype.getTelefono = function () {
        return this.telefono;
    };
    Cliente.prototype.getVisitasTotal = function () {
        return this.visitasTotal;
    };
    Cliente.prototype.getPacientes = function () {
        return this.pacientes;
    };
    //Setters
    Cliente.prototype.setNombre = function (NuevoNombre) {
        this.nombre = NuevoNombre;
    };
    Cliente.prototype.setTelefono = function (NuevoTelefono) {
        this.telefono = NuevoTelefono;
    };
    return Cliente;
}());
exports.Cliente = Cliente;
