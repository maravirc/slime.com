$(document).ready(function() {
    
    $('.icono-subir').click(function(){
        // alert("hola");
        $('body,html').animate({
            scrollTop: '0px'
        },300)
    });

    $(window).scroll(function(){
  if( $(this).scrollTop()> 0 ){
    //   alert("hola")
   $('.icono-subir').slideDown(300);
  }else{
      $('.icono-subir').slideUp(300);
  }
    });
})