<?php

$db_host = getenv('DB_HOST');
$db_user = getenv('DB_USER');
$db_name = getenv('DB_NAME');
$db_password = getenv('DB_PASSWORD');
$db_port = getenv('DB_PORT');

$conn = new mysqli($db_host,$db_user,$db_password,$db_name,$db_port);

if (!$conn) {
    die("Connection failed");
}

if(empty($_POST['name'])){
    die('wtf man');
}

$query = $conn->prepare("INSERT INTO InvitedPeople (name), VALUES (?)");
$query->bind_param("s",$_POST['name']);

$query->execute();
$query->close();
$conn->close();
?>