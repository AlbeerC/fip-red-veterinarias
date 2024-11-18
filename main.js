"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RedVeterinarias_1 = require("./clases/RedVeterinarias");
var Veterinaria_1 = require("./clases/Veterinaria");
var Cliente_1 = require("./clases/Cliente");
var Proovedor_1 = require("./clases/Proovedor");
var Paciente_1 = require("./clases/Paciente");
var red = new RedVeterinarias_1.RedVeterinarias("a");
// Crea veterinaria
var pelo = new Veterinaria_1.Veterinaria("Pelo", "Olavarría");
red.agregarVeterinaria(pelo);
// Crea clientes
var cliente1 = new Cliente_1.Cliente("Roberto", 123, pelo);
var cliente2 = new Cliente_1.Cliente("Roberta", 123, pelo);
pelo.agregarCliente(cliente1.getNombre(), cliente1.getTelefono());
pelo.agregarCliente(cliente2.getNombre(), cliente2.getTelefono());
// Crea proovedor
var proovedor1 = new Proovedor_1.Proovedor("Tomás", 123456);
pelo.agregarProovedor(proovedor1.getNombre(), proovedor1.getId());
// Cliente crea pacientes
var paciente1 = new Paciente_1.Paciente("wachin", "gato", 3, cliente2.getId());
cliente1.agregarPaciente("Pulga", "Perro", 3);
cliente1.agregarPaciente("Pulga", "asd", 3);
cliente2.agregarPaciente(paciente1.getNombre(), paciente1.getEspecie(), paciente1.getEdad());
// Logs
pelo.mostrarClientes();
pelo.mostrarPacientes();
pelo.mostrarProovedores();
cliente1.mostrarPacientes();
// Vip
cliente2.hacerseVip();
cliente2.hacerVisita(paciente1);
cliente2.hacerVisita(paciente1);
cliente2.hacerVisita(paciente1);
cliente2.hacerVisita(paciente1);
cliente2.hacerVisita(paciente1);
cliente2.hacerseVip();
// Eliminar un cliente
console.log(cliente1.getId());
pelo.eliminarCliente(cliente1.getId());
pelo.mostrarClientes();
cliente1.mostrarPacientes();
