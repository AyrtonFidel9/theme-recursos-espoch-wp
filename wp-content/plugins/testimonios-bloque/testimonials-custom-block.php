<?php

/**
 * Plugin Name: Testimonios Bloque
 * Description: Plugin para agregar cards de testimonios 
 * Version: 0.0.1
 * Author: Ayrton Avalos & Sebastian Bolaños
 */

 function testimonios_recursos_custom_block_script_register()
 {
    wp_enqueue_script('testimonios-recursos-custom-block',plugin_dir_url(__FILE__).'testimonials.js',array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor'),true,false);
 }


 add_action('enqueue_block_editor_assets','testimonios_recursos_custom_block_script_register');
?>