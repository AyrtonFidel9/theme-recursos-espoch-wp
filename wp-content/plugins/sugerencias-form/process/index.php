<?php
    header('Access-Control-Allow-Origin: *');
    $path = preg_replace('/wp-content.*$/','',__DIR__);
    require_once($path."wp-load.php");

    if(isset($_POST['sugerenciasFormSubmit']) && $_POST['sugerenciasFormSubmit'] == "1")
    {
        $nombre = sanitize_text_field($_POST['nombre']);
        $email = sanitize_text_field($_POST['email']);
        $sugerencia = sanitize_textarea_field($_POST['sugerencia']);

        $to = 'ayrton.avalos@espoch.edu.ec';
        $subject = 'Sugerencias';
        $message = '';

        $message .= 'Nombre:'.$nombre.' <br />';
        $message .= 'Email:'.$email.' <br />';
        $sugerencia = wpautop($sugerencia);
        $sugerencia= str_replace("<p>","",$sugerencia);
        $sugerencia = str_replace("</p>","<br /><br />",$sugerencia);

        $message .= 'Sugerencias:<br />'.$sugerencia.'<br /><br />';

        $headers = array('Content-Type: text/html; charset=UTF-8');

        wp_mail($to,$subject,$message);
        
        $return = [];
        $return['success'] = 1;
        $return['message'] = 'Su sugerencia ha sido enviada';

        echo json_encode($return);
    }

?>