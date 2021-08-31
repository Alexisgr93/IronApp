function material_open() {
    document.getElementById("mySidebar1").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
}
function material_close() {
    document.getElementById("mySidebar1").style.display = "none";
    document.getElementById("myOverlay1").style.display = "none";
}




function myFunction1() {
	
  if (document.getElementById("AceroNoAleado") == true ) {
    document.getElementById("AceroNoAleado").style.display = "none";
	
	
  } else {
	  document.getElementById("AceroNoAleado").style.display = "block";
	  document.getElementById("Fundicion").style.display = "none";
	  document.getElementById("AceroInoxidable").style.display = "none";
	  document.getElementById("AleacionForja").style.display = "none";
	  document.getElementById("AleacionTermo").style.display = "none";
	  document.getElementById("AceroTemplado").style.display = "none";
	 }
	  
	 
}

function myFunction2(){
	   if(document.getElementById("Fundicion") == true){
		  document.getElementById("Fundicion").style.display = "none";
	
  } else {
	  document.getElementById("Fundicion").style.display = "block";
	  document.getElementById("AceroNoAleado").style.display = "none"
	  document.getElementById("AceroInoxidable").style.display = "none";
	  document.getElementById("AleacionForja").style.display = "none";
	  document.getElementById("AleacionTermo").style.display = "none";
	  document.getElementById("AceroTemplado").style.display = "none";
	  
	  }
  
}

function myFunction3(){
	   if(document.getElementById("AceroInoxidable") == true){
		  document.getElementById("AceroInoxidable").style.display = "none";
	
  } else {
	  document.getElementById("AceroInoxidable").style.display = "block";
	  document.getElementById("AceroNoAleado").style.display = "none";
	  document.getElementById("AleacionForja").style.display = "none";
	  document.getElementById("AleacionTermo").style.display = "none";
	  document.getElementById("AceroTemplado").style.display = "none";
	  document.getElementById("Fundicion").style.display = "none";
	  
	  }
  
}

function myFunction4(){
	   if(document.getElementById("AleacionForja") == true){
		  document.getElementById("AleacionForja").style.display = "none";
	
  } else {
	  document.getElementById("AleacionForja").style.display = "block";
	  document.getElementById("AceroNoAleado").style.display = "none";
	  document.getElementById("AleacionTermo").style.display = "none";
	  document.getElementById("AceroTemplado").style.display = "none";
	  document.getElementById("Fundicion").style.display = "none";
	  document.getElementById("AceroInoxidable").style.display = "none";
	  
	  }
  
}

function myFunction5(){
	   if(document.getElementById("AleacionTermo") == true){
		  document.getElementById("AleacionTermo").style.display = "none";
	
  } else {
	  document.getElementById("AleacionTermo").style.display = "block";
	  document.getElementById("AleacionForja").style.display = "none";
	  document.getElementById("AceroNoAleado").style.display = "none";
	  document.getElementById("AceroTemplado").style.display = "none";
	  document.getElementById("Fundicion").style.display = "none";
	  document.getElementById("AceroInoxidable").style.display = "none";
	  
	  }
  
}

function myFunction6(){
	   if(document.getElementById("AceroTemplado") == true){
		  document.getElementById("AceroTemplado").style.display = "none";
	
  } else {
	  document.getElementById("AceroTemplado").style.display = "block";
	  document.getElementById("AceroNoAleado").style.display = "none";
	  document.getElementById("AleacionForja").style.display = "none";
	  document.getElementById("AleacionTermo").style.display = "none";
	  document.getElementById("Fundicion").style.display = "none";
	  document.getElementById("AceroInoxidable").style.display = "none";
	  
	  }
  
}



function TablaResultados_open() {
    document.getElementById("TablaRes").style.display = "block";
    document.getElementById("TablaResOver").style.display = "block";
}
function TablaResultados_close() {
    document.getElementById("TablaRes").style.display = "none";
    document.getElementById("TablaResOver").style.display = "none";
}



