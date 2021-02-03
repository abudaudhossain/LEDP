$(document).ready(function() {

    // $('.slideup').click(function() {
    //     $('.box').slideUp();
    // })
    $('.slideup').click(function() {
        $('.box').slideUp('slow');
    })

    
    $('.slidedown').click(function() {
        $('.box').slideDown('first');
    })

    $('.slidetoggle').click(function() {
        $('.box').slideToggle(1000);
    })
$('.slidetoggle').click(function() {
        $('.box').slideToggle(1000,function() {
            alert('Your task is complite');
        });
    })

    
})