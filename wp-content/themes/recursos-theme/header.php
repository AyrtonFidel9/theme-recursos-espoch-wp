<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
    <title>Facultad de Ciencias - Ingenieria Ambiental</title>
</head>

<body>
    <nav>
        <img class="nav__menu-icon" src="<?php echo get_template_directory_uri();?>/assets/icons/menu_icon.svg" alt="icono para abrir el menu">
        <?php
            wp_nav_menu(
                array(
                    "menu" => "menu-principal", 
                    "menu_class" => "menu__principal"
                )
            ); 
        ?>
        <img src="<?php echo get_template_directory_uri();?>/assets/images/logo-fac-recursos.jpg" alt="logo facultad de recursos naturales">
        <div class="menu-bar ocult">
            <img src="<?php echo get_template_directory_uri();?>/assets/icons/x-circle.svg" class="menu__close">
            <?php 
                wp_nav_menu(
                    array(
                        "menu" => "menu-responsive", 
                        "menu_class" => "menu__option"
                    )
                ); 
            ?>
        </div>
        
    </nav>