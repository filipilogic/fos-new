jQuery(document).ready(function ($) {

      $('.archive-main-content-posts').on('click', '.pagination a', function(e) {
        e.preventDefault();
        var link = $(this).attr('href');

        $.ajax({
            type: 'GET',
            url: link,
            success: function(response) {
                var $html = $(response);
                var $newContent = $html.find('.archive-main-content-posts').html();
                $('.archive-main-content-posts').html($newContent);
            }
        });
    });

    $(document).on('click', '.archive-main-content-sidebar-category-heading', function (e) {
      $('.wp-block-categories-list').toggle(300);
      $('.archive-main-content-sidebar').toggleClass('active-list');
    });
      
});
