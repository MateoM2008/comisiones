const VENTAS_BASE = 5;
function calcularComision(numeroVenta, precioProducto) {
    let comision = 0;
    if (numeroVenta > VENTAS_BASE) {
        let ventasExtras = numeroVenta - VENTAS_BASE;
        comision = ventasExtras * (precioProducto * 0.10);
    }

    return comision
}

function calcular() {
    let sueldoBaseEntero =recuperarFloat("txtSueldoBase");
    let presioEntero =recuperarFloat("txtPrecio")
    let ventasEntero =recuperarFloat("txtVentas")


    let comision = calcularComision(ventasEntero, presioEntero);

    let total = sueldoBaseEntero + comision;

    let cpmResultadoSalarioBase = document.getElementById("spSueldoBase")
    cpmResultadoSalarioBase.textContent=sueldoBaseEntero

    let cpmResultadoComison = document.getElementById("spComision")
    cpmResultadoComison.textContent=comision

    let cpmResulTotal = document.getElementById("spTotal")
    cpmResulTotal.textContent=total
}