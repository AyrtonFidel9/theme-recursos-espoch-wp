<?php 
$site = get_the_title();
get_header(); 
?>
<main class="page-content">
    <section id="news">
        <?php 
            if(have_posts()){
                while(have_posts()) {
                    the_post();
                    get_template_part('template-parts/content','archive');
                } 
            }
        ?>
    </section>
</main>

<?php get_footer(); ?>