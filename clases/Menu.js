"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var RedVeterinarias_1 = require("./RedVeterinarias");
var Menu = /** @class */ (function () {
    function Menu() {
        this.redVeterinarias = new RedVeterinarias_1.RedVeterinarias("Spiderman");
        this.salir = false;
    }
    // Menú principal
    Menu.prototype.mostrarMenu = function () {
        var opcion;
        do {
            console.log("======================================");
            console.log(" 🕸️ Red de veterinarias Spiderman 🕸️ ");
            console.log("======================================");
            console.log("1- 📋 Ver lista de veterinarias");
            console.log("2- ➕ Registrar una veterinaria");
            console.log("3- ❌ Eliminar una veterinaria");
            console.log("0- 🚪 Salir");
            opcion = rls.questionInt("Seleccione una opcion: ");
            switch (opcion) {
                case 1:
                    this.verVeterinarias();
                    break;
                case 2:
                    this.registrarVeterinaria();
                    break;
                case 3:
                    this.eliminarVeterinaria();
                    break;
                case 0:
                    console.log("Saliendo...");
                    this.salir = true;
                    break;
                default:
                    console.log("Opcion no valida. Intente nuevamente.");
            }
        } while (!this.salir);
    };
    // Mostrar lista de veterinarias y gestionar una en detalle
    Menu.prototype.verVeterinarias = function () {
        var opcionVeterinaria;
        do {
            console.log("\n---- Veterinarias Registradas ----");
            this.redVeterinarias.mostrarVeterinarias();
            console.log("0- 🔙 Volver");
            opcionVeterinaria = rls.questionInt("Seleccione una opcion para gestionar una veterinaria o 0 para volver: ");
            if (opcionVeterinaria === 0)
                return;
            if (opcionVeterinaria > 0 && opcionVeterinaria <= this.redVeterinarias.getVeterinarias().length) {
                var veterinaria = this.redVeterinarias.getVeterinarias()[opcionVeterinaria - 1];
                this.gestionarVeterinaria(veterinaria);
            }
        } while (true);
    };
    // Registrar nueva veterinaria
    Menu.prototype.registrarVeterinaria = function () {
        var nombre = rls.question("Ingrese el nombre de la veterinaria: ");
        var ubicacion = rls.question("Ingrese la ubicacion de la veterinaria: ");
        this.redVeterinarias.agregarVeterinaria(nombre, ubicacion);
        console.log("Veterinaria ".concat(nombre, " registrada exitosamente."));
    };
    // Eliminar una veterinaria
    Menu.prototype.eliminarVeterinaria = function () {
        var nombre = rls.question("Ingrese el nombre de la veterinaria a eliminar: ");
        this.redVeterinarias.eliminarVeterinaria(nombre);
    };
    // Gestión de veterinaria
    Menu.prototype.gestionarVeterinaria = function (veterinaria) {
        var opcionGestion;
        do {
            console.log("---- Veterinaria ".concat(veterinaria.getNombre(), " ----"));
            console.log("\n---- Veterinaria ".concat(veterinaria.getNombre(), " ----"));
            console.log("1- 🧔 Gestionar clientes");
            console.log("2- 🐶 Gestionar pacientes");
            console.log("3- 📦 Gestionar proveedores");
            console.log("0- 🔙 Volver");
            opcionGestion = rls.questionInt("Seleccione una opcion: ");
            switch (opcionGestion) {
                case 1:
                    this.gestionarClientes(veterinaria);
                    break;
                case 2:
                    this.gestionarPacientes(veterinaria);
                    break;
                case 3:
                    this.gestionarProovedores(veterinaria);
                    break;
                case 0:
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("opcion no válida. Intente nuevamente.");
            }
        } while (true);
    };
    // Gestión de clientes
    Menu.prototype.gestionarClientes = function (veterinaria) {
        var opcion;
        do {
            console.log("\n---- Gestionar Clientes ----");
            console.log("1- ➕ Añadir cliente");
            console.log("2- ❌ Eliminar cliente");
            console.log("3- 📋 Mostrar clientes");
            console.log("4- 🐱 Registrar visita con su mascota");
            console.log("0- 🔙 Volver");
            opcion = rls.questionInt("Seleccione una opcion: ");
            switch (opcion) {
                case 1:
                    this.anadirCliente(veterinaria);
                    break;
                case 2:
                    this.eliminarCliente(veterinaria);
                    break;
                case 3:
                    veterinaria.mostrarClientes();
                    break;
                case 4:
                    this.registrarVisita(veterinaria);
                    break;
                case 0:
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    };
    // Añadir cliente
    Menu.prototype.anadirCliente = function (veterinaria) {
        var nombre = rls.question("Ingrese el nombre del cliente: ");
        var telefono = rls.questionInt("Ingrese el telefono del cliente: ");
        veterinaria.agregarCliente(nombre, telefono);
    };
    // Eliminar cliente
    Menu.prototype.eliminarCliente = function (veterinaria) {
        var id = rls.questionInt("Ingrese el ID del cliente a eliminar: ");
        veterinaria.eliminarCliente(id);
    };
    // Hacer una visita
    Menu.prototype.registrarVisita = function (veterinaria) {
        console.log("\n---- Registrar Visita ----");
        // Mostrar clientes disponibles
        if (veterinaria.getClientes().length === 0) {
            console.log("No hay clientes registrados. Volviendo...");
            return;
        }
        veterinaria.mostrarClientes();
        var clienteId = rls.questionInt("Ingrese el ID del cliente: ");
        var cliente = veterinaria.getClientes().find(function (cliente) { return cliente.getId() === clienteId; });
        if (!cliente) {
            console.log("Cliente no encontrado.");
            return;
        }
        // Mostrar pacientes del cliente seleccionado
        if (cliente.getPacientes().length === 0) {
            console.log("No hay pacientes registrados a este cliente. Volviendo...");
            return;
        }
        cliente.mostrarPacientes();
        var pacienteNombre = rls.question("Ingrese el nombre del paciente: ");
        var paciente = cliente.getPacientes().find(function (paciente) { return paciente.getNombre() === pacienteNombre; });
        if (!paciente) {
            console.log("Paciente no encontrado.");
            return;
        }
        // Registrar visita
        cliente.hacerVisita(paciente);
    };
    // Gestión de pacientes
    Menu.prototype.gestionarPacientes = function (veterinaria) {
        var opcion;
        do {
            console.log("\n---- Gestionar Pacientes ----");
            console.log("1- ➕ Añadir paciente");
            console.log("2- ❌ Eliminar paciente");
            console.log("3- 📋 Mostrar pacientes");
            console.log("0- 🔙 Volver");
            opcion = rls.questionInt("Seleccione una opcion: ");
            switch (opcion) {
                case 1:
                    this.anadirPaciente(veterinaria);
                    break;
                case 2:
                    this.eliminarPaciente(veterinaria);
                    break;
                case 3:
                    veterinaria.mostrarPacientes();
                    break;
                case 0:
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    };
    // Añadir paciente
    Menu.prototype.anadirPaciente = function (veterinaria) {
        var nombre = rls.question("Ingrese el nombre del paciente: ");
        var especie = rls.question("Ingrese la especie del paciente: ");
        var edad = rls.questionInt("Ingrese la edad del paciente: ");
        var clienteId = rls.questionInt("Ingrese el ID del cliente duenio del paciente: ");
        var cliente = veterinaria.getClientes().find(function (cliente) { return cliente.getId() === clienteId; });
        if (cliente) {
            cliente.agregarPaciente(nombre, especie, edad);
        }
        else {
            console.log("Cliente no encontrado.");
        }
    };
    // Eliminar paciente
    Menu.prototype.eliminarPaciente = function (veterinaria) {
        // Mostrar los clientes disponibles
        veterinaria.mostrarClientes();
        // Pedir el ID del cliente
        var idCliente = rls.questionInt("Ingrese el ID del cliente dueño del paciente a eliminar: ");
        var cliente = veterinaria.getClientes().find(function (cliente) { return cliente.getId() === idCliente; });
        if (!cliente) {
            console.log("Cliente no encontrado.");
            return;
        }
        // Pedir el nombre del paciente a eliminar
        cliente.mostrarPacientes();
        var nombrePaciente = rls.question("Ingrese el nombre del paciente a eliminar: ");
        cliente.eliminarPaciente(nombrePaciente); // Usamos el método del cliente
    };
    // Gestión de proveedores
    Menu.prototype.gestionarProovedores = function (veterinaria) {
        var opcion;
        do {
            console.log("\n---- Gestionar Proveedores ----");
            console.log("1- ➕ Añadir proveedor");
            console.log("2- ❌ Eliminar proveedor");
            console.log("3- 📋 Mostrar proveedores");
            console.log("0- 🔙 Volver");
            opcion = rls.questionInt("Seleccione una opcion: ");
            switch (opcion) {
                case 1:
                    this.anadirProovedor(veterinaria);
                    break;
                case 2:
                    this.eliminarProovedor(veterinaria);
                    break;
                case 3:
                    veterinaria.mostrarProovedores();
                    break;
                case 0:
                    console.log("Volviendo... ");
                    return;
                default:
                    console.log("Opcion no valida. Intente nuevamente.");
            }
        } while (true);
    };
    // Añadir proveedor
    Menu.prototype.anadirProovedor = function (veterinaria) {
        var nombre = rls.question("Ingrese el nombre del proveedor: ");
        var telefono = rls.questionInt("Ingrese el telefono del proveedor: ");
        veterinaria.agregarProovedor(nombre, telefono);
    };
    // Eliminar proveedor
    Menu.prototype.eliminarProovedor = function (veterinaria) {
        var id = rls.questionInt("Ingrese el ID del proveedor a eliminar: ");
        veterinaria.eliminarProovedor(id);
    };
    return Menu;
}());
// Crear instancia del menú e iniciar la interacción
var menu = new Menu();
menu.mostrarMenu();
