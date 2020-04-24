$(document).ready(function() {
    $('.trigger').click(function() {
      var value = $(this).attr('data-filter');
      if (value == 'all') {
        $('.filter').show('1000');
      } else {
        $('.filter').not('.'+value).hide('1000');
        $('.filter').filter('.'+value).show('1000');
      }
      $(document).on('click', '.trigger', function () {
        $('.trigger').removeClass('active');
        $(this).addClass('active');
      });
    })
  })

  $(function(){
    $('.js-modal-open').each(function(){
        $(this).on('click',function(){
            var target = $(this).data('target');
            var modal = document.getElementById(target);
            $(modal).fadeIn();
            return false;
        });
    });
    $('.js-modal-close').on('click',function(){
        $('.js-modal').fadeOut();
        return false;
    }); 
});