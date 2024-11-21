import { RedVeterinarias } from "./clases/RedVeterinarias";
import { Veterinaria } from "./clases/Veterinaria";
import { Cliente } from "./clases/Cliente";
import { Proovedor } from "./clases/Proovedor";
import { Paciente } from "./clases/Paciente";

const red = new RedVeterinarias("a")

// Crea veterinaria
const pelo = new Veterinaria("Pelo", "Olavarría")
red.agregarVeterinaria(pelo)

// Crea clientes
const cliente1 = new Cliente("Roberto", 123, pelo)
const cliente2 = new Cliente("Roberta", 123, pelo)
pelo.agregarCliente(cliente1.getNombre(), cliente1.getTelefono())
pelo.agregarCliente(cliente2.getNombre(), cliente2.getTelefono())

// Crea proovedor
const proovedor1 = new Proovedor("Tomás", 123456)
pelo.agregarProovedor(proovedor1.getNombre(), proovedor1.getId())

// Cliente crea pacientes
const paciente1 = new Paciente("wachin", "gato", 3, cliente2.getId())
cliente1.agregarPaciente("Pulga", "Perro", 3)
cliente1.agregarPaciente("Pulga", "asd", 3)
cliente2.agregarPaciente(paciente1.getNombre(), paciente1.getEspecie(), paciente1.getEdad())

// Logs
/* pelo.mostrarClientes()
pelo.mostrarPacientes()
pelo.mostrarProovedores()
cliente1.mostrarPacientes() */

// Vip
/* cliente2.hacerseVip()
cliente2.hacerVisita(paciente1)
cliente2.hacerVisita(paciente1)
cliente2.hacerVisita(paciente1)
cliente2.hacerVisita(paciente1)
cliente2.hacerVisita(paciente1)
cliente2.hacerseVip() */

// Eliminar un cliente
console.log(cliente1.getId())
pelo.eliminarCliente(cliente1.getId())
pelo.mostrarClientes()
cliente1.mostrarPacientes()
pelo.mostrarPacientes()