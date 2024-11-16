import { generarId } from "../funciones/generadorId";
import { Paciente } from "./paciente"; //Arreglar luego de que juan haya creado la clase paciente.

export class Cliente {
    private nombre: string;
    private id: number;
    private vip: boolean = false;
    private telefono: number;
    private visitasTotal: number;
    private pacientes: Paciente[];

    constructor (nombre: string, telefono: number) {
        this.nombre = nombre;
        this.id = generarId();
        this.telefono = telefono;
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
        return this.pacientes;
    }

    //Setters
    public setNombre(NuevoNombre: string): void {
        this.nombre = NuevoNombre;
    }
    public setTelefono(NuevoTelefono: number): void {
        this.telefono = NuevoTelefono;
    }

    //Metodos
    public hacerVisita(paciente: Paciente[]) {
        this.visitasTotal =+ 1;
        console.log(this.getNombre + "realizo una visita con " + paciente);
    }

    public hacerseVip() : void {
        if (this.visitasTotal == 5) {
            this.vip = true;
            console.log("El cliente " + this.getNombre + "Ahora es un ciente VIP");
        }
    }
}