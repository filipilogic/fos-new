jQuery(document).ready(function ($) {
        
        // Blog Main Carousel
        $('.blog-main-container-top-posts').flickity({
          // options
          cellAlign: 'left',
          contain: true,
          pageDots: false,
          prevNextButtons: true,
          freeScroll: true,
          wrapAround: true,
          autoPlay: false,
          selectedAttraction: 0.009
        });

        $('.carousel-previous-button').click(function() {
          // Find the closest common ancestor
          var commonAncestor = $(this).closest('.container');
      
          // Find the element with class flickity-prev-next-button.previous within the common ancestor and click on it
          commonAncestor.find('.flickity-prev-next-button.previous').click();
        });
      
        $('.carousel-next-button').click(function() {
          // Find the closest common ancestor
          var commonAncestor = $(this).closest('.container');
      
          // Find the element with class flickity-prev-next-button.previous within the common ancestor and click on it
          commonAncestor.find('.flickity-prev-next-button.next').click();
        });

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
