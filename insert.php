<?php

session_start();






$conexion = mysqli_connect("bhwxogflcwhuadpy4ooh-mysql.services.clever-cloud.com", 
"udhxiuzvhzehplm6", 
"royV0d43SkwT1IgSX7zo", 
"bhwxogflcwhuadpy4ooh");

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$username = $_POST['username'];
$password = $_POST['password'];
$mail = $_POST['mail'];




$insertar = "INSERT INTO users (NOMBRE, APELLIDO, USERNAME, MAIL, PASS) 
VALUES ('$nombre', '$apellido', '$username', '$mail', '$password')";

$resultado = mysqli_query($conexion, $insertar);

if($resultado){

    $_SESSION['message'] = 'Persona guardada de forma correcta';
    echo "<script>alert('Usuario registrado con exito');
            
          </script>";
}else{
    echo "<script>alert('Error al registrar usuario');</script>";
}

session_abort();

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <title>W3.CSS</title>
    <meta charset="UTF8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="estilo/index.css">
    <link rel="stylesheet" href="estilo/index-cuerpo.css">
   
    <script src="register.js"></script>
    <script src="firebase.js"></script>
</head>

		<header>
                <!--background del header-->
        			<!-- Page Content -->
		
  				
        <img id="hamburguesa" src="logo/menu1.png" onclick="w3_open()"></img>
                <!-- Sidebar -->
        <div class="w3-overlay" onclick="w3_close()" style="cursor:pointer" id="myOverlay">
        </div>
        
        <div class="w3-sidebar w3-bar-block w3-animate-left" style="display:none;z-index:5" id="mySidebar">
            	
        	<img id="alexis-sidebar" src="logo/LOGOb.png"></img>
                   	
                 <div id="letes">
                    <div class="scroll-menu-desplegable">
                        
                                          
                        <a href="acciones/torneado.html" class="w3-buttn">
                            Ingresar
                        </a>
                        <a href="register.html" class="w3-buttn">
                            Registrarme
                        </a>
                        <a href="acciones/fresado.html" class="w3-buttn">
                            Recuperar contraseña
                        </a>
                        <a href="acciones/fresado.html" class="w3-buttn">
                            Recuperar usuario
                        </a>
                        <a href="acciones/fresado.html" class="w3-buttn">
                            Ajuste
                        </a>
                        <a href="acciones/fresado.html" class="w3-buttn">
                            Ayuda
                        </a>
                        <a onClick="w3_close()" class=" w3-buttn cerrar-menu">
                        	Cerrar menu
                        </a>
                     
                    </div>  
                 </div>        
                 
                 <!-- redes sociales -->
                 <div id="social">
                                        
                 	
                    	<img class="facebook" onClick="face" src="backround/f.png"></img>
                 	
                                    
                    
                    	<img  class="linkedin"  src="backround/in.png"></img>
                    
                                    
                    
                    	<img  class="twitter" src= "backround/t.png"></img>
                    
                                    <!--Fin redes sociales -->
                      Copyright © All Rights Reserved.
                                       
                 </div>	
                                        
            
        	</div> 
            <a href="index.html">                   
            	<img id="frases" src="logo/Nombre-IronApp.png"></img>
            </a>
            <a href="index.html">
                <img id="casa" src="img/imagenes/casa1.png"></img>
            </a>    
		</header>
		


</head>

<body>



<section>
	<div class="backgroung">
    	
        <div class="cuerpo">

        <br>
        <p> Usuario creado exitosamente </p>

        <a href="index.html">
            <div>
                <input type="submit" id="login" value="Login" >
            </div>
        </a>
            
        </div>

        

        
    </div>
</section>
</body>
   <footer>
    	<img id="alexis" src="logo/LOGOb.png"></img>
   </footer>
</body>
</html>

