import { generarId } from '../funciones/generadorId';
import { Cliente } from './Cliente';
import { Proovedor } from './Proovedor';
import { Paciente } from './Paciente';

export class Veterinaria {
    private nombre: string;
    private ubicacion: string;
    private id: number;
    private proovedores: Proovedor[] = [];
    private pacientes: Paciente[] = [];
    private clientes: Cliente[] = [];
    
    constructor(nombre: string, ubicacion: string) {
        this.nombre = nombre;
        this.ubicacion = ubicacion;
        this.id = generarId();
    }

    // Métodos proovedor
    agregarProovedor(nombre: string, telefono: number): void {
        let nuevoProovedor = new Proovedor(nombre, telefono);

        // Verifica que no exista ya un proovedor con el mismo ID
        while (this.proovedores.some((proovedor) => proovedor.getId() === nuevoProovedor.getId())) {
            nuevoProovedor = new Proovedor(nombre, telefono);
        }

        this.proovedores.push(nuevoProovedor);
        console.log(`Agregado nuevo proovedor ${nombre} con id ${nuevoProovedor.getId()}`);
    }

    eliminarProovedor(id: number): void {
        const index = this.proovedores.findIndex((proovedor) => proovedor.getId() === id);

        if (index > -1) {
            this.proovedores.splice(index, 1);
            console.log("Proovedor eliminado")
        } else {
            console.log("El ID ingresado no pertenece a ningún proovedor");
        }
    }

    mostrarProovedores(): void {
        if (this.proovedores.length === 0) {
            console.log("No hay proovedores registrados");
            return;
        }
        this.proovedores.forEach((proovedor, index) => {
            console.log (`${index + 1} - Nombre: ${proovedor.getNombre()}, telefono: ${proovedor.getTelefono()}, id: ${proovedor.getId()}`);
        });
    }
    

    // Métodos cliente
    agregarCliente(nombre: string, telefono: number): void {
        let nuevoCliente = new Cliente(nombre, telefono, this);
        
        // Verifica que no exista ya un cliente con el mismo ID
        while (this.clientes.some((cliente) => cliente.getId() === nuevoCliente.getId())) {
            nuevoCliente = new Cliente(nombre, telefono, this);
        }

        this.clientes.push(nuevoCliente);
        console.log(`Agregado nuevo cliente ${nombre} con id ${nuevoCliente.getId()}`);
    }

    eliminarCliente(id: number): void {
        const index = this.clientes.findIndex((cliente) => cliente.getId() === id);

        if (index > -1) {
            this.clientes.splice(index, 1);
            console.log("Cliente eliminado");
            
            // Eliminar los pacientes relacionados con este cliente
            this.pacientes = this.pacientes.filter((paciente) => paciente.getidDueño() !== id);
            console.log(`Pacientes del cliente con id ${id} eliminados`);
        } else {
            console.log("El ID ingresado no pertenece a ningún cliente");
        }
    }

    mostrarClientes(): void {
        if (this.clientes.length === 0) {
            console.log("No hay clientes registrados");
            return;
        }

        this.clientes.forEach((cliente, index) => {
            console.log (`${index + 1} - Nombre: ${cliente.getNombre()}, telefono: ${cliente.getTelefono()}, id: ${cliente.getId()}`);
        });
    }


    // Métodos paciente
    public agregarPaciente(paciente: Paciente): void {
        this.pacientes.push(paciente);
        console.log(`Agregado nuevo paciente ${paciente.getNombre()} con id ${paciente.getidDueño()}`);
    }

    eliminarPaciente(nombre: string): void {
        const index = this.pacientes.findIndex((paciente) => paciente.getNombre() === nombre);

        if (index > -1) {
            this.pacientes.splice(index, 1);
            console.log("Paciente eliminado");
        } else {
            console.log("El nombre ingresado no pertenece a ningún paciente");
        }
    }

    mostrarPacientes(): void {
        if (this.pacientes.length === 0) {
            console.log("No hay pacientes registrados");
            return;
        }

        this.pacientes.forEach((paciente, index) => {
            console.log (`${index + 1} - Nombre: ${paciente.getNombre()}, edad: ${paciente.getEdad()}, especie: ${paciente.getEspecie()}, ID del dueño: ${paciente.getidDueño()}`);
        });
    }


    // Getters
    getNombre(): string {
        return this.nombre;
    }
    
    getUbicacion(): string {
        return this.ubicacion;
    }

    getId(): number {
        return this.id;
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

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setUbicacion(ubicacion: string): void {
        this.ubicacion = ubicacion;
    }
}