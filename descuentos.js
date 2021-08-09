//const preciooriginal = 120;
//const descuento = 15;

function calcularprecio(precio, descuento){
    const porcentajepreciocondescuento = 100 - descuento;
    const preciocondescuento = (precio * porcentajepreciocondescuento)/100;
    return preciocondescuento;
}


function Calcularprecio (){
    const inputprecio = document.getElementById("Inputprice")
    const inutdescuento = document.getElementById("Inputdicount")
    const preciovalor = inputprecio.value;
    const descuentovalor = inutdescuento.value;
    
    const preciocondescuento = calcularprecio(preciovalor, descuentovalor);

    const resultP = document.getElementById("Resultado")
    resultP.innerText = "El precio con descuento son: $" + preciocondescuento
}




