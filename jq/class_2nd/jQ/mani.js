$(document).ready(function(){



    // ================Query KeyboardEvents start===============
        $('body').keydown(function() {
            $('.box2').css('background','red');
            $(this).css('background','#aaa')
        })
        $('body').keypress(function() {
            $('.box2').css('background','#ccc');
            $(this).css('background','green');
        })
        $('body').keyup(function() {
            $(this).css('background','#117851');
        })

    //================ mouse events start ===================
        $('.box1').click(function(){
            $(this).css('background','red');
        })

        $('h2').dblclick(function() {
            $('.box1').css('background','pink')
        })

        $('.box1').contextmenu(function() {
            $(this).css('background','blue');
        })

        $('.box1').mouseenter(function() {
            $(this).css('background','lightblue');
        })

        $('.box1').mouseleave(function() {
            $(this).css('background','gray');
        })

        $('.box1').mousemove(function() {
            $(this).css('border','5px solid red')
        })

        $('.box1').mouseout(function() {
            $(this).css('padding','20px')
        })


         //=============== Form Event strate =======================
         $('#name, #email, #select').focus(function() {
            $(this).css('background','yellow')
        })

        $('#name, #email, #select').blur(function() {
            $(this).css('background','red')
        })

       $('#name, #email').select(function() {
           $(this).css('background','ore')
       })
       $('#select').change(function() {
           $(this).css('background','blue')
       })
       $('#form').submit(function(){
        alert('Submit is succesfully');
    })
 //=============== window Event strate =======================
    $(window).resize(function() {
        console.log('Your iwndow resixe');
    })
     $(window).scroll(function() {
        console.log('Your window scrolling');
    })



      //=============== jQuery get methods strate =======================
     
      var getValue = $('.a').text();
      console.log(getValue);
      var get = $('.a').html();
      console.log(get);
      var artt = $('.box2').attr('class');
       console.log(artt);
        var artt1 = $('#select').val();
       console.log(artt1);
       



    })