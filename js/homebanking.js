//Declaración de variables
var saldoCuenta = 10000
var limiteExtraccion = 2500
var Agua = 350
var Telefono = 425
var Luz = 210
var Internet = 570
saldoAnterior = saldoCuenta;
var cuentaAmiga1 = "1234567"
var cuentaAmiga2 = "7654321"
var codigoCuenta = "2009"
var nombreUsuario = "Elbrus Baskaev"
//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}


//Funciones que tenes que completar
function cambiarLimiteDeExtraccion() {
    var cambiarLimiteDeExtraccion = prompt("Ingrese el nuevo limite de extracción.")
    var extraccion = parseInt(cambiarLimiteDeExtraccion);
    if (isNaN(extraccion)) {
        alert("El valor ingresado es incorrecto.")
    } else {
        limiteExtraccion = extraccion;
        actualizarLimiteEnPantalla();
        alert("Su nuevo limite de extracción es: " + extraccion);
    }
}



function extraerDinero() {
    var extraerDinero = prompt("Ingrese el monto que desea extraer.");
    var dinero = parseInt(extraerDinero);
    if (isNaN(dinero)) {
        alert("El valor ingresado es incorrecto.");
    } else if (dinero <= saldoCuenta) {
        if (dinero > limiteExtraccion) {
            alert("Has excedido tu limite de extracción.");
        } else if (!(dinero % 100 === 0)) {
            alert("Solo se pueden extraer billetes de 100.")
        } else {
            var saldoAnterior = saldoCuenta;
            saldoCuenta -= dinero;
            actualizarSaldoEnPantalla();
            alert("Has retirado: " + dinero + "\nSaldo anterior: " + saldoAnterior + "\nNuevo saldo: " + saldoCuenta);
        }
    } else {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero!");
    }
}

function depositarDinero(number) {
    var depositarDinero = prompt("Ingrese el monto que desea depositar.")
    var dinero = parseInt(depositarDinero);
    if (isNaN(dinero)) {
        alert("El valor ingresado es incorrecto.")
    } else {
        saldoCuenta += dinero;
        actualizarSaldoEnPantalla();
        alert("Has depositado: " + dinero + "\nSaldo anterior: " + saldoAnterior + "\nNuevo saldo: " + saldoCuenta);
    }
}

function pagarServicio() {
    var servicio = prompt("Ingrese el número que corresponda con el servicio que desea pagar. \n1.Agua \n2.Telefono \n3.Luz \n4.Internet");
    servicio = parseInt(servicio);
    if (isNaN(servicio)) {
        alert("El valor ingresado es incorrecto.");
    } else if (saldoCuenta > servicio) {
        switch (servicio) {
            case 1:
                saldoCuenta -= Agua;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Agua." + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Agua + "\nNuevo saldo: " + saldoCuenta);
                break;

            case 2:
                saldoCuenta -= Telefono;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Telefono." + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Telefono + "\nNuevo saldo: " + saldoCuenta);
                break;

            case 3:
                saldoCuenta -= Luz;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Luz." + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Luz + "\nNuevo saldo: " + saldoCuenta);
                break;

            case 4:
                saldoCuenta -= Internet;
                actualizarSaldoEnPantalla();
                alert("Has pagado el servicio de Agua." + "\nSaldo anterior: " + saldoAnterior + "\nDinero descontado: " + Internet + "\nNuevo saldo: " + saldoCuenta);
                break;

            default:
                alert("Servicio no existe.")
                break;
        }
    } else {
        alert("No posee suficiente saldo en su cuenta para pagar este servicio.")
    }
}

function transferirDinero() {
    var transferirDinero = prompt("Ingrese el monto que desea transferir.")
    var transferencia = parseInt(transferirDinero);
    if (isNaN(transferencia)) {
        alert("El valor ingresado es inválido.")
    } else if (transferencia <= saldoCuenta) {
        var cuenta = prompt("Ingrese el numero de la cuenta al que desea transferir el dinero.");
        if (cuenta == cuentaAmiga1 || cuenta == cuentaAmiga2) {
            saldoCuenta -= transferencia;
            actualizarSaldoEnPantalla();
            alert("Se han transferido: " + transferencia + "\nCuenta destino: " + cuenta);
        } else {
            alert("Solo se puede transferir dinero a una cuenta amiga.");
        }
    } else {
        alert("No hay saldo disponible en su cuenta.");
    }
}

function iniciarSesion() {
    var iniciarSesion = prompt("Ingrese el código de cuenta. (Es 2009)")
    if (codigoCuenta == iniciarSesion) {
        alert("Bienvenido/a Elbrus Baskaev, ya puedes comenzar a realizar operaciones.");
        cargarNombreEnPantalla();
    }
    else {
        alert("Código incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.")
        saldoCuenta = 0;
        actualizarSaldoEnPantalla();
    }
}




//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}