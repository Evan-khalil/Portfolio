$('a[href*=#]').click(function(event){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 5000);
    event.preventDefault();
});
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $('body').css('display', 'flex');
    $('body').css('flex-direction', 'column');
    $('body').css('min-height', '1920px');
    $('body').css('position', 'relative');
    $('body').css('background', 'linear-gradient(45deg, hsla(216, 100%, 17%, 1) 0%, hsla(206, 80%, 29%, 1) 47%, hsla(206, 80%, 29%, 1) 83%)');
    $('body').css('background', '-moz-linear-gradient(45deg, hsla(216, 100%, 17%, 1) 0%, hsla(206, 80%, 29%, 1) 47%, hsla(206, 80%, 29%, 1) 83%)');
    $('body').css('background', '-webkit-linear-gradient(45deg, hsla(216, 100%, 17%, 1) 0%, hsla(206, 80%, 29%, 1) 47%, hsla(206, 80%, 29%, 1) 83%)');
    $('body').css('background-attachment', 'fixed');

 }