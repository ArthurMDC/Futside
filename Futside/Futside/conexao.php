<?php

$localhost = 'localhost';
$user = 'root';
$passw = "";
$banco = "futside";

// Estrutural 
$conecta = mysqli_connect($localhost, $user, $passw, $banco);

$sql = mysqli_query($conecta, "SELECT * FROM usuarios");

echo "Usando estrutural Existem " .mysqli_num_rows($sql). " registros.";



?>