function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
}// JavaScript Document


function frases_oculta(id){
if (document.getElementById){ //se obtiene el id
var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
}
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/
frases_oculta('frases_a_mostrar');/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
}

function datos(){
		n1 = document.getElementById("txtN1").value;
		diametro.innerHTML = "Diametro: "  +n1;
		n2 = document.getElementById("txtN2").value;
		vc.innerHTML = "Velocida de corte: "  +n2;
		n3 = document.getElementById("txtN3").value;
		rpm.innerHTML = "RPM: "  +n3;
		
			if(n3==""){
				
					rpm.innerHTML = "RPM: " +(1000*n2)/(3.14*n1);			
				}
				else{
					
				vc.innerHTML = "Velocida de corte: " +((3.14*n1*n3)/100);
				}
				

						
				};
 