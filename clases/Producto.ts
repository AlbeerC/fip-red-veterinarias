export class Producto {
    private nombre: string;
    private cantidad: number;
    private precio: number;

    constructor(nombre: string, cantidad: number, precio: number) {}

    
    // Getters
    getNombre(): string {
        return this.nombre;
    }

    getPrecio(): number {
        return this.precio;
    }
}