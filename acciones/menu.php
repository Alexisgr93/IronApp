<!DOCTYPE html>
<html lang="es">
<head>
    <title>W3.CSS</title>
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="../estilo/index.css">
    <link rel="stylesheet" href="../estilo/acciones-css/estilo-body.css">
   
   <script src="../js/index.js"></script>
</head>

		<header>
                <!--background del header-->
        			<!-- Page Content -->
		
  				
        <img id="hamburguesa" src="../logo/menu1.png" onclick="w3_open()"></img>
                <!-- Sidebar -->
        <div class="w3-overlay" onclick="w3_close()" style="cursor:pointer" id="myOverlay">
        </div>
        
        <div class="w3-sidebar w3-bar-block w3-animate-left" style="display:none;z-index:5" id="mySidebar">
            	
        	<img id="alexis-sidebar" src="../logo/LOGOb.png"></img>
                   	
                 <div id="letes">
                    <div class="scroll-menu-desplegable">
                        
                                         
                        <a href="seleccion/Torneado.html" class="w3-buttn">
                            Torneado
                        </a>
                        <a href="seleccion/Fresado.html" class="w3-buttn">
                            Fresado
                        </a>
                        <a href="seleccion/Taladrado.html" class="w3-buttn">
                            Taladrado
                        </a>
                        <a href="seleccion/Roscado.html" class="w3-buttn">
                            Roscado
                        </a>
						<a href="menu.html"  class="w3-buttn">
                            Menu
                        </a> 
                        <a class="w3-buttn">
                            Ajuste
                        </a>
                        <a  class="w3-buttn">
                            Ayuda
                        </a>
                        <a onClick="w3_close()" class=" w3-buttn cerrar-menu">
                        	Cerrar menu
                        </a>
                     
                    </div>  
                 </div>        
                 
                 <!-- redes sociales -->
                 <div id="social">
                                        
                 	
                    	<img class="facebook" onClick="face" src="../backround/f.png"></img>
                 	
                                    
                    
                    	<img  class="linkedin"  src="../backround/in.png"></img>
                    
                                    
                    
                    	<img  class="twitter" src= "../backround/t.png"></img>
                    
                                    <!--Fin redes sociales -->
                      Copyright © All Rights Reserved.
                                       
                 </div>	
                                        
            
        	</div> 
            <a>                   
            	<img id="frases" src="../logo/Nombre-IronApp.png"></img>
            </a>
            <a>
                <img id="casa" src="../img/imagenes/casa1.png"></img>
            </a>    
		</header>
		


</head>

<body>



<section>
	<div class="backgroung">
    	
        	
            	<a href="../acciones/seleccion/Torneado.html">
                	<img id="torneado" src="../img/imagenes/Torneado-Principal.png">
                </a>
            
            
            	<a href="../acciones/seleccion/Taladrado.html">
                	<img id="taladrado" src="../img/imagenes/Taladrado-Principal.png">
                </a>
            
            	<a href="../acciones/seleccion/Fresado.html">
                	<img id="fresado" src="../img/imagenes/Fresado-Principal1.png">
                </a>
            
            	<a href="../acciones/seleccion/Roscado.html">
                	<img id="roscado" src="../img/imagenes/Roscado-Principal.png">
                </a>
            
        <div>
 
</section>
</body>
   <footer>
    	<img id="alexis" src="../logo/LOGOb.png"></img>
   </footer>
</html>
