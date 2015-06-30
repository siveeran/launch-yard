$(document).ready(function(){
    if( $(window).width()>$(window).height() && $(window).width()>768  ){
        var newHeight = $(window).height();
        // console.log(newHeight);
        $('.getHeight').css('height', newHeight);
        $('.navPoint').css('display','block');
        $('.freeLandingPage .inviteBox ').css({
            position: 'absolute',
            bottom: 0
        });

    var $root = $('html, body');
    $('#learnMore, .about, .location,.faqsection_tab').click(function() {
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        return false;

    });
    }
    $('.recommend li').hover(
        function(){
            $('.recommend li[class="active"]').removeClass('active');
            $(this).addClass('active')
        },
        function(){ $(this).removeClass('active') }
    );
    $('#getFocus').click(function(){
        $('#getInTouch ').find('input').focus();
    })
});
