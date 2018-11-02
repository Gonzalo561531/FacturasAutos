var tablaFactura=[];
// window.onload=cargarEventosFactura;

// function cargarEventosFactura(){
// 	document.getElementById("boton-Rventa").addEventListener("click",nuevoVenta,false);
// }

function nuevoVenta(){
    
    var x=false;
    var y=false
    do{
    	   var Ncliente =prompt("ingrese el cliente");	       
    	   for (var i = 0; i < tablaClientes.length; i++) {
		        if (tablaClientes[i].nombre==Ncliente) {
		        if(i+1==tablaClientes.length){
		        	x=true;
		            }			    
		        }	
	        }   
        
    }while (x==false);
    var Nfecha = prompt("ingrese la fecha D/M/A"); 
    var Nprecio = prompt("ingrese el precio");
    var Nfactura = prompt("ingrese el numero de factura");
    var nuevoVenta = {cliente:Ncliente,fecha:Nfecha,precio:Nprecio,factura:Nfactura};  
    tablaFactura.push(nuevoVenta);
}

function listarVentas(){
	for (var i = 0; i < tablaFactura.length; i++) {
		console.log(tablaFactura[i]);
	}
}
