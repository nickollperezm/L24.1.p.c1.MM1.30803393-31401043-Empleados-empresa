export default class Cl_empresa {
    constructor() {
        this.contEmpleados = 0;
        this.contHombres = 0;
        this.contMujeres = 0;
    }

    procesarEmpleado(empleado) {
        this.contEmpleados++;
        if (empleado.sexo == "M") {
            this.contHombres++;
        } else if (empleado.sexo == "F") {
            this.contMujeres++;
        }
    }

    cantidadHombres() {
        return this.contHombres;
    }

    porcentajeMujeres() {
        return (this.contMujeres / this.contEmpleados * 100);
    }
}