window.onload=cargarEventosFactura;
function cargarEventosFactura(){
	document.getElementById("boton-Rventa").addEventListener("click",this.nuevoVenta,false);
    document.getElementById("boton-Rvehiculo").addEventListener("click",this.nuevoVehiculo,false);
    document.getElementById("boton-Rcliente").addEventListener("click",this.nuevoCliente,false);
    document.getElementById("boton-Lventas").addEventListener("click",this.listarVentas,false);
    document.getElementById("boton-Lclientes").addEventListener("click",this.listarClientes,false);
    document.getElementById("boton-Lvehiculos").addEventListener("click",this.listarVehiculos,false);
    document.getElementById("boton-Eclientes").addEventListener("click",this.editarClientes,false);
    document.getElementById("boton-Evehiculos").addEventListener("click",this.editarVehiculos,false);
}