function mostrarPrecio(codigo){
    switch(codigo){
        case 1:
            alert("Bakemonogatari 01 cuesta $12.990")
            break
        case 2:
            alert("Slam Dunk 04 cuesta $13.990")
            break
        case 3:
            alert("Vagabond 01 cuesta $9.490")
            break
        case 4:
            alert("Goblin Slayer 01 cuesta $17.490")
            break
        case 5:
            alert("Overlord 01 cuesta $23.990")
            break
        default:
            alert("No se encuentran resultados")
    }
}

function consultaMangas(){
    let preguntar = true

    while(preguntar) {
        let codigoMangas = prompt("Ingresa el código numérico del manga que se quiere consultar")

        if (codigoMangas !== '' && codigoMangas !== null) {
            mostrarPrecio(parseInt(codigoMangas))
        } else {
            console.warn("Ingresa un código de manga válido")
        }
        preguntar = confirm("¿Deseas conocer el valor de otro manga?")
    }
}