<?php
/**
* Plugin Name: Sugerencias-form
* Description: Plugin para el formulario de envío de sugerencias al correo
* Version: 0.0.1
* Author: Ayrton Avalos & Sebastian Bolaños
**/
function sugerencias_form()
{
    $content = '';
    
    $content .= '<style>#sugerencias_form label {display:block; padding: 3rem 0rem 1.5rem 0rem;}</style>';
    
    $content .= '<form id="sugerencias_form" method="post" action="">';
    $content .= '<svg class="sugerencia__close" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.72 5.72a.75.75 0 011.06 0L12 10.94l5.22-5.22a.75.75 0 111.06 1.06L13.06 12l5.22 5.22a.75.75 0 11-1.06 1.06L12 13.06l-5.22 5.22a.75.75 0 01-1.06-1.06L10.94 12 5.72 6.78a.75.75 0 010-1.06z"/></svg>';
    $content .= '<label for="nombre">Nombre</label>';
    $content .= '<input required type="text" name="nombre" id="nombre" placeholder="Ingrese su nombre">';
    
    $content .= '<label for="email">Correo</label>';
    $content .= '<input  required type="text" name="email" id="email" placeholder="Ingrese su correo electrónico">';

    $content .= '<label for="sugerencia">Sugerencia</label>';
    $content .= '<textarea required name="sugerencia" id="sugerencia" cols="15" rows="5"></textarea>';
    $content .= '<input type="submit" name="sugerencias_form_submit" id="sugerencias_form_submit" onclick="submit_sugerencias_form()" value= "Enviar sugerencia" ';

    $content .= '</form>';
    return $content;

}
add_shortcode('sugerencias_form','sugerencias_form');

function add_javascript()
{
    ?>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="http://recursoswebpage.local/wp-content/plugins/sugerencias-form/submit_sugerencias_form.js"></script>
    <?php
}
add_action('wp_footer','add_javascript');
/*
add_filter('wp_mail_from', 'custom_wp_mail_from');
function custom_wp_mail_from( $original_email_address ) {
    //Make sure the email is from the same domain 
    //as your website to avoid being marked as spam.
    return 'ayrtonfidel9@gmail.com';
}*/
?>
