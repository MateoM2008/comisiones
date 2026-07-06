function recuperaTexto(idComponente) {
    let componente = document.getElementById(idComponente)
    let valor = componente.value;
    return valor;
}

function recuperarFloat(idComponente) { 
    let valorTexto=recuperaTexto(idComponente);
    let valorFloat=parseFloat(valorTexto);
    return valorFloat
}