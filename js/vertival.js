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


/*Inserto P1*/
function abrir_P1() {
    document.getElementById("barraP1").style.display = "block";
    document.getElementById("posicionP1").style.display = "block";
}
function cerrar_P1() {
    document.getElementById("barraP1").style.display = "none";
    document.getElementById("posicionP1").style.display = "none";
}



function abrir_P2() {
    document.getElementById("barraP2").style.display = "block";
    document.getElementById("posicionP2").style.display = "block";
}
function cerrar_P2() {
    document.getElementById("barraP2").style.display = "none";
    document.getElementById("posicionP2").style.display = "none";
}


function abrir_P3() {
    document.getElementById("barraP3").style.display = "block";
    document.getElementById("posicionP3").style.display = "block";
}
function cerrar_P3() {
    document.getElementById("barraP3").style.display = "none";
    document.getElementById("posicionP3").style.display = "none";
}



function abrir_P4() {
    document.getElementById("barraP4").style.display = "block";
    document.getElementById("posicionP4").style.display = "block";
}
function cerrar_P4() {
    document.getElementById("barraP4").style.display = "none";
    document.getElementById("posicionP4").style.display = "none";
}



function abrir_P5() {
    document.getElementById("barraP5").style.display = "block";
    document.getElementById("posicionP5").style.display = "block";
}
function cerrar_P5() {
    document.getElementById("barraP5").style.display = "none";
    document.getElementById("posicionP5").style.display = "none";
}


function abrir_P6() {
    document.getElementById("barraP6").style.display = "block";
    document.getElementById("posicionP6").style.display = "block";
}
function cerrar_P6() {
    document.getElementById("barraP6").style.display = "none";
    document.getElementById("posicionP6").style.display = "none";
}


function abrir_P7() {
    document.getElementById("barraP7").style.display = "block";
    document.getElementById("posicionP7").style.display = "block";
}
function cerrar_P7() {
    document.getElementById("barraP7").style.display = "none";
    document.getElementById("posicionP7").style.display = "none";
}


/*Inserto fundicion*/
function abrir_K1() {
    document.getElementById("barraK1").style.display = "block";
    document.getElementById("posicionK1").style.display = "block";
}
function cerrar_K1() {
    document.getElementById("barraK1").style.display = "none";
    document.getElementById("posicionK1").style.display = "none";
}

function abrir_K2() {
    document.getElementById("barraK2").style.display = "block";
    document.getElementById("posicionK2").style.display = "block";
}
function cerrar_K2() {
    document.getElementById("barraK2").style.display = "none";
    document.getElementById("posicionK2").style.display = "none";
}

function abrir_K3() {
    document.getElementById("barraK3").style.display = "block";
    document.getElementById("posicionK3").style.display = "block";
}
function cerrar_K3() {
    document.getElementById("barraK3").style.display = "none";
    document.getElementById("posicionK3").style.display = "none";
}

function abrir_K4() {
    document.getElementById("barraK4").style.display = "block";
    document.getElementById("posicionK4").style.display = "block";
}
function cerrar_K4() {
    document.getElementById("barraK4").style.display = "none";
    document.getElementById("posicionK4").style.display = "none";
}


function abrir_K5() {
    document.getElementById("barraK5").style.display = "block";
    document.getElementById("posicionK5").style.display = "block";
}
function cerrar_K5() {
    document.getElementById("barraK5").style.display = "none";
    document.getElementById("posicionK5").style.display = "none";
}

function abrir_K6() {
    document.getElementById("barraK6").style.display = "block";
    document.getElementById("posicionK6").style.display = "block";
}
function cerrar_K6() {
    document.getElementById("barraK6").style.display = "none";
    document.getElementById("posicionK6").style.display = "none";
}

/*Inserto ACERO INOXIDABLE*/
function abrir_M1() {
    document.getElementById("barraM1").style.display = "block";
    document.getElementById("posicionM1").style.display = "block";
}
function cerrar_M1() {
    document.getElementById("barraM1").style.display = "none";
    document.getElementById("posicionM1").style.display = "none";
}

function abrir_M2() {
    document.getElementById("barraM2").style.display = "block";
    document.getElementById("posicionM2").style.display = "block";
}
function cerrar_M2() {
    document.getElementById("barraM2").style.display = "none";
    document.getElementById("posicionM2").style.display = "none";
}

function abrir_M3() {
    document.getElementById("barraM3").style.display = "block";
    document.getElementById("posicionM3").style.display = "block";
}
function cerrar_M3() {
    document.getElementById("barraM3").style.display = "none";
    document.getElementById("posicionM3").style.display = "none";
}


/*Inserto N*/
function abrir_N1() {
    document.getElementById("barraN1").style.display = "block";
    document.getElementById("posicionN1").style.display = "block";
}
function cerrar_N1() {
    document.getElementById("barraN1").style.display = "none";
    document.getElementById("posicionN1").style.display = "none";
}



function abrir_N2() {
    document.getElementById("barraN2").style.display = "block";
    document.getElementById("posicionN2").style.display = "block";
}
function cerrar_N2() {
    document.getElementById("barraN2").style.display = "none";
    document.getElementById("posicionN2").style.display = "none";
}


function abrir_N3() {
    document.getElementById("barraN3").style.display = "block";
    document.getElementById("posicionN3").style.display = "block";
}
function cerrar_N3() {
    document.getElementById("barraN3").style.display = "none";
    document.getElementById("posicionN3").style.display = "none";
}



function abrir_N4() {
    document.getElementById("barraN4").style.display = "block";
    document.getElementById("posicionN4").style.display = "block";
}
function cerrar_N4() {
    document.getElementById("barraN4").style.display = "none";
    document.getElementById("posicionN4").style.display = "none";
}



function abrir_N5() {
    document.getElementById("barraN5").style.display = "block";
    document.getElementById("posicionN5").style.display = "block";
}
function cerrar_N5() {
    document.getElementById("barraN5").style.display = "none";
    document.getElementById("posicionN5").style.display = "none";
}


function abrir_N6() {
    document.getElementById("barraN6").style.display = "block";
    document.getElementById("posicionN6").style.display = "block";
}
function cerrar_N6() {
    document.getElementById("barraN6").style.display = "none";
    document.getElementById("posicionN6").style.display = "none";
}


function abrir_N7() {
    document.getElementById("barraN7").style.display = "block";
    document.getElementById("posicionN7").style.display = "block";
}
function cerrar_N7() {
    document.getElementById("barraN7").style.display = "none";
    document.getElementById("posicionN7").style.display = "none";
}



/*Inserto S*/
function abrir_S1() {
    document.getElementById("barraS1").style.display = "block";
    document.getElementById("posicionS1").style.display = "block";
}
function cerrar_S1() {
    document.getElementById("barraS1").style.display = "none";
    document.getElementById("posicionS1").style.display = "none";
}



function abrir_S2() {
    document.getElementById("barraS2").style.display = "block";
    document.getElementById("posicionS2").style.display = "block";
}
function cerrar_S2() {
    document.getElementById("barraS2").style.display = "none";
    document.getElementById("posicionS2").style.display = "none";
}


function abrir_S3() {
    document.getElementById("barraS3").style.display = "block";
    document.getElementById("posicionS3").style.display = "block";
}
function cerrar_S3() {
    document.getElementById("barraS3").style.display = "none";
    document.getElementById("posicionS3").style.display = "none";
}



function abrir_S4() {
    document.getElementById("barraS4").style.display = "block";
    document.getElementById("posicionS4").style.display = "block";
}
function cerrar_S4() {
    document.getElementById("barraS4").style.display = "none";
    document.getElementById("posicionS4").style.display = "none";
}



function abrir_S5() {
    document.getElementById("barraS5").style.display = "block";
    document.getElementById("posicionS5").style.display = "block";
}
function cerrar_S5() {
    document.getElementById("barraS5").style.display = "none";
    document.getElementById("posicionS5").style.display = "none";
}


function abrir_S6() {
    document.getElementById("barraS6").style.display = "block";
    document.getElementById("posicionS6").style.display = "block";
}
function cerrar_S6() {
    document.getElementById("barraS6").style.display = "none";
    document.getElementById("posicionS6").style.display = "none";
}



/*Inserto H*/
function abrir_H1() {
    document.getElementById("barraH1").style.display = "block";
    document.getElementById("posicionH1").style.display = "block";
}
function cerrar_H1() {
    document.getElementById("barraH1").style.display = "none";
    document.getElementById("posicionH1").style.display = "none";
}



function abrir_H2() {
    document.getElementById("barraH2").style.display = "block";
    document.getElementById("posicionH2").style.display = "block";
}
function cerrar_H2() {
    document.getElementById("barraH2").style.display = "none";
    document.getElementById("posicionH2").style.display = "none";
}


function abrir_H3() {
    document.getElementById("barraH3").style.display = "block";
    document.getElementById("posicionH3").style.display = "block";
}
function cerrar_H3() {
    document.getElementById("barraH3").style.display = "none";
    document.getElementById("posicionH3").style.display = "none";
}



function abrir_H4() {
    document.getElementById("barraH4").style.display = "block";
    document.getElementById("posicionH4").style.display = "block";
}
function cerrar_H4() {
    document.getElementById("barraH4").style.display = "none";
    document.getElementById("posicionH4").style.display = "none";
}