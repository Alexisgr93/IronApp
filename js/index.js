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


/* FUNCIONGPS EMPIEZA ACA parte 1°	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!		
 (function (){
	var content = document.getElementById("geolocation-test");

	if (navigator.geolocation)
	{
		navigator.geolocation.getCurrentPosition(function(objPosition)
		{
			var lon = objPosition.coords.longitude;
			var lat = objPosition.coords.latitude;
			var cor = objPosition.coords.accuracy;
			
			var las = -58.4850904;
			var los =  -34.6757411;
		if(objPosition.coords.longitude==las){
		alert("si");
		}
		/*Muestra la latitud en pantalla
			content.innerHTML = "<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>";*/


	/* FUNCIONGPS EMPIEZA ACA parte 2°	!!!!!!!!!!!!!!!!!!!!!!!!!!!!!	
		var	rad = function(x) {return x*Math.PI/180;}
  var R = 6378.137; //Radio de la tierra en km 
  var dLat = rad( las - objPosition.coords.latitude );
  var dLong = rad( los - objPosition.coords.longitude );
  
  var a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.cos(rad(objPosition.coords.latitude)) * 
  Math.cos(rad(las)) * Math.sin(dLong/2) * Math.sin(dLong/2);
  
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

  //aquí obtienes la distancia en metros por la conversion 1Km =1000m
  var d = (R * c); 
  alert( d.toFixed(3)) ; 
			
			
			
			
			
			confirm("<p><strong>Latitud:</strong> " + lat + "</p><p><strong>Longitud:</strong> " + lon + "</p>" +  "Usted se encuentra a:" + cor.toFixed(0) + " metros");

		}, function(objPositionError)
		{
			
				
			switch (objPositionError.code)
			{
				case objPositionError.PERMISSION_DENIED:
					confirm("No se ha permitido el acceso a la posición del usuario.");
				break;
				case objPositionError.POSITION_UNAVAILABLE:
					confirm("No se ha podido acceder a la información de su posición.");
				break;
				case objPositionError.TIMEOUT:
					confirm("El servicio ha tardado demasiado tiempo en responder.");
				break;
				default:
					confirm("Error desconocido.");
					
				
			}
		}, {
			maximumAge: 75000,
			timeout: 15000
		});
	}
	else
	{
		content.innerHTML = "Su navegador no soporta la API de geolocalización.";
	}
})();

*/



