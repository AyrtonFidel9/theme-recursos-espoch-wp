<?php
$site = get_the_title();
get_header();
?>
<main class="page-content-news">
    <div class="news-search">
        <?php dynamic_sidebar( 'smartslider_area_1' ); ?>
    </div>
    <section id="news">
        <h2>Noticias</h2>
        <?php
        if (have_posts()) {
            while (have_posts()) {
                the_post();
                get_template_part('template-parts/content', 'archive');
            }
        }
        ?>
        <div class="pagination">
            <?php  
                $pagination = paginate_links(array(
                'base' => get_pagenum_link(1) . '%_%',
                'prev_text'    => __('« Anterior'),
                'next_text'    => __('Siguiente »'),
                'type'               => 'array'
                ));
            wp_reset_postdata();?>
            <?php if(!empty($pagination)):?>
                <ul class="pagination__list">
                    <?php foreach ( $pagination as $key => $page_link ) : ?>
                        <li class="list__item<?php if ( strpos( $page_link, 'current' ) !== false ) { echo ' active'; } ?>">
                            <?php echo $page_link ?>
                        </li>
                    <?php endforeach?>
                </ul>
            <?php endif?>
        </div>
    </section>
</main>

<?php get_footer(); ?>