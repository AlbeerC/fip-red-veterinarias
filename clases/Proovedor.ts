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
    }

    agregarProducto(nombre: string, cantidad: number, precio: number): void {
        const nuevoProducto = new Producto(nombre, cantidad, precio);
        this.inventario.push(nuevoProducto);
        console.log(`${this.nombre} agregó: ${nuevoProducto}`);
    }

    obtenerProductos(): Producto[] {
        return this.inventario;
    }

    eliminarProducto(nombre: string): void {
        const index = this.inventario.findIndex((prod) => prod.getNombre() === nombre);

        if (index > -1) {
            this.inventario.splice(index, 1);
        } else {
            console.log("El nombre ingresado no pertenece a ningún producto del inventario");
        }
    }
}