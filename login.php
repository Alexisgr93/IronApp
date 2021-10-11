<?php

session_start();

$conexion = mysqli_connect("bhwxogflcwhuadpy4ooh-mysql.services.clever-cloud.com", 
"udhxiuzvhzehplm6", 
"royV0d43SkwT1IgSX7zo", 
"bhwxogflcwhuadpy4ooh");

//$sql = "SELECT * FROM `users` WHERE `USERNAME`= 'sergioRubio' and `PASS` = 'qwerty'";

if(!empty($_POST['usuario']) && !empty($_POST['password'])){
    $records = $conexion->prepare('SELECT * FROM `users` WHERE `USERNAME` = :usuario and `PASS` = :password');
    $records->bindParam(':usuario', $_POST['usuario']);
    $records->bindParam(':password', $_POST['password']);
    $records->execute();
    $results = $records->fetch(PDO::FETCH_ASSOC);

    $message = '';

    if(count($results) > 0 && password_verify($_POST['password'], $results['PASS'])){
        $_SESSION['user_id'] = $results['ID'];
        header("Location: /acciones/menu.html");
    }else{
        $message = 'Usuario o contraseña incorrectos';
    }
}




session_abort();

?>
