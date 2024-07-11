/*
Una empresa conoce de sus empleados los siguientes datos: nombre, sexo ((M)asculino
(F)emenino). Se desea que realice un algoritmo que permite determinar e imprimir: Cantidad
de hombres que trabajan en la empresa y porcentaje de mujeres que trabajan en la empresa.

Se dispone de los siguientes datos de varios empleados: (nombre, sexo) (Mary, ‘F’),
(José, ‘M’), (Carlos, ‘M’), (Pedro, ‘M’)

Cantidad de hombres que trabajan en la empresa: 3
Porcentaje de mujeres que trabajan en la empresa: 25%
*/

import Cl_empresa from "./Cl_empresa.js";
import Cl_empleado from "./Cl_empleado.js";

let empresa = new Cl_empresa();
let empleado1 = new Cl_empleado("Mary", "F");
let empleado2 = new Cl_empleado("Jose", "M");
let empleado3 = new Cl_empleado("Carlos", "M");
let empleado4 = new Cl_empleado("Pedro", "M");
empresa.procesarEmpleado(empleado1);
empresa.procesarEmpleado(empleado2);
empresa.procesarEmpleado(empleado3);
empresa.procesarEmpleado(empleado4);

let salida = document.getElementById("salida");
salida.innerHTML = `
Cantidad de hombres que trabajan en la empresa: ${empresa.cantidadHombres()}
<br>Porcentaje de mujeres que trabajan en la empresa: ${empresa.porcentajeMujeres()}%
`;