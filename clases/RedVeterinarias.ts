import { Veterinaria } from "./Veterinaria";

export class RedVeterinarias {
    private nombre: string;
    private veterinarias: Veterinaria[] = [];

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    agregarVeterinaria(nombre: string, ubicacion: string): void {
        const nuevaVeterinaria = new Veterinaria(nombre, ubicacion)
        this.veterinarias.push(nuevaVeterinaria)
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

    mostrarVeterinarias(): void {
        if (this.veterinarias.length === 0) {
            console.log("No hay veterinarias registradas")
            return
        }

        this.veterinarias.forEach((veterinaria, index) => {
            console.log (`${index + 1} - ${veterinaria.getNombre()} (${veterinaria.getUbicacion()})`);
        });
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