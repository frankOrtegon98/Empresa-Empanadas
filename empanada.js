function crearTiendas(contenedorId, min, cantidadTiendas){

    //Encontrar el contenedor por su ID
    let etiquetaContenedor = document.getElementById(contenedorId);

    //Loop para crear tantas tiendas como se pidan
    for(let conteoTiendas=1; conteoTiendas <= cantidadTiendas; conteoTiendas++){
         
        //Crear el texto de la etiqueta <label>
        let textoEtiqueta = "Tienda " + conteoTiendas;

        //Llamar función para crear inputs
        let parrafoTienda = crearEtiquetaTienda(textoEtiqueta,min);

        //Agregar la etiqueta <p> al contenedor
        etiquetaContenedor.appendChild(parrafoTienda);

    }
}

function crearEtiquetaTienda(identificadorInput, valorMin){

    //crear las etiquetas <p>
    let etiquetaParrafo = document.createElement("p");

    //crear la etiqueta <label>
    let etiquetaLabel = document.createElement("label");
    etiquetaLabel.innerText = identificadorInput + ": ";

    //crear etiqueta <inpunt>
    let etiquetaInput = document.createElement("input");

    //conectar con la etiqueta input
    etiquetaLabel.setAttribute("for", identificadorInput);

    //establecer los atributos a la etiqueta input
    etiquetaInput.setAttribute("type", "number");
    etiquetaInput.setAttribute("id", identificadorInput);
    etiquetaInput.setAttribute("min", valorMin);
    etiquetaInput.setAttribute("value", 0);

    //Agregar las etiquetas label e input a la etiqueta parrafo
    etiquetaParrafo.appendChild(etiquetaLabel);
    etiquetaParrafo.appendChild(etiquetaInput);

    //Devolver la etiqueta parrafo
    return etiquetaParrafo;
}

function calcular(){
    let ventas = [];
    let posicionVentas = 0;
    let elementosVentas = document.getElementById("itemsTiendas");

    for(let item of elementosVentas.children){
        let valorVenta = +item.children[1].value;
        ventas[posicionVentas] = valorVenta;
        posicionVentas = posicionVentas + 1;
    }

    let totalVentas = sumarTotal(ventas);
    let ventaMayor = calcularMayor(ventas);
    let ventaMenor = calcularMenor(ventas);

    for(let item of elementosVentas.children){
        let valorVenta = +item.children[1].value;

        item.children[1].className = "inputNormal";

        if(valorVenta == ventaMayor){
            item.children[1].className = "inputMayor";
            item.children[0].className = "inputMayor";
        }

        if(valorVenta == ventaMenor){
            item.children[1].className = "inputMenor";
        }
    }

    let mensajeSalida = "Total Ventas: " + totalVentas;
    document.getElementById("resultado").textContent = mensajeSalida;
}

function sumarTotal(arrayVentas){
    let total = 0;

    for(let venta of arrayVentas){
        total += venta;
    }

    return total;
}

function calcularMayor(arrayVentas){
    let maximo = arrayVentas[0];

    for(let ventaMayor of arrayVentas){
        if(ventaMayor > maximo){
            maximo = ventaMayor;
        }
    }

    return maximo;
}

function calcularMenor(arrayVentas){
    let minimo = arrayVentas[0];

    for(let ventaMenor of arrayVentas){
        if(ventaMenor < minimo){
            minimo = ventaMenor;
        }
    }

    return minimo;
}