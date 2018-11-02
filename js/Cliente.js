var tablaClientes = [];
// window.onload= cargarEventosClientes;

// function cargarEventosClientes(){
// 	document.getElementById("boton-Rcliente").addEventListener("click",nuevoCliente,false);
// }
function nuevoCliente(){
	var cliente =prompt("ingrese el nombre");
	var Documento=parseInt(prompt("ingrese DNI"));
	var nuevoCliente = {nombre:cliente,DNI:Documento};
	tablaClientes.push(nuevoCliente); 
	
}

function listarClientes(){
	for (var i = 0; i < tablaClientes.length; i++) {
		console.log(tablaClientes[i]);
	}
}

function editarClientes(){
	var buscarClientes=prompt("ingrese el nombre del cliente a Editar");
	for (var i = 0; i < tablaClientes.length; i++) {
		if(tablaClientes[i].nombre==buscarClientes){
			alert("cliente encontrado")
			var editarNombre=prompt("ingrese El nuevo Nombre");
            var editarDNI=prompt("ingrese El nuevo DNI");
            tablaClientes[i].nombre=editarNombre;
            tablaClientes[i].DNI=editarDNI;
			console.log(tablaClientes[i]);
		}
	}
}
