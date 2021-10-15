  var boton = document.getElementById("cotizacion");
  var numdias = document.getElementById("idnumero");
  var carro = document.getElementById("auto_seleccionado");
  var camioneta = document.getElementById("camioneta_seleccionado");
  var chofer = document.getElementById("chofer");
  var total_dinero = 0;
 
function verificador(numdias, carro, camioneta, chofer ) {
   
    if (carro == true) {
        total_dinero = 20.000;   
    }
    else{
        total_dinero = 0;
    }

    if (camioneta == true) {
        total_dinero = 40.000;
    }
    else{
        total_dinero = 0;
    }
    if (chofer == true) {
        total_dinero += 15.000;  
    }   
    else{
        total_dinero = total_dinero;
    }  
    
    total_dinero * numdias;
    
}
    
    
                     
