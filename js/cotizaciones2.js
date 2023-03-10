let botonRegistro;
    botonRegistro=document.getElementById("botonCoticacionesArticulos");
    botonRegistro.onclick = () =>{
    obtenerNumero();
    };

document.getElementById("numeroArticulo1").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado1")));
document.getElementById("numeroArticulo2").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado2")));
document.getElementById("numeroArticulo3").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado3")));
document.getElementById("numeroArticulo4").value=parseInt(JSON.parse(localStorage.getItem("numeroGuardado4")));

let productoGenerico = document.getElementsByClassName("cotizaciones__name");
for (let numeroDeProductosGenericos = 0; numeroDeProductosGenericos < productoGenerico.length; numeroDeProductosGenericos++) {
let indice=productos.findIndex(productos => productos.id === numeroDeProductosGenericos+1);
let nombreDeProductoGenerico=eliminarComillas(JSON.stringify(productos[indice].nombreDeProducto));
productoGenerico[numeroDeProductosGenericos].innerHTML = nombreDeProductoGenerico;
}

function eliminarComillas(palabraConComillas) {
    let palabraSinComillas;
    palabraSinComillas=palabraConComillas.replaceAll('"','');
    return palabraSinComillas;
};


function obtenerNumero() {

    let precioTotalArticulo1;
    let precioTotalArticulo2;
    let precioTotalArticulo3;
    let precioTotalArticulo4;
    let precioTotalTodosLosArticulos;

        numeroArticuloCotizacion = document.getElementById("numeroArticulo1").value;
        numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
        let texto;
        let articulo;
        if (isNaN(numeroArticuloCotizacion)) {
        texto = "No Valido";
        precioTotalArticulo1=0;
        } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
        texto = "El costo de "+numeroArticuloCotizacion+" baños es de "+numeroArticuloCotizacion*10+" pesos.";
        precioTotalArticulo1=numeroArticuloCotizacion*10;
        } else  {
            texto = "El numero tiene que ser positivo y entero.";
        }
        document.getElementById("textoArticulo1").innerHTML = texto;
        precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
        localStorage.setItem("numeroGuardado1",JSON.stringify(numeroArticuloCotizacion));
        localStorage.setItem("textoArticulo1",JSON.stringify(texto));


        numeroArticuloCotizacion = document.getElementById("numeroArticulo2").value;
        numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
        if (isNaN(numeroArticuloCotizacion)) {
        texto = "No Valido";
        precioTotalArticulo2=0;
        } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
        texto = "El costo de "+numeroArticuloCotizacion+" iluminacion es de "+numeroArticuloCotizacion*20+" pesos.";
        precioTotalArticulo2=numeroArticuloCotizacion*20;
        } else  {
            texto = "El numero tiene que ser positivo y entero.";
        }
        document.getElementById("textoArticulo2").innerHTML = texto;
        precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
        localStorage.setItem("numeroGuardado2",JSON.stringify(numeroArticuloCotizacion));
        localStorage.setItem("textoArticulo2",JSON.stringify(texto));


        numeroArticuloCotizacion = document.getElementById("numeroArticulo3").value;
        numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
        if (isNaN(numeroArticuloCotizacion)) {
        texto = "No Valido";
        precioTotalArticulo3=0;
        } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
        texto = "El costo de "+numeroArticuloCotizacion+" pisos es de "+numeroArticuloCotizacion*30+" pesos.";
        precioTotalArticulo3=numeroArticuloCotizacion*30;
        } else  {
            texto = "El numero tiene que ser positivo y entero.";
        }
        document.getElementById("textoArticulo3").innerHTML = texto;
        precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
        localStorage.setItem("numeroGuardado3",JSON.stringify(numeroArticuloCotizacion));
        localStorage.setItem("textoArticulo3",JSON.stringify(texto));


        numeroArticuloCotizacion = document.getElementById("numeroArticulo4").value;
        numeroArticuloCotizacion = parseFloat(numeroArticuloCotizacion);
        if (isNaN(numeroArticuloCotizacion)) {
        texto = "No Valido";
        precioTotalArticulo4=0;
        } else if (Number.isInteger(numeroArticuloCotizacion) && numeroArticuloCotizacion>=parseInt(0)) {
        texto = "El costo de "+numeroArticuloCotizacion+" cocinas es de "+numeroArticuloCotizacion*40+" pesos.";
        precioTotalArticulo4=numeroArticuloCotizacion*40;
        } else  {
            texto = "El numero tiene que ser positivo y entero.";
        }
        document.getElementById("textoArticulo4").innerHTML = texto;
        precioTotalTodosLosArticulos=precioTotalArticulo1+precioTotalArticulo2+precioTotalArticulo3+precioTotalArticulo4;
        textoPrecioTotal="El costo de todos los articulos es de "+precioTotalTodosLosArticulos+" pesos.";
        document.getElementById("cotizaciones_precio_total").innerHTML = textoPrecioTotal;
        localStorage.setItem("numeroGuardado4",JSON.stringify(numeroArticuloCotizacion));
        localStorage.setItem("textoArticulo4",JSON.stringify(texto));

    };

    var input = document.getElementById("numeroArticulo1");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCoticacionesArticulos").onclick();
        }
    });
    
    var input = document.getElementById("numeroArticulo2");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCoticacionesArticulos").onclick();
        }
    });

    var input = document.getElementById("numeroArticulo3");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCoticacionesArticulos").onclick();
        }
    });

    var input = document.getElementById("numeroArticulo4");
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("botonCoticacionesArticulos").onclick();
        }
});