<?php get_header(); ?>
    <main>
    <div id="main">
        <header>
            <div class="card-presentation">
                <h3>Facultad de Ciencias</h3>
                <p>Ingeniería Ambiental</p>
            </div>
            <?php
            echo do_shortcode('[smartslider3 slider="2"]');
            ?>
        </header>
            <section id="video-presentation">
                <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FEspoch.edu.ec%2Fvideos%2F298731931761297%2F&show_text=false&width=560&t=0" width="560" height="314" 
                    style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
            </section>
            <section id="news">
                <div class="news__title">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            class="bi bi-star-fill" viewBox="0 0 16 16">
                            <path
                                d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                        <h2>Noticias</h2>
                    </div>
                    <hr>
                </div>
                <?php 
                    $args = array(
                        'post_type' => 'post',
                        'posts_per_page' => 3
                    );
    
                    $_posts = new WP_Query($args);
                    
                    if($_posts->have_posts()){
                        while($_posts->have_posts()) {
                            $_posts->the_post();
                            get_template_part('template-parts/content','archive');
                        } 
                    }
                ?>
                <div class="news__link">
                    <a href="#">Ver más Noticias</a>
                </div>
            </section>
            <section id="accesos-directos">
                <div class="accesos-directos_title">
                    <h2>Accesos Directos</h2>
                </div>
                <div class="accesos-directos_container">
                    <ul id="menu-accesos-directos">
                        <li><a href="https://www.espoch.edu.ec/index.php/calendario.html" target="_blank"><i class="fa-solid fa-calendar-days accesso-directo_link"></i>Calendario académico</a></li>
                        <li><a href="http://biblioteca.espoch.edu.ec" target="_blank"><i class="fa-solid fa-book-open-cover accesso-directo_link"></i>Biblioteca</a></li>
                        <li><a href="https://elearning.espoch.edu.ec" target="_blank"><i class="fa-solid fa-desktop accesso-directo_link"></i></i>Aula Virtual</a></li>
                        <li><a href="https://loginsai.espoch.edu.ec" target="_blank"><i class="fa-solid fa-graduation-cap accesso-directo_link"></i>Sistema Académico</a></li>
                    </ul>
                </div>
            </section>
    </div>
    </main>
<?php get_footer(); ?>