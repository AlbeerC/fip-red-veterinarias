import { Producto } from "./Producto";
import { generarId } from "../funciones/generadorId";

export class Proovedor {
    private nombre: string;
    private id: number;
    private telefono: number;
    private inventario: Producto[];

    constructor (nombre: string, telefono: number) {
        this.nombre = nombre;
        this.id = generarId();
        this.telefono = telefono;
        this.inventario = this.crearInventario();
    }

    private crearInventario(): Producto[] {
        return [
            new Producto("Alimento para perro 3Kg", 20, 6000),
            new Producto("Alimento para perro 15Kg", 20, 25000),
            new Producto("Alimento para gatos 3kg", 18, 9000),
            new Producto("Alimento para gatos 7kg", 18, 18000),
            new Producto("Correa para perro", 30, 3000),
            new Producto("Correa para gato", 22, 2500)
        ]
    }


    // Getters
    getNombre(): string {
        return this.nombre;
    }

    getId(): number {
        return this.id;
    }

    getTelefono(): number {
        return this.telefono;
    }

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    setTelefono(telefono: number): void {
        this.telefono = telefono;
    }
}