import { generarId } from '../funciones/generadorId'

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

    agregarProovedor(proovedor: Proovedor): void {
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
