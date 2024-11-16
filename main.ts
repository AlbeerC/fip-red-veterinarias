import { RedVeterinarias } from "./clases/RedVeterinarias";
import { Veterinaria } from "./clases/Veterinaria";
import { Cliente } from "./clases/Cliente";

const red = new RedVeterinarias("a")
const vete = new Veterinaria("Lux", "Loma negra")

red.agregarVeterinaria(vete)
console.log(red.getVeterinarias())
red.eliminarVeterinaria("Lux")
console.log(red.getVeterinarias())