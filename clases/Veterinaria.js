"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veterinaria = void 0;
var generadorId_1 = require("../funciones/generadorId");
var Veterinaria = /** @class */ (function () {
    /*     private proovedores: Proovedor[] = [];
        private pacientes: Paciente[] = [];
        private clientes: Cliente[] = []; */
    function Veterinaria(nombre, ubicacion) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.id = (0, generadorId_1.generarId)();
    }
    Veterinaria.prototype.getId = function () {
        return this.id;
    };
    Veterinaria.prototype.getNombre = function () {
        return this.nombre;
    };
    /*     agregarProovedor(proovedor: Proovedor): void {
            this.proovedores.push(proovedor);
        }
    
        agregarCliente(cliente: Cliente): void {
            this.clientes.push(cliente);
        }
    
        agregarPaciente(paciente: Paciente): void {
            this.pacientes.push(paciente);
        }
    
        eliminarProovedor(): void
    
        eliminarCliente(): void
    
        eliminarPaciente(): void
    
        realizarPedido(): void;
    
        // Getters
        getNombre(): string {
            return this.nombre;
        }
        
        getUbicacion(): string {
            return this.ubicacion;
        }
    
    
    
        getProovedores(): Proovedor[] {
            return this.proovedores;
        }
    
        getClientes(): Cliente[] {
            return this.clientes;
        }
    
        getPacientes(): Paciente[] {
            return this.pacientes;
        }
     */
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
