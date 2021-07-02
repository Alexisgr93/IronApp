function muestra_ocultaVC(id){

	if (document.getElementById){ //se obtiene el id
		var vc = document.getElementById(id); //se define la variable "el" igual a nuestro div
		
		vc.style.display = (vc.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}

	var a = document.getElementById("mas-menos-text2");
	var b = document.getElementById("contenido-todo2");


	if(vc.style.display == "none"){
		a.innerHTML = "+";
		a = document.getElementById("mas-menos-text2").style.marginLeft="20%";
		b = document.getElementById("contenido-todo2").style.height = "60px";
	}
	else{
		a.innerHTML = "-";
		a = document.getElementById("mas-menos-text2").style.marginLeft="27%";
		b = document.getElementById("contenido-todo2").style.height = "140px";
	}
	
}

				
            	

function muestra_ocultaVF(id){

	if (document.getElementById){ //se obtiene el id
		var vf = document.getElementById(id); //se define la variable "el" igual a nuestro div
		
		vf.style.display = (vf.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}

	var a = document.getElementById("mas-menos-text3");
	var b = document.getElementById("contenido-todo3");


	if(vf.style.display == "none"){
		a.innerHTML = "+";
		a = document.getElementById("mas-menos-text3").style.marginLeft="20%";
		b = document.getElementById("contenido-todo3").style.height = "60px";
	}
	else{
		a.innerHTML = "-";
		a = document.getElementById("mas-menos-text3").style.marginLeft="27%";
		b = document.getElementById("contenido-todo3").style.height = "140px";
	}
	
}


 
function muestra_ocultaFZ(id){

	if (document.getElementById){ //se obtiene el id
		var fz = document.getElementById(id); //se define la variable "el" igual a nuestro div
		
		fz.style.display = (fz.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}

	var a = document.getElementById("mas-menos-text4");
	var b = document.getElementById("contenido-todo4");


	if(fz.style.display == "none"){
		a.innerHTML = "+";
		a = document.getElementById("mas-menos-text4").style.marginLeft="20%";
		b = document.getElementById("contenido-todo4").style.height = "60px";
	}
	else{
		a.innerHTML = "-";
		a = document.getElementById("mas-menos-text4").style.marginLeft="27%";
		b = document.getElementById("contenido-todo4").style.height = "140px";
	}
	
}

    
 

function muestra_ocultaQ(id){

	if (document.getElementById){ //se obtiene el id
		var q = document.getElementById(id); //se define la variable "el" igual a nuestro div
		
		q.style.display = (q.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}

	var a = document.getElementById("mas-menos-text5");
	var b = document.getElementById("contenido-todo5");


	if(q.style.display == "none"){
		a.innerHTML = "+";
		a = document.getElementById("mas-menos-text5").style.marginLeft="20%";
		b = document.getElementById("contenido-todo5").style.height = "60px";
	}
	else{
		a.innerHTML = "-";
		a = document.getElementById("mas-menos-text5").style.marginLeft="27%";
		b = document.getElementById("contenido-todo5").style.height = "140px";
	}
	
}




function muestra_ocultaRPM(id){

	if (document.getElementById){ //se obtiene el id
		var el = document.getElementById(id); //se define la variable "el" igual a nuestro div
		
		el.style.display = (el.style.display == 'none') ? 'block' : 'none'; //damos un atributo display:none que oculta el div
	}

	var a = document.getElementById("mas-menos-text");
	var b = document.getElementById("contenido-todo");


	if(el.style.display == "none"){
		a.innerHTML = "+";
		a = document.getElementById("mas-menos-text").style.marginLeft="20%";
		b = document.getElementById("contenido-todo").style.height = "60px";
	}
	else{
		a.innerHTML = "-";
		a = document.getElementById("mas-menos-text").style.marginLeft="27%";
		b = document.getElementById("contenido-todo").style.height = "140px";
	}
	
}
window.onload = function(){/*hace que se cargue la función lo que predetermina que div estará oculto hasta llamar a la función nuevamente*/

muestra_ocultaRPM("CalcularRPM");/* "contenido_a_mostrar" es el nombre que le dimos al DIV */
muestra_ocultaVC("CalcularVC");
muestra_ocultaVF("CalcularVF");
muestra_ocultaFZ("CalcularFZ");
muestra_ocultaQ("CalcularQ");
}








