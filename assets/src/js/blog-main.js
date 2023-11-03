jQuery(document).ready(function ($) {

        $('.blog-main-container-middle-posts').on('click', '.pagination a', function(e) {
          e.preventDefault();
          var link = $(this).attr('href');
  
          $.ajax({
              type: 'GET',
              url: link,
              success: function(response) {
                  var $html = $(response);
                  var $newContent = $html.find('.blog-main-container-middle-posts').html();
                  $('.blog-main-container-middle-posts').html($newContent);
              }
          });
      });

      $('.blog-main-container-bottom-posts').on('click', '.pagination a', function(e) {
        e.preventDefault();
        var link = $(this).attr('href');

        $.ajax({
            type: 'GET',
            url: link,
            success: function(response) {
                var $html = $(response);
                var $newContent = $html.find('.blog-main-container-bottom-posts').html();
                $('.blog-main-container-bottom-posts').html($newContent);
            }
        });
    });
      
});
