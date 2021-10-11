<?php

$conexion = mysqli_connect("bhwxogflcwhuadpy4ooh-mysql.services.clever-cloud.com", 
"udhxiuzvhzehplm6", 
"royV0d43SkwT1IgSX7zo", 
"bhwxogflcwhuadpy4ooh");

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

session_start();
$_SESSION['usuario'] = $usuario;

$consulta = "SELECT * FROM users WHERE USERNAME = '$usuario' AND PASS = '$contrasena'";
$resultado = mysqli_query($conexion, $consulta);

$filas= mysqli_num_rows($resultado);

if($filas) {
    header("Location: ./acciones/menu.php");
} else {
    ?>
    <?php
    include 'index.html';
    ?>
    <script>
        alert("Usuario o contraseña incorrectos");
    </script>
    <?php
}
mysqli_free_result($resultado);
mysqli_close($conexion);

?>


