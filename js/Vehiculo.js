var tablaVehiculos = [];
// window.onload= cargarEventosVehiculos;

// function cargarEventosVehiculos(){
//    document.getElementById("boton-Rvehiculo").addEventListener("click",nuevoVehiculo,false);
// }

function nuevoVehiculo(){
	var Ncolor =prompt("ingrese el color del vehículo");
	var Nplaca=parseInt(prompt("ingrese la placa"));
	var Ntipo =prompt("ingrese el tipo 'camioneta','auto','minubus'");
	var NanioFra=parseInt(prompt("ingrese el año de fabricacion"));
	var Ncilindraje=parseInt(prompt("ingrese el cilindraje"));
	var Npotencia=parseInt(prompt("ingrese la potencia"));
	var nuevoVehiculo = {nombre:Ncolor,placa:Nplaca,tipo:Ntipo,anioFra:NanioFra,cilindraje:Ncilindraje,potencia:Npotencia};
	tablaVehiculos.push(nuevoVehiculo);
}
function listarVehiculos(){
	for (var i = 0; i < tablaVehiculos.length; i++) {
		console.log(tablaVehiculos[i]);
	}
}
function editarVehiculos(){
	var buscarVehiculo=prompt("ingrese la placa del vehículo");
	for (var i = 0; i < tablaVehiculos.length; i++) {
		if(tablaVehiculos[i].placa==buscarVehiculo){
			alert("Vehiculo encontrado")
			var nuevoColor =prompt("ingrese el color del vehículo");
	        var nuevoPlaca=parseInt(prompt("ingrese la placa"));
	        var nuevoTipo =prompt("ingrese el tipo 'camioneta','auto','minubus'");
	        var nuevoAnioFra=parseInt(prompt("ingrese el año de fabricacion"));
	        var nuevoCilindraje=parseInt(prompt("ingrese el cilindraje"));
	        var nuevoPotencia=parseInt(prompt("ingrese la potencia"));
            tablaVehiculos[i].nombre=nuevoColor;
            tablaVehiculos[i].placa=nuevoPlaca;
            tablaVehiculos[i].tipo=nuevoTipo;
            tablaVehiculos[i].anioFra=nuevoAnioFra;
            tablaVehiculos[i].cilindraje=nuevoCilindraje;
            tablaVehiculos[i].potencia=nuevoPotencia;
			console.log(tablaVehiculos[i]);
		}
	}
}
