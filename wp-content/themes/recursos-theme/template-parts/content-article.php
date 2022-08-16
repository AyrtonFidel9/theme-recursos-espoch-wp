<div class="new-content">
    <div class="new-title">
        <h2>
            <?php the_title();?>
        </h2>
    </div>
    <div class="content__metadata">
        <span class="meta-fecha">
            <img src="https://img.icons8.com/ios/50/000000/calendar-13.png"/>            
            <?php the_date(); ?>
        </span>
        <span class="meta-autor">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/person-male.png"/>
            <?php the_author(); ?>
        </span>
        <?php
            echo the_tags(
                '<span class="meta-tag"><img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-tag-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png"/>',
                '</span><span class="meta-tag"><img src="https://img.icons8.com/external-inkubators-detailed-outline-inkubators/25/000000/external-tag-ecommerce-user-interface-inkubators-detailed-outline-inkubators.png"/>',
                '</span>');
        ?>
    </div>
    <?php 
        the_content();
    ?>

</div>