function aForm(){
    location.href="formulario.html";
}

function aInd(){
    location.href="index.html"
}

function FormCheck(){
    var nombre = document.getElementById("name").value;
    var edad = document.getElementById("age").value;
    var tel = document.getElementById("phone").value;
    var hombre = document.getElementById("male").checked;
    var mujer = document.getElementById("female").checked;
    var salida = document.getElementById("origen").value;
    var destino = document.getElementById("destiny").value;


    var alerta = "Revise por favor su ";
    var alertar = false;

    if(nombre === "")
    {
        alerta = alerta + "nombre y apellido, "
        alertar = true;
    }
    if(isNaN(edad) || edad < 18 || edad > 120 )
    {
        alertar = true;
        alerta = alerta + "edad, ";
    }
    if(tel === "")
    {
        alertar = true;
        alerta = alerta + "telefono, "
    }
    if( (hombre && mujer) || !(hombre || mujer ) )
    {
        alertar = true;
        alerta = alerta + "sexo, ";
    }
    if(salida === destino)
    {
        alertar = true;
        alerta = alerta + "salida y destino."
    }

    if(alertar)
    {
        alert(alerta);
    }else{
        var mensaje = "Muchas gracias ";
        if(hombre)
        {
            mensaje = mensaje + " señor " + nombre + ", brevemente nos comunicaremos a " +
                " su telefono " + tel + " sobre los viajes que tenemos disponibles desde " + salida +
                " a " + destino + "! ";
        }else if(mujer){
            mensaje = mensaje + " señora " + nombre + ", brevemente nos comunicaremos a " +
                " su telefono " + tel + " sobre los viajes que tenemos disponibles desde " + salida +
                " a " + destino + "! ";
        }

        document.getElementById("msg").innerHTML = mensaje;
    }

}

function limpiar()
{
    document.getElementById("name").value = "";
    document.getElementById("age").value = 0;
    document.getElementById("phone").value = "";
    document.getElementById("male").checked = 0;
    document.getElementById("female").checked = 0;
    document.getElementById("origen").value = "arg";
    document.getElementById("destiny").value = "arg";
    document.getElementById("msg").innerHTML="";
    document.getElementById("costo").innerHTML="";
}

function aproxPrecio() {
    var salida = document.getElementById("origen").value;
    var destino = document.getElementById("destiny").value;


    if (salida === destino) {
        alert("Revise por favor su salida y destino.")
    } else {


        var costoPasaje;
        var distancia;
        var costoPorKM;
        var total;

        if (salida === "Argentina") {
            costoPasaje = 10000;
            costoPorKM = 10;

            if (destino === "Francia") {
                distancia = 11261;
            }
            if (destino === "Corea del Sur") {
                distancia = 18922;
            }

        }

        if (salida === "Francia") {
            costoPasaje = 8000;
            costoPorKM = 15;

            if (destino === "Argentina") {
                distancia = 11261;
            }
            if (destino === "Corea del Sur") {
                distancia = 9378;
            }
        }

        if (salida === "Corea del sur") {
            costoPasaje = 14000;
            costoPorKM = 5;

            if (destino === "Argentina") {
                distancia = 18922;
            }
            if (destino === "Francia") {
                distancia = 9378;
            }
        }
        total = costoPasaje + distancia * costoPorKM;

        document.getElementById("costo").innerHTML = "El pasaje costará aproximadamente " + total +
            " pesos argentinos sin impuestos."
    }
}
