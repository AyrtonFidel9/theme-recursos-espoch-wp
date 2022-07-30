<article class="news__card">
    <div class="news__card-image">
        <img src="<?php the_post_thumbnail_url();?>"/>
    </div>
    <div class="news__card-content">
        <h3><?php the_title(); ?></h3>
        <p>
            <?php
            the_excerpt();
            ?>
        </p>
        <a href="<?php the_permalink(); ?>">Leer más</a>
    </div>
</article>