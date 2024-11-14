import { Veterinaria } from "./Veterinaria";

export class RedVeterinarias {
    private nombre: string;
    private veterinarias: Veterinaria[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarVeterinaria(veterinaria: Veterinaria): void {
        this.veterinarias.push(veterinaria);
    }

    eliminarVeterinaria(nombre: string): void {
        // Busca el índice de la veterinaria que conincida con el nombre ingresado
        const index = this.veterinarias.findIndex(vete => vete.getNombre().toLowerCase() === nombre.toLowerCase());

        // Si el índice es mayor a -1, la veterinaria a eliminar existe
        if (index > -1) {
            this.veterinarias.splice(index, 1);
        } else {
            console.log("El nombre ingresado no pertenece a ninguna veterinaria");
        }
    }

    // Getters
    getNombre(): string {
        return this.nombre;
    }

    getVeterinarias(): Veterinaria[] {
        return this.veterinarias;
    }

    // Setters
    setNombre(nombre: string): void {
        this.nombre = nombre;
    }
}