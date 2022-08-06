<?php
function rec_theme_support()
{
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
}

add_action('after_setup_theme','rec_theme_support');

function rec_assets()
{
    wp_register_style(
        "google-fonts",
        "https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap",
        array(),
        false,
        'all'
    );
    wp_register_style(
        "fontawesome",
        "https://site-assets.fontawesome.com/releases/v6.1.1/css/all.css",
        array(),
        false,
        'all'
    );
    wp_register_style(
        "cdn-fontawesome",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.css",
        array(),
        false,
        'all'
    );
    wp_enqueue_style(
        "estilos",
        get_template_directory_uri() . "/assets/css/styles.css",
        array("google-fonts", "fontawesome", "cdn-fontawesome")
    );
    wp_enqueue_style(
        "media-mobile", 
        get_template_directory_uri()."/assets/css/mobile.css", 
        array(),
        false,
        '(max-width: 425px)'
    );
    wp_enqueue_style(
        "media-laptop", 
        get_template_directory_uri()."/assets/css/laptop.css", 
        array(),
        false,
        '(min-width: 769px)'
    );

    wp_enqueue_script(
        "webpage-js",
        get_template_directory_uri() . "/assets/js/script.js",
        array(),
        false,
        true
    );
}

add_action("wp_enqueue_scripts", "rec_assets");

function rec_add_menus()
{
    register_nav_menus(
        array(
            'menu-principal' => "Menu principal",
            'menu-responsive' => "Menu responsive"
        )
    );
}

add_action("after_setup_theme", "rec_add_menus");
/*
// funcion para redireccionar ala front page si se pulsa en el boton de inicio
function default_page(){
    $site = get_the_title();
    if($site == "Inicio"){
        exit( wp_redirect("http://recursoswebpage.local"));
    }
}

add_action('template_redirect', 'default_page');*/