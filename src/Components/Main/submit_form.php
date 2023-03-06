<?php

if($_POST["email"]){
    mail("sneakynoodles@gmail.com","subject line",$_POST["email"]."From: sneakynoodles@gmail.com");
}

?>
  