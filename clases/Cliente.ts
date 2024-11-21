import { generarId } from "../funciones/generadorId";
import { Paciente } from "./Paciente";
import { Veterinaria } from "./Veterinaria";

export class Cliente {
    private nombre: string;
    private readonly id: number;
    private vip: boolean = false;
    private telefono: number;
    private visitasTotal: number = 0;
    private veterinaria: Veterinaria;
    private pacientes: Paciente[] = [];

    constructor (nombre: string, telefono: number, veterinaria: Veterinaria) {
        this.nombre = nombre;
        this.id = generarId();
        this.telefono = telefono;
        this.veterinaria = veterinaria;
    }

    //Metodos
    public hacerVisita(paciente: Paciente) {
        this.visitasTotal += 1;
        console.log(this.getNombre() + " realizo una visita con " + paciente.getNombre());

        if (this.visitasTotal === 5) {
            this.vip = true;
            console.log("El cliente " + this.nombre + " Ahora es un ciente VIP");
        }
    }

    public agregarPaciente(nombre: string, especie: string, edad: number): void {
        const nuevoPaciente = new Paciente(nombre, especie, edad, this.getId());
        this.pacientes.push(nuevoPaciente);
        this.veterinaria.agregarPaciente(nuevoPaciente);
    }

    mostrarPacientes(): void {
        this.pacientes.forEach(paciente => {
            console.log (`Nombre: ${paciente.getNombre()}, edad: ${paciente.getEdad()}, especie: ${paciente.getEspecie()}, ID del dueño: ${paciente.getidDueño()}`);
        });
    }

    eliminarPaciente(nombre: string): void {
        const index = this.pacientes.findIndex((paciente) => paciente.getNombre() === nombre);

        const pacienteAEliminar = this.pacientes[index]

        if (index > -1) {
            this.pacientes.splice(index, 1);
            this.veterinaria.eliminarPaciente(pacienteAEliminar)
            console.log("Paciente eliminado");
        } else {
            console.log("El nombre ingresado no pertenece a ningún paciente");
        }
    }

    // Getters
    getNombre(): string {
        return this.nombre;
    }
    getId(): number {
        return this.id;
    }
    getVip(): boolean {
        return this.vip;
    }
    getTelefono(): number {
        return this.telefono;
    }
    getVisitasTotal(): number {
        return this.visitasTotal;
    }

    getPacientes(): Paciente[] {
        return this.pacientes
    }

    //Setters
    public setNombre(NuevoNombre: string): void {
        this.nombre = NuevoNombre;
    }
    public setTelefono(NuevoTelefono: number): void {
        this.telefono = NuevoTelefono;
    }
}