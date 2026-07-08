const VENTAS_BASE = 5;
function calcularComision(numeroVenta, precioProducto) {
    let comision = 0;
    if (numeroVenta > VENTAS_BASE) {
        let ventasExtras = numeroVenta - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }

    return comision
}

function validarNumero(input) {

    let mensaje = document.getElementById("error_" + input.id);
    let valor = input.value.trim();

    mensaje.innerHTML = "";

    // Vacío
    if (valor === "") {
        mensaje.innerHTML = "Este campo es obligatorio.";
        return false;
    }

    // Solo números
    if (!/^[0-9]+$/.test(valor)) {
        mensaje.innerHTML = "Solo se permiten números.";
        return false;
    }

    // Máximo 5 dígitos
    if (valor.length > 5) {
        mensaje.innerHTML = "Máximo 5 dígitos.";
        return false;
    }

    return true;
}

function calcular() {

    let nuemroVentasStr = recuperaTexto("txtVentas")

    if (nuemroVentasStr.length > 5) {
        alert("Maximo 5 caracteres")
        return;
    }

    let sueldoBaseEntero = recuperarFloat("txtSueldoBase");
    let presioEntero = recuperarFloat("txtPrecio")
    let ventasEntero = recuperarFloat("txtVentas")


    let comision = calcularComision(ventasEntero, presioEntero);

    let total = sueldoBaseEntero + comision;

    let cpmResultadoSalarioBase = document.getElementById("spSueldoBase")
    cpmResultadoSalarioBase.textContent = sueldoBaseEntero

    let cpmResultadoComison = document.getElementById("spComision")
    cpmResultadoComison.textContent = comision

    let cpmResulTotal = document.getElementById("spTotal")
    cpmResulTotal.textContent = total
}
