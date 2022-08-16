<footer>
        <div id="container-footer">
                <div id="social-networks">
                        <h2>Síguenos en Redes Sociales</h2>  
                        <a href="https://www.facebook.com/facultadcienciasespochoficial" target="_blank">
                                <img class="btn." src="<?php echo get_template_directory_uri(); ?>/assets/icons/facebook_logo.svg" alt="logo de facebook">
                        </a>
                        <a href="https://twitter.com/fcienciasespoch" target="_blank">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/twitter_logo.svg" alt="logo de facebook">
                        </a>
                </div>
                <div id= "contacto">
                        <h2>Contacto</h2>
                        <div class="footer-inf">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/telephone-icon.svg" alt="logo de telefono">
                                <p>0986825637</p>
                        </div>
                        <div class="footer-inf">
                                <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/boss-icon.svg" alt="logo de coordinador">
                                <p>Ing.Andres Beltrán - Coordinador de Carrera</p>
                        </div>
                        <div class="footer-inf">
                        <img src="<?php echo get_template_directory_uri(); ?>/assets/icons/gmail-icon.svg" alt="logo de gmail">
                        <a href="andres.beltran@espoch.edu.ec" target="_blank">andres.beltran@espoch.edu.ec</a>
                        </div>
                        
                </div>
                <div id= "ubicacion">
                        <h2>Ubicación</h2>
                        <p>Panamericana Sur km 1 1/2, Riobamba-Ecuador</p>
                        <p>Edificio de Facultad de Ciencias, 2do. Piso</p>
                        <a href="" target="_blank">Ubicación en Google Maps</a> 
                </div>
        </div>
        <div id="contenido">
                <p>Ingeniería Ambiental - Facultad de Ciencias - ESPOCH
                &copy;Derechos Reservados 2022</p>
                <p>Autores: Sebastian Bolaños & Ayrton Avalos </p>
        </div>
        <div id="sugerencia-content">
                <svg class="sugerencia__icon" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" mirror-in-rtl="true">
                        <path d="M4.1 2h-.2A2.906 2.906 0 0 0 1 4.9v1.2A2.906 2.906 0 0 0 3.9 9h.2A2.906 2.906 0 0 0 7 6.1V4.9A2.906 2.906 0 0 0 4.1 2zM4 10a4.012 4.012 0 0 0-4 4v2.667a1.326 1.326 0 0 0 1.333 1.324l5.333.01A1.337 1.337 0 0 0 8 16.667V14a4.01 4.01 0 0 0-4-4zM18 1v4a1 1 0 0 1-1 1h-3.99l-1.19 1.88a.47.47 0 0 1-.32.12.538.538 0 0 1-.21-.05.493.493 0 0 1-.29-.45V6h-1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1z"/>
                </svg>
                <button class="sugerencia__boton">Sugerencias</button>
                <?php
                        echo do_shortcode('[sugerencias_form]');
                ?>
        </div>
</footer>
<?php wp_footer(); ?>
</body>
</html>