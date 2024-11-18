import { Cliente } from "./Cliente";

export class Paciente{
    private nombre: string;
    private especie:string;
    private IdDueño: number;
    private edad: number;

    constructor(nombre:string, especie:string, edad:number, IdDueño: number) {
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.IdDueño = getId(); // ver mas tarde
    }

    //getters
    getNombre(): string {
        return this.nombre;
    }

    getEspecie(): string {
        return this.especie;
    }

    getEdad(): number {
        return this.edad;
    }

    getIdDueño(): number {
        return this.IdDueño;
    }

    //setters
    setNombre(nombre:string): void {
        this.nombre = nombre;
    }
    setEspecie(especie:string): void {
        this.especie = especie;
    }
    setEdad(edad:number): void {
        this.edad = edad;
    }

    //metodos
    clasificarEspecie():string {
        if (this.especie== "perro"){
            return "El paciente es un perro";
        } else if(this.especie == "gato"){
            return "El paciente es un gato";
        }else {
            return "El paciente debe ser perro o gato." ;
            
        }
    }

    obtenerInformacion(): string {
        return `Nombre: ${this.nombre}, Especie: ${this.especie}, Edad: ${this.edad} años, ID del Dueño: ${this.IdDueño}`;
    }

    }

    

    



