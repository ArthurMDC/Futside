<?php

$localhost = 'localhost';
$user = 'root';
$passw = "";
$banco = "futside";

// orientada a objetos com o pdo
$pdo = new PDO("mysql:dbname=".$banco."; host=".$localhost, $user, $passw);
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql = $pdo->query("SELECT * FROM usuarios");
$sql->execute();

echo "Usando orientada a objetos com o PDO Existem ". $sql->rowCount(). " registros.";

?>