import * as rls from 'readline-sync';

import { RedVeterinarias } from './RedVeterinarias';
import { Veterinaria } from './Veterinaria';

class Menu {
    private redVeterinarias = new RedVeterinarias("Spiderman");
    private salir: boolean = false;

    // Menú principal
    mostrarMenu(): void {
        let opcion: number;

        do {
            console.log("---Red de veterinarias---");
            console.log("1- Ver lista de veterinarias");
            console.log("2- Registrar una veterinaria");
            console.log("3- Eliminar una veterinaria");
            console.log("0- Salir");

            opcion = rls.questionInt("Seleccione una opcion:");

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
                    this.salir = true
                    break;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (!this.salir);
    }

    // Mostrar lista de veterinarias y gestionar una en detalle
    verVeterinarias(): void {
        let opcionVeterinaria: number;

        do {
            console.log("\n---Veterinarias Registradas---");
            this.redVeterinarias.mostrarVeterinarias();
            console.log("0- Salir");

            opcionVeterinaria = rls.questionInt("Seleccione una opcion para gestionar una veterinaria:");

            if (opcionVeterinaria === 0) return
            if (opcionVeterinaria > 0 && opcionVeterinaria <= this.redVeterinarias.getVeterinarias().length) {
                const veterinaria = this.redVeterinarias.getVeterinarias()[opcionVeterinaria - 1];
                this.gestionarVeterinaria(veterinaria);
            }
        } while (true);
    }

    // Registrar nueva veterinaria
    registrarVeterinaria(): void {
        const nombre = rls.question("Ingrese el nombre de la veterinaria:");
        const ubicacion = rls.question("Ingrese la ubicación de la veterinaria:");
        this.redVeterinarias.agregarVeterinaria(nombre, ubicacion);
        console.log(`Veterinaria ${nombre} registrada exitosamente.`);
    }

    // Eliminar una veterinaria
    eliminarVeterinaria(): void {
        const nombre = rls.question("Ingrese el nombre de la veterinaria a eliminar:");
        this.redVeterinarias.eliminarVeterinaria(nombre);
    }

    // Gestión de veterinaria
    gestionarVeterinaria(veterinaria: Veterinaria): void {
        let opcionGestion: number;

        do {
            console.log(`----Veterinaria ${veterinaria.getNombre()}----`);
            console.log(`\n----Veterinaria ${veterinaria.getNombre()}----`);
            console.log("1- Gestionar clientes");
            console.log("2- Gestionar pacientes");
            console.log("3- Gestionar proveedores");
            console.log("0- Salir");

            opcionGestion = rls.questionInt("Seleccione una opcion:");

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
        } while (true)
    }

     // Gestión de clientes
     gestionarClientes(veterinaria: Veterinaria): void {
        let opcion: number;

        do {
            console.log("\n---Gestionar Clientes---");
            console.log("1- Añadir cliente");
            console.log("2- Eliminar cliente");
            console.log("3- Mostrar clientes");
            console.log("0- Volver");

            opcion = rls.questionInt("Seleccione una opcion:");

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
                case 0:
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    }

    // Añadir cliente
    anadirCliente(veterinaria: Veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del cliente:");
        const telefono = rls.questionInt("Ingrese el teléfono del cliente:");
        veterinaria.agregarCliente(nombre, telefono);
    }

    // Eliminar cliente
    eliminarCliente(veterinaria: Veterinaria): void {
        const id = rls.questionInt("Ingrese el ID del cliente a eliminar:") ;
        veterinaria.eliminarCliente(id);
    }

    // Gestión de pacientes
    gestionarPacientes(veterinaria: Veterinaria): void {
        let opcion: number;

        do {
            console.log("\n---Gestionar Pacientes---");
            console.log("1- Añadir paciente");
            console.log("2- Eliminar paciente");
            console.log("3- Mostrar pacientes");
            console.log("0- Volver");

            opcion = rls.questionInt("Seleccione una opcion:") ;

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
    }

    // Añadir paciente
    anadirPaciente(veterinaria: Veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del paciente:");
        const especie = rls.question("Ingrese la especie del paciente:");
        const edad = rls.questionInt("Ingrese la edad del paciente:");
        const clienteId = rls.questionInt("Ingrese el ID del cliente dueño del paciente:");
        const cliente = veterinaria.getClientes().find(cliente => cliente.getId() === clienteId);

        if (cliente) {
            cliente.agregarPaciente(nombre, especie, edad);
        } else {
            console.log("Cliente no encontrado.");
        }
    }

    // Eliminar paciente
    eliminarPaciente(veterinaria: Veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del paciente a eliminar:");
        veterinaria.eliminarPaciente(nombre);
    }

    // Gestión de proveedores
    gestionarProovedores(veterinaria: Veterinaria): void {
        let opcion: number;

        do {
            console.log("\n---Gestionar Proveedores---");
            console.log("1- Añadir proveedor");
            console.log("2- Eliminar proveedor");
            console.log("3- Mostrar proveedores");
            console.log("0- Volver");

            opcion = rls.questionInt("Seleccione una opcion:");

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
                    console.log("Volviendo...");
                    return;
                default:
                    console.log("Opcion no válida. Intente nuevamente.");
            }
        } while (true);
    }

    // Añadir proveedor
    anadirProovedor(veterinaria: Veterinaria): void {
        const nombre = rls.question("Ingrese el nombre del proveedor:");
        const telefono = rls.questionInt("Ingrese el teléfono del proveedor:");
        veterinaria.agregarProovedor(nombre, telefono);
    }

    // Eliminar proveedor
    eliminarProovedor(veterinaria: Veterinaria): void {
        const id = rls.questionInt("Ingrese el ID del proveedor a eliminar:");
        veterinaria.eliminarProovedor(id);
    }
}

// Crear instancia del menú e iniciar la interacción
const menu = new Menu();
menu.mostrarMenu();