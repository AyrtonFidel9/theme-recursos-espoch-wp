<?php

/**
 * Plugin Name: Cards Menu Custom Block
 * Description: Plugin para crear un menu de tarjetas como bloque en Gutemberg
 * Version: 1.1.0
 * Author: Ayrton Avalos & Sebastian Bolaños
 */

 function cards_menu_custom_block_script_register()
 {
    wp_enqueue_script('card-menu-custom-block',plugin_dir_url(__FILE__).'cards-menu.js',array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-components', 'wp-editor'),true,false);
 }


 add_action('enqueue_block_editor_assets','cards_menu_custom_block_script_register');


?>