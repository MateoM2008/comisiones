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

    //recupera el valor de la caja de texto en  entero
    let cmpSueldoBase = document.getElementById("txtSueldoBase")
    let sueldoBase = cmpSueldoBase.value;
    let sueldoBaseEntero = parseFloat(sueldoBase);

    let cmpPrecio = document.getElementById("txtPrecio")
    let precio = cmpPrecio.value;
    let presioEntero = parseFloat(precio);

    let cmpVentas = document.getElementById("txtVentas")
    let ventas = cmpVentas.value;
    let ventasEntero = parseFloat(ventas);

    let comision = calcularComision(ventasEntero, presioEntero);

    let total = sueldoBaseEntero + comision;

    let cpmResultadoSalarioBase = document.getElementById("spSueldoBase")
    cpmResultadoSalarioBase.textContent=sueldoBaseEntero

    let cpmResultadoComison = document.getElementById("spComision")
    cpmResultadoComison.textContent=comision

    let cpmResulTotal = document.getElementById("spTotal")
    cpmResulTotal.textContent=total
}