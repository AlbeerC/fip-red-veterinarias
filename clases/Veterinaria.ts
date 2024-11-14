import { generarId } from '../funciones/generadorId';
import { Proovedor } from './Proovedor';

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
        } else {
            console.log("El ID ingresado no pertenece a ningún proovedor");
        }
    }

    realizarPedido(): void {
        
    }


    // Métodos cliente
    agregarCliente(): void {

    }

    eliminarCliente(): void {

    }


    // Métodos paciente
    agregarPaciente(): void {

    }

    eliminarPaciente(): void {

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
