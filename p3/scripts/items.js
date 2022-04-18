//jquery

$(document).ready(function() {

    /* framwork */
  
    $('.item').click(function() {
      $(this).addClass("selected");
      $(this).siblings().removeClass("selected");
      $(this).children('.item-arrow').hide();
      $(this).children('.item-arrow-blue').show();
      $('.column-1').children('.column-2-holder').show();
      $(this).siblings().children('.item-arrow').show();
      $(this).siblings().children('.item-arrow-blue').hide();
    });
  
    $('.item-icon-folder, .item-icon-normal').on('dragstart', function(event) { event.preventDefault(); });
  
    /* column-1 */
  
    /* nations */
  
    $('#item-1-nations').click(function(){
        $('#item-1-nations').removeClass("old-selected");
        $('#item-1-nations').children(".item-arrow-grey").hide();
        $('#item-1-nations').siblings().removeClass("old-selected");
        $('#item-1-nations').siblings().children(".item-arrow-grey").hide();
        $('.folder-nations').show();
        $('.folder-nations').siblings().hide();
        $('.folder-nations').children().removeClass("selected");
        $('.folder-nations').children().removeClass("old-selected");
        $('.folder-nations').children().children(".item-arrow-grey").hide();
        $('.folder-nations').children().children(".item-arrow-blue").hide();
        $('.folder-nations').children().children(".item-arrow").show();
    });
  
    /* about */
  
    $('#item-1-about').click(function(){
        $('#item-1-about').removeClass("old-selected");
        $('#item-1-about').children(".item-arrow-grey").hide();
        $('#item-1-about').siblings().removeClass("old-selected");
        $('#item-1-about').siblings().children(".item-arrow-grey").hide();
        $('.folder-about').show();
        $('.folder-about').siblings().hide();
        $('.folder-about').children().removeClass("selected");
        $('.folder-about').children().removeClass("old-selected");
        $('.folder-about').children().children(".item-arrow-grey").hide();
        $('.folder-about').children().children(".item-arrow-blue").hide();
        $('.folder-about').children().children(".item-arrow").show();
    });
  
    /* tribes */
  
  
    $('#item-1-tribes').click(function(){
        $('#item-1-tribes').removeClass("old-selected");
        $('#item-1-tribes').children(".item-arrow-grey").hide();
        $('#item-1-tribes').siblings().removeClass("old-selected");
        $('#item-1-tribes').siblings().children(".item-arrow-grey").hide();
        $('.folder-tribes').show();
        $('.folder-tribes').siblings().hide();
        $('.folder-tribes').children().removeClass("selected");
        $('.folder-tribes').children().removeClass("old-selected");
        $('.folder-tribes').children().children(".item-arrow-grey").hide();
        $('.folder-tribes').children().children(".item-arrow-blue").hide();
        $('.folder-tribes').children().children(".item-arrow").show();
    });
  
    /* shop */
  
    $('#item-1-shop').click(function(){
        $('#item-1-shop').removeClass("old-selected");
        $('#item-1-shop').children(".item-arrow-grey").hide();
        $('#item-1-shop').siblings().removeClass("old-selected");
        $('#item-1-shop').siblings().children(".item-arrow-grey").hide();
        $('.folder-shop').show();
        $('.folder-shop').siblings().hide();
        $('.folder-shop').children().removeClass("selected");
        $('.folder-shop').children().removeClass("old-selected");
        $('.folder-shop').children().children(".item-arrow-grey").hide();
        $('.folder-shop').children().children(".item-arrow-blue").hide();
        $('.folder-shop').children().children(".item-arrow").show();
    });
  
    /* press */
  
    $('#item-1-press').click(function(){
        $('#item-1-press').removeClass("old-selected");
        $('#item-1-press').children(".item-arrow-grey").hide();
        $('#item-1-press').siblings().removeClass("old-selected");
        $('#item-1-press').siblings().children(".item-arrow-grey").hide();
        $('.folder-press').show();
        $('.folder-press').siblings().hide();
        $('.folder-press').children().removeClass("selected");
        $('.folder-press').children().removeClass("old-selected");
        $('.folder-press').children().children(".item-arrow-grey").hide();
        $('.folder-press').children().children(".item-arrow-blue").hide();
        $('.folder-press').children().children(".item-arrow").show();
    });
  
    /* awards */
  
    $('#item-1-awards').click(function(){
        $('#item-1-awards').removeClass("old-selected");
        $('#item-1-awards').children(".item-arrow-grey").hide();
        $('#item-1-awards').siblings().removeClass("old-selected");
        $('#item-1-awards').siblings().children(".item-arrow-grey").hide();
        $('.folder-awards').show();
        $('.folder-awards').siblings().hide();
        $('.folder-awards').children().removeClass("selected");
        $('.folder-awards').children().removeClass("old-selected");
        $('.folder-awards').children().children(".item-arrow-grey").hide();
        $('.folder-awards').children().children(".item-arrow-blue").hide();
        $('.folder-awards').children().children(".item-arrow").show();
    });
  
    /* Column-2 */
  
    /* nations */
  
    var container = $('.folder-nations');
    var path = $('#item-1-nations');
    container.click(function(){
      path.removeClass("selected");
      path.addClass("old-selected");
      path.children(".item-arrow-blue").hide();
      path.children(".item-arrow").hide();
      path.children(".item-arrow-grey").show();
    });
  
    /* china */
  
    $('#item-2-china').click(function(){
        $('.column-3-holder').show();
        $('.folder-china').show();
        $('.folder-china').siblings().hide();
        $('.folder-china').children().removeClass("old-selected");
        $('.folder-china').children().removeClass("selected");
        $('#item-2-china').removeClass("old-selected");
        $('#item-2-china').children(".item-arrow-grey").hide();
        $('#item-2-china').children(".item-arrow").hide();
        $('#item-2-china').siblings().removeClass("old-selected");
        $('#item-2-china').siblings().children(".item-arrow-grey").hide();
    });

     /* chile */
  
     $('#item-2-chile').click(function(){
        $('.column-3-holder').show();
        $('.folder-chile').show();
        $('.folder-chile').siblings().hide();
        $('.folder-chile').children().removeClass("old-selected");
        $('.folder-chile').children().removeClass("selected");
        $('#item-2-chile').removeClass("old-selected");
        $('#item-2-chile').children(".item-arrow-grey").hide();
        $('#item-2-chile').children(".item-arrow").hide();
        $('#item-2-chile').siblings().removeClass("old-selected");
        $('#item-2-chile').siblings().children(".item-arrow-grey").hide();
    });
  

     /* egypt */
  
     $('#item-2-egypt').click(function(){
        $('.column-3-holder').show();
        $('.folder-egypt').show();
        $('.folder-egypt').siblings().hide();
        $('.folder-egypt').children().removeClass("old-selected");
        $('.folder-egypt').children().removeClass("selected");
        $('#item-2-egypt').removeClass("old-selected");
        $('#item-2-egypt').children(".item-arrow-grey").hide();
        $('#item-2-egypt').children(".item-arrow").hide();
        $('#item-2-egypt').siblings().removeClass("old-selected");
        $('#item-2-egypt').siblings().children(".item-arrow-grey").hide();
    });

        /* france */
  
        $('#item-2-france').click(function(){
            $('.column-3-holder').show();
            $('.folder-france').show();
            $('.folder-france').siblings().hide();
            $('.folder-france').children().removeClass("old-selected");
            $('.folder-france').children().removeClass("selected");
            $('#item-2-france').removeClass("old-selected");
            $('#item-2-france').children(".item-arrow-grey").hide();
            $('#item-2-france').children(".item-arrow").hide();
            $('#item-2-france').siblings().removeClass("old-selected");
            $('#item-2-france').siblings().children(".item-arrow-grey").hide();
        });
    
    
        /* germany */
  
        $('#item-2-germany').click(function(){
            $('.column-3-holder').show();
            $('.folder-germany').show();
            $('.folder-germany').siblings().hide();
            $('.folder-germany').children().removeClass("old-selected");
            $('.folder-germany').children().removeClass("selected");
            $('#item-2-germany').removeClass("old-selected");
            $('#item-2-germany').children(".item-arrow-grey").hide();
            $('#item-2-germany').children(".item-arrow").hide();
            $('#item-2-germany').siblings().removeClass("old-selected");
            $('#item-2-germany').siblings().children(".item-arrow-grey").hide();
        });
  
          
        /* greece */
  
        $('#item-2-greece').click(function(){
            $('.column-3-holder').show();
            $('.folder-greece').show();
            $('.folder-greece').siblings().hide();
            $('.folder-greece').children().removeClass("old-selected");
            $('.folder-greece').children().removeClass("selected");
            $('#item-2-greece').removeClass("old-selected");
            $('#item-2-greece').children(".item-arrow-grey").hide();
            $('#item-2-greece').children(".item-arrow").hide();
            $('#item-2-greece').siblings().removeClass("old-selected");
            $('#item-2-greece').siblings().children(".item-arrow-grey").hide();
        });

             
        /* guatemala */
  
        $('#item-2-guatemala').click(function(){
            $('.column-3-holder').show();
            $('.folder-guatemala').show();
            $('.folder-guatemala').siblings().hide();
            $('.folder-guatemala').children().removeClass("old-selected");
            $('.folder-guatemala').children().removeClass("selected");
            $('#item-2-guatemala').removeClass("old-selected");
            $('#item-2-guatemala').children(".item-arrow-grey").hide();
            $('#item-2-guatemala').children(".item-arrow").hide();
            $('#item-2-guatemala').siblings().removeClass("old-selected");
            $('#item-2-guatemala').siblings().children(".item-arrow-grey").hide();
        });

         /* ireland */
  
         $('#item-2-ireland').click(function(){
            $('.column-3-holder').show();
            $('.folder-ireland').show();
            $('.folder-ireland').siblings().hide();
            $('.folder-ireland').children().removeClass("old-selected");
            $('.folder-ireland').children().removeClass("selected");
            $('#item-2-ireland').removeClass("old-selected");
            $('#item-2-ireland').children(".item-arrow-grey").hide();
            $('#item-2-ireland').children(".item-arrow").hide();
            $('#item-2-ireland').siblings().removeClass("old-selected");
            $('#item-2-ireland').siblings().children(".item-arrow-grey").hide();
        });

          /* italy */
  
          $('#item-2-italy').click(function(){
            $('.column-3-holder').show();
            $('.folder-italy').show();
            $('.folder-italy').siblings().hide();
            $('.folder-italy').children().removeClass("old-selected");
            $('.folder-italy').children().removeClass("selected");
            $('#item-2-italy').removeClass("old-selected");
            $('#item-2-italy').children(".item-arrow-grey").hide();
            $('#item-2-italy').children(".item-arrow").hide();
            $('#item-2-italy').siblings().removeClass("old-selected");
            $('#item-2-italy').siblings().children(".item-arrow-grey").hide();
        });

       
      
  
    /* japan */
  
    $('#item-2-japan').click(function(){
        $('.column-3-holder').show();
        $('.folder-japan').show();
        $('.folder-japan').siblings().hide();
        $('.folder-japan').children().removeClass("old-selected");
        $('.folder-japan').children().removeClass("selected");
        $('#item-2-japan').removeClass("old-selected");
        $('#item-2-japan').children(".item-arrow-grey").hide();
        $('#item-2-japan').children(".item-arrow").hide();
        $('#item-2-japan').siblings().removeClass("old-selected");
        $('#item-2-japan').siblings().children(".item-arrow-grey").hide();
    });

       /* peru */
  
       $('#item-2-peru').click(function(){
        $('.column-3-holder').show();
        $('.folder-peru').show();
        $('.folder-peru').siblings().hide();
        $('.folder-peru').children().removeClass("old-selected");
        $('.folder-peru').children().removeClass("selected");
        $('#item-2-peru').removeClass("old-selected");
        $('#item-2-peru').children(".item-arrow-grey").hide();
        $('#item-2-peru').children(".item-arrow").hide();
        $('#item-2-peru').siblings().removeClass("old-selected");
        $('#item-2-peru').siblings().children(".item-arrow-grey").hide();
    });
  

       /* sweden */
  
       $('#item-2-sweden').click(function(){
        $('.column-3-holder').show();
        $('.folder-sweden').show();
        $('.folder-sweden').siblings().hide();
        $('.folder-sweden').children().removeClass("old-selected");
        $('.folder-sweden').children().removeClass("selected");
        $('#item-2-sweden').removeClass("old-selected");
        $('#item-2-sweden').children(".item-arrow-grey").hide();
        $('#item-2-sweden').children(".item-arrow").hide();
        $('#item-2-sweden').siblings().removeClass("old-selected");
        $('#item-2-sweden').siblings().children(".item-arrow-grey").hide();
    });

        /* thailand */
  
        $('#item-2-thailand').click(function(){
            $('.column-3-holder').show();
            $('.folder-thailand').show();
            $('.folder-thailand').siblings().hide();
            $('.folder-thailand').children().removeClass("old-selected");
            $('.folder-thailand').children().removeClass("selected");
            $('#item-2-thailand').removeClass("old-selected");
            $('#item-2-thailand').children(".item-arrow-grey").hide();
            $('#item-2-thailand').children(".item-arrow").hide();
            $('#item-2-thailand').siblings().removeClass("old-selected");
            $('#item-2-thailand').siblings().children(".item-arrow-grey").hide();
        });
    
             /* ukraine */
  
             $('#item-2-ukraine').click(function(){
                $('.column-3-holder').show();
                $('.folder-ukraine').show();
                $('.folder-ukraine').siblings().hide();
                $('.folder-ukraine').children().removeClass("old-selected");
                $('.folder-ukraine').children().removeClass("selected");
                $('#item-2-ukraine').removeClass("old-selected");
                $('#item-2-ukraine').children(".item-arrow-grey").hide();
                $('#item-2-ukraine').children(".item-arrow").hide();
                $('#item-2-ukraine').siblings().removeClass("old-selected");
                $('#item-2-ukraine').siblings().children(".item-arrow-grey").hide();
            });

    
             /* usa */
  
             $('#item-2-usa').click(function(){
                $('.column-3-holder').show();
                $('.folder-usa').show();
                $('.folder-usa').siblings().hide();
                $('.folder-usa').children().removeClass("old-selected");
                $('.folder-usa').children().removeClass("selected");
                $('#item-2-usa').removeClass("old-selected");
                $('#item-2-usa').children(".item-arrow-grey").hide();
                $('#item-2-usa').children(".item-arrow").hide();
                $('#item-2-usa').siblings().removeClass("old-selected");
                $('#item-2-usa').siblings().children(".item-arrow-grey").hide();
            });

    /* africa  */
  
    $('#item-2-africa').click(function(){
        $('.column-3-holder').show();
        $('.folder-africa').show();
        $('.folder-africa').siblings().hide();
        $('.folder-africa').children().removeClass("old-selected");
        $('.folder-africa').children().removeClass("selected");
        $('#item-2-africa').removeClass("old-selected");
        $('#item-2-africa').children(".item-arrow-grey").hide();
        $('#item-2-africa').children(".item-arrow").hide();
        $('#item-2-africa').siblings().removeClass("old-selected");
        $('#item-2-africa').siblings().children(".item-arrow-grey").hide();
    });
  
    /* about */
  
    var container = $('.folder-about');
    container.click(function(){
      $('#item-1-about').removeClass("selected");
      $('#item-1-about').addClass("old-selected");
      $('#item-1-about').children(".item-arrow-blue").hide();
      $('#item-1-about').children(".item-arrow").hide();
      $('#item-1-about').children(".item-arrow-grey").show();
    });
  
  
    $('#about').dblclick(function() {
      alert("Collection by Sophie Tsang, designed by Kiara Putrilia")
    });
  
    /* Contact */
  
    var container = $('.folder-tribes');
    container.click(function(){
      $('#item-1-tribes').removeClass("selected");
      $('#item-1-tribes').addClass("old-selected");
      $('#item-1-tribes').children(".item-arrow-blue").hide();
      $('#item-1-tribes').children(".item-arrow").hide();
      $('#item-1-tribes').children(".item-arrow-grey").show();
    });
  
  
  
    /* celtics */
  
    $('#item-2-celtics').click(function(){
        $('.column-3-holder').show();
        $('.folder-celtics').show();
        $('.folder-celtics').siblings().hide();
        $('.folder-celtics').children().removeClass("old-selected");
        $('.folder-celtics').children().removeClass("selected");
        $('#item-2-celtics').removeClass("old-selected");
        $('#item-2-celtics').children(".item-arrow-grey").hide();
        $('#item-2-celtics').children(".item-arrow").hide();
        $('#item-2-celtics').siblings().removeClass("old-selected");
        $('#item-2-celtics').siblings().children(".item-arrow-grey").hide();
    });
  
    /* vikings - vince  mckelvie */
  
    $('#item-2-vince').click(function(){
        $('.column-3-holder').show();
        $('.folder-vince').show();
        $('.folder-vince').siblings().hide();
        $('.folder-vince').children().removeClass("old-selected");
        $('.folder-vince').children().removeClass("selected");
        $('#item-2-vince').removeClass("old-selected");
        $('#item-2-vince').children(".item-arrow-grey").hide();
        $('#item-2-vince').children(".item-arrow").hide();
        $('#item-2-vince').siblings().removeClass("old-selected");
        $('#item-2-vince').siblings().children(".item-arrow-grey").hide();
    });
  
    /* theo bark */
  
    $('#item-2-theo').click(function(){
        $('.column-3-holder').show();
        $('.folder-theo').show();
        $('.folder-theo').siblings().hide();
        $('.folder-theo').children().removeClass("old-selected");
        $('.folder-theo').children().removeClass("selected");
        $('#item-2-theo').removeClass("old-selected");
        $('#item-2-theo').children(".item-arrow-grey").hide();
        $('#item-2-theo').children(".item-arrow").hide();
        $('#item-2-theo').siblings().removeClass("old-selected");
        $('#item-2-theo').siblings().children(".item-arrow-grey").hide();
    });
  
    /* corey houck */
  
    $('#item-2-corey').click(function(){
        $('.column-3-holder').show();
        $('.folder-corey').show();
        $('.folder-corey').siblings().hide();
        $('.folder-corey').children().removeClass("old-selected");
        $('.folder-corey').children().removeClass("selected");
        $('#item-2-corey').removeClass("old-selected");
        $('#item-2-corey').children(".item-arrow-grey").hide();
        $('#item-2-corey').children(".item-arrow").hide();
        $('#item-2-corey').siblings().removeClass("old-selected");
        $('#item-2-corey').siblings().children(".item-arrow-grey").hide();
    });
  
    /* shop */
  
    var container = $('.folder-shop');
    container.click(function(){
      $('#item-1-shop').removeClass("selected");
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
    });
  
    /* money phone */
  
    $('#item-2-money-phone').click(function(){
        $('.column-3-holder').show();
        $('.folder-money-phone').show();
        $('.folder-money-phone').siblings().hide();
        $('.folder-money-phone').children().removeClass("old-selected");
        $('.folder-money-phone').children().removeClass("selected");
        $('#item-2-money-phone').removeClass("old-selected");
        $('#item-2-money-phone').children(".item-arrow-grey").hide();
        $('#item-2-money-phone').children(".item-arrow").hide();
        $('#item-2-money-phone').siblings().removeClass("old-selected");
        $('#item-2-money-phone').siblings().children(".item-arrow-grey").hide();
    });
  
    /* usb */
  
    $('#item-2-usb').click(function(){
        $('.column-3-holder').show();
        $('.folder-usb').show();
        $('.folder-usb').siblings().hide();
        $('.folder-usb').children().removeClass("old-selected");
        $('.folder-usb').children().removeClass("selected");
        $('#item-2-usb').removeClass("old-selected");
        $('#item-2-usb').children(".item-arrow-grey").hide();
        $('#item-2-usb').children(".item-arrow").hide();
        $('#item-2-usb').siblings().removeClass("old-selected");
        $('#item-2-usb').siblings().children(".item-arrow-grey").hide();
    });
  
    /* squad hat */
  
    $('#item-2-squad-hats').click(function(){
        $('.column-3-holder').show();
        $('.folder-squad-hats').show();
        $('.folder-squad-hats').siblings().hide();
        $('.folder-squad-hats').children().removeClass("old-selected");
        $('.folder-squad-hats').children().removeClass("selected");
        $('#item-2-squad-hats').removeClass("old-selected");
        $('#item-2-squad-hats').children(".item-arrow-grey").hide();
        $('#item-2-squad-hats').children(".item-arrow").hide();
        $('#item-2-squad-hats').siblings().removeClass("old-selected");
        $('#item-2-squad-hats').siblings().children(".item-arrow-grey").hide();
    });
  
    /* squad hoodie */
  
    $('#item-2-squad-hoodie').click(function(){
        $('.column-3-holder').show();
        $('.folder-squad-hoodie').show();
        $('.folder-squad-hoodie').siblings().hide();
        $('.folder-squad-hoodie').children().removeClass("old-selected");
        $('.folder-squad-hoodie').children().removeClass("selected");
        $('#item-2-squad-hoodie').removeClass("old-selected");
        $('#item-2-squad-hoodie').children(".item-arrow-grey").hide();
        $('#item-2-squad-hoodie').children(".item-arrow").hide();
        $('#item-2-squad-hoodie').siblings().removeClass("old-selected");
        $('#item-2-squad-hoodie').siblings().children(".item-arrow-grey").hide();
    });
  
    /* gang hoodie */
  
    $('#item-2-gang-hoodie').click(function(){
        $('.column-3-holder').show();
        $('.folder-gang-hoodie').show();
        $('.folder-gang-hoodie').siblings().hide();
        $('.folder-gang-hoodie').children().removeClass("old-selected");
        $('.folder-gang-hoodie').children().removeClass("selected");
        $('#item-2-gang-hoodie').removeClass("old-selected");
        $('#item-2-gang-hoodie').children(".item-arrow-grey").hide();
        $('#item-2-gang-hoodie').children(".item-arrow").hide();
        $('#item-2-gang-hoodie').siblings().removeClass("old-selected");
        $('#item-2-gang-hoodie').siblings().children(".item-arrow-grey").hide();
    });
  
    /* harambe hoodie */
  
    $('#item-2-harambe-hoodie').click(function(){
        $('.column-3-holder').show();
        $('.folder-harambe-hoodie').show();
        $('.folder-harambe-hoodie').siblings().hide();
        $('.folder-harambe-hoodie').children().removeClass("old-selected");
        $('.folder-harambe-hoodie').children().removeClass("selected");
        $('#item-2-harambe-hoodie').removeClass("old-selected");
        $('#item-2-harambe-hoodie').children(".item-arrow-grey").hide();
        $('#item-2-harambe-hoodie').children(".item-arrow").hide();
        $('#item-2-harambe-hoodie').siblings().removeClass("old-selected");
        $('#item-2-harambe-hoodie').siblings().children(".item-arrow-grey").hide();
    });
  
    /* press */
  
    var container = $('.folder-press');
    container.click(function(){
      $('#item-1-press').removeClass("selected");
      $('#item-1-press').addClass("old-selected");
      $('#item-1-press').children(".item-arrow-blue").hide();
      $('#item-1-press').children(".item-arrow").hide();
      $('#item-1-press').children(".item-arrow-grey").show();
    });
  
    $('#item-2-press-1').dblclick(function() {
        window.open('http://time.com/3678716/celebrity-emoji-portraits/');
    });
  
    $('#item-2-press-2').dblclick(function() {
        window.open('http://thecreatorsproject.vice.com/blog/interactive-cgi-music-video-vince-staples');
    });
  
    $('#item-2-press-3').dblclick(function() {
        window.open('http://pitchfork.com/news/63726-santigolds-interactive-cant-get-enough-of-myself-video-features-your-face/');
    });
  
    $('#item-2-press-4').dblclick(function() {
        window.open('http://www.theverge.com/2016/2/24/11105278/santigold-new-video-cant-get-enough-of-myself-99-cents');
    });
  
    $('#item-2-press-5').dblclick(function() {
        window.open('https://hypebeast.com/2016/4/with-you-vince-staples-ghost-video');
    });
  
    $('#item-2-press-6').dblclick(function() {
        window.open('http://www.thefader.com/artist/yung-jake');
    });
  
    $('#item-2-press-7').dblclick(function() {
        window.open('http://www.billboard.com/articles/columns/hip-hop/7271655/jay-z-pharrell-andy-samberg-santigold-cant-get-enough-of-myself-video');
    });
  
    $('#item-2-press-8').dblclick(function() {
        window.open('http://www.illroots.com/search/yung%20jake');
    });
    $('#item-2-press-9').dblclick(function() {
        window.open('http://www.complex.com/style/2015/06/yung-jake-new-identity-june-july-2015');
    });
  
    $('#item-2-press-10').dblclick(function() {
        window.open('http://www.sundance.org/blogs/yung-jake-leading-a-net-native-generation-of-storytellers');
    });
  
    $('#item-2-press-11').dblclick(function() {
        window.open('http://blog.giphy.com/post/56970599397/artist-spotlight-vince-mckelvie-when-did-you');
    });
  
    /* awards */
  
    var container = $('.folder-awards');
    container.click(function(){
      $('#item-1-awards').removeClass("selected");
      $('#item-1-awards').addClass("old-selected");
      $('#item-1-awards').children(".item-arrow-blue").hide();
      $('#item-1-awards').children(".item-arrow").hide();
      $('#item-1-awards').children(".item-arrow-grey").show();
    });
  
    $('#item-2-awards-1').dblclick(function() {
        window.open('https://thefwa.com/cases/yung-jake-both');
    });
  
    $('#item-2-awards-2').dblclick(function() {
        window.open('http://webbyawards.com/winners/2016/social/social-content-and-marketing/experimental-innovation/yung-jake-both-feat-charlie-heat/');
    });
  
    $('#item-2-awards-3').dblclick(function() {
        window.open('http://shortyawards.com/8th/yungjake');
    });
  
    $('#item-2-awards-4').dblclick(function() {
        window.open('http://imdb.com/name/nm5563957/awards?ref_=m_nm_awd');
    });
  
    $('#item-2-awards-5').dblclick(function() {
        window.open('http://imdb.com/name/nm5563957/awards?ref_=m_nm_awd');
    });
  
    $('#item-2-awards-6').dblclick(function() {
        window.open('http://www.austinmusicvideofestival.com/winners/');
    });
  
    /* column-3 */
  
    $('.column-3').click(function(){
        $('.column-2-holder').show();
        $('.column-3-holder').show();
    });
  
    /* nations */
  
     /* chile */
  
     var container = $('.folder-chile');
     container.click(function(){
       $('.folder-nations').show();
       $('#item-2-chile').removeClass("selected");
       $('#item-2-chile').addClass("old-selected");
       $('#item-2-chile').children(".item-arrow-blue").hide();
       $('#item-2-chile').children(".item-arrow").hide();
       $('#item-2-chile').children(".item-arrow-grey").show();
       $('#item-1-nations').addClass("old-selected");
       $('#item-1-nations').children(".item-arrow-blue").hide();
       $('#item-1-nations').children(".item-arrow").hide();
       $('#item-1-nations').children(".item-arrow-grey").show();
     });
   
     $('#item-3-chancitos').dblclick(function() {
         window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/chile/chancitos.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
     });
   
 
    /* china */
  
    var container = $('.folder-china');
    container.click(function(){
      $('.folder-nations').show();
      $('#item-2-china').removeClass("selected");
      $('#item-2-china').addClass("old-selected");
      $('#item-2-china').children(".item-arrow-blue").hide();
      $('#item-2-china').children(".item-arrow").hide();
      $('#item-2-china').children(".item-arrow-grey").show();
      $('#item-1-nations').addClass("old-selected");
      $('#item-1-nations').children(".item-arrow-blue").hide();
      $('#item-1-nations').children(".item-arrow").hide();
      $('#item-1-nations').children(".item-arrow-grey").show();
    });
    
    $('#item-3-envelope').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=530,width=304,height=166");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=20,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=530,width=550,height=550");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=350,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes5.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes6.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=530,width=304,height=166");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes7.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=20,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes8.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=530,width=550,height=550");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes9.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=600,width=693,height=445");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/redEnvelopes10.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
    $('#item-3-knot').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/endlessKnot.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=530,width=500,height=500");

    });
  
    $('#item-3-jade').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/jade.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=600,width=693,height=445");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/jade2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-coin').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/coinCharm.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=600,width=600,height=900");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/coinCharm2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-gourds').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/gourds.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-chan').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/chan.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=600,width=693,height=445");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/chan2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
     });
  
    $('#item-3-seven').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/seven.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=530,width=304,height=166");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/seven2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=50,left=20,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/seven3.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=530,width=550,height=550");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/seven4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=350,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/seven5.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=500,height=500");    });
  
    $('#item-3-cookies').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/cookies.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-bamboo').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/bamboo.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-fu').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/fu.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/fu2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/fu3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/fu4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/fu5.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/fu6.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");

    });
  
    $('#item-3-dragon').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/dragon.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-all').dblclick(function() {
        window.open('https://www.youtube.com/watch?v=nS7QvOX8LVk');
    });
  

     /* egypt */
  
     var container = $('.folder-egypt');
     container.click(function(){
       $('.folder-nations').show();
       $('#item-2-egypt').removeClass("selected");
       $('#item-2-egypt').addClass("old-selected");
       $('#item-2-egypt').children(".item-arrow-blue").hide();
       $('#item-2-egypt').children(".item-arrow").hide();
       $('#item-2-egypt').children(".item-arrow-grey").show();
       $('#item-1-nations').addClass("old-selected");
       $('#item-1-nations').children(".item-arrow-blue").hide();
       $('#item-1-nations').children(".item-arrow").hide();
       $('#item-1-nations').children(".item-arrow-grey").show();
     });
   
     $('#item-3-ankh').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/egypt/ankh.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
   
    $('#item-3-beetle').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/egypt/scarab.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/egypt/scarab2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");       
    });
    
    $('#item-3-triangles').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/egypt/triangle.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });
    $('#item-3-ladder').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/egypt/ladder.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");      
    });

     /* france */
  
     var container = $('.folder-france');
     container.click(function(){
       $('.folder-nations').show();
       $('#item-2-france').removeClass("selected");
       $('#item-2-france').addClass("old-selected");
       $('#item-2-france').children(".item-arrow-blue").hide();
       $('#item-2-france').children(".item-arrow").hide();
       $('#item-2-france').children(".item-arrow-grey").show();
       $('#item-1-nations').addClass("old-selected");
       $('#item-1-nations').children(".item-arrow-blue").hide();
       $('#item-1-nations').children(".item-arrow").hide();
       $('#item-1-nations').children(".item-arrow-grey").show();
     });
   
     $('#item-3-nenette').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/france/nenette.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=520,height=817");
    });

       /* germany */
  
       var container = $('.folder-germany');
       container.click(function(){
         $('.folder-nations').show();
         $('#item-2-germany').removeClass("selected");
         $('#item-2-germany').addClass("old-selected");
         $('#item-2-germany').children(".item-arrow-blue").hide();
         $('#item-2-germany').children(".item-arrow").hide();
         $('#item-2-germany').children(".item-arrow-grey").show();
         $('#item-1-nations').addClass("old-selected");
         $('#item-1-nations').children(".item-arrow-blue").hide();
         $('#item-1-nations').children(".item-arrow").hide();
         $('#item-1-nations').children(".item-arrow-grey").show();
       });
       $('#item-3-clover').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/germany/clover.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
        $('#item-3-horseshoe').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/germany/horseshoe.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });

        $('#item-3-pigs').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/germany/pigs.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
        $('#item-3-well').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/germany/well.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
      
          /* greece */
  
          var container = $('.folder-greece');
          container.click(function(){
            $('.folder-nations').show();
            $('#item-2-greece').removeClass("selected");
            $('#item-2-greece').addClass("old-selected");
            $('#item-2-greece').children(".item-arrow-blue").hide();
            $('#item-2-greece').children(".item-arrow").hide();
            $('#item-2-greece').children(".item-arrow-grey").show();
            $('#item-1-nations').addClass("old-selected");
            $('#item-1-nations').children(".item-arrow-blue").hide();
            $('#item-1-nations').children(".item-arrow").hide();
            $('#item-1-nations').children(".item-arrow-grey").show();
          });
          $('#item-3-keys').dblclick(function() {
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/key.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/key2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/key3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/key4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/key5.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/key6.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");

       });
     
           $('#item-3-eye').dblclick(function() {
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/eye.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/eye2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/eye3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/greece/eye4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");

       });

         /* guatemala */
  
         var container = $('.folder-guatemala');
         container.click(function(){
           $('.folder-nations').show();
           $('#item-2-guatemala').removeClass("selected");
           $('#item-2-guatemala').addClass("old-selected");
           $('#item-2-guatemala').children(".item-arrow-blue").hide();
           $('#item-2-guatemala').children(".item-arrow").hide();
           $('#item-2-guatemala').children(".item-arrow-grey").show();
           $('#item-1-nations').addClass("old-selected");
           $('#item-1-nations').children(".item-arrow-blue").hide();
           $('#item-1-nations').children(".item-arrow").hide();
           $('#item-1-nations').children(".item-arrow-grey").show();
         });
         $('#item-3-dolls').dblclick(function() {
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/guatemala/doll.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/guatemala/doll2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/guatemala/doll3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/guatemala/doll4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/guatemala/doll5.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/guatemala/doll6.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");

      });

 /* ireland */
  
         var container = $('.folder-ireland');
         container.click(function(){
           $('.folder-nations').show();
           $('#item-2-ireland').removeClass("selected");
           $('#item-2-ireland').addClass("old-selected");
           $('#item-2-ireland').children(".item-arrow-blue").hide();
           $('#item-2-ireland').children(".item-arrow").hide();
           $('#item-2-ireland').children(".item-arrow-grey").show();
           $('#item-1-nations').addClass("old-selected");
           $('#item-1-nations').children(".item-arrow-blue").hide();
           $('#item-1-nations').children(".item-arrow").hide();
           $('#item-1-nations').children(".item-arrow-grey").show();
         });
         $('#item-3-clover').dblclick(function() {
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/germany/clover.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
         
      });

         /* italy */
  
         var container = $('.folder-italy');
         container.click(function(){
           $('.folder-nations').show();
           $('#item-2-italy').removeClass("selected");
           $('#item-2-italy').addClass("old-selected");
           $('#item-2-italy').children(".item-arrow-blue").hide();
           $('#item-2-italy').children(".item-arrow").hide();
           $('#item-2-italy').children(".item-arrow-grey").show();
           $('#item-1-nations').addClass("old-selected");
           $('#item-1-nations').children(".item-arrow-blue").hide();
           $('#item-1-nations').children(".item-arrow").hide();
           $('#item-1-nations').children(".item-arrow-grey").show();
         });
         $('#item-3-cornicello').dblclick(function() {
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/italy/cornicello.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
         
      });
   
    
  
    /* japan */
  
    var container = $('.folder-japan');
    container.click(function(){
      $('.folder-nations').show();
      $('#item-2-japan').removeClass("selected");
      $('#item-2-japan').addClass("old-selected");
      $('#item-2-japan').children(".item-arrow-blue").hide();
      $('#item-2-japan').children(".item-arrow").hide();
      $('#item-2-japan').children(".item-arrow-grey").show();
      $('#item-1-nations').addClass("old-selected");
      $('#item-1-nations').children(".item-arrow-blue").hide();
      $('#item-1-nations').children(".item-arrow").hide();
      $('#item-1-nations').children(".item-arrow-grey").show();
    });
  
    $('#item-3-dragons').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/china/dragon.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });
  
    $('#item-3-cat').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/japan/cat.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=600,width=693,height=445");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/japan/cat1.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");       
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/japan/cat2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=350,left=600,width=693,height=445");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/japan/cat3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });

    $('#item-3-charms').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/japan/charms.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });
  

 
    /* peru */
  
    var container = $('.folder-peru');
    container.click(function(){
      $('.folder-nations').show();
      $('#item-2-peru').removeClass("selected");
      $('#item-2-peru').addClass("old-selected");
      $('#item-2-peru').children(".item-arrow-blue").hide();
      $('#item-2-peru').children(".item-arrow").hide();
      $('#item-2-peru').children(".item-arrow-grey").show();
      $('#item-1-nations').addClass("old-selected");
      $('#item-1-nations').children(".item-arrow-blue").hide();
      $('#item-1-nations').children(".item-arrow").hide();
      $('#item-1-nations').children(".item-arrow-grey").show();
    });
  
    $('#item-3-tumi').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/peru/tumi.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    });

     /* sweden */
  
        var container = $('.folder-sweden');
        container.click(function(){
          $('.folder-nations').show();
          $('#item-2-sweden').removeClass("selected");
          $('#item-2-sweden').addClass("old-selected");
          $('#item-2-sweden').children(".item-arrow-blue").hide();
          $('#item-2-sweden').children(".item-arrow").hide();
          $('#item-2-sweden').children(".item-arrow-grey").show();
          $('#item-1-nations').addClass("old-selected");
          $('#item-1-nations').children(".item-arrow-blue").hide();
          $('#item-1-nations').children(".item-arrow").hide();
          $('#item-1-nations').children(".item-arrow-grey").show();
        });
      
        $('#item-3-dalecarlian').dblclick(function() {
            window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/sweden/dalecarlian.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        });
      
     /* thailand */
  
     var container = $('.folder-thailand');
     container.click(function(){
       $('.folder-nations').show();
       $('#item-2-thailand').removeClass("selected");
       $('#item-2-thailand').addClass("old-selected");
       $('#item-2-thailand').children(".item-arrow-blue").hide();
       $('#item-2-thailand').children(".item-arrow").hide();
       $('#item-2-thailand').children(".item-arrow-grey").show();
       $('#item-1-nations').addClass("old-selected");
       $('#item-1-nations').children(".item-arrow-blue").hide();
       $('#item-1-nations').children(".item-arrow").hide();
       $('#item-1-nations').children(".item-arrow-grey").show();
     });
   
     $('#item-3-elephants').dblclick(function() {
         window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/thailand/elephant.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
         window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/thailand/elephant2.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
         window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/thailand/elephant3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");

     });

      /* ukraine */
  
      var container = $('.folder-ukraine');
      container.click(function(){
        $('.folder-nations').show();
        $('#item-2-ukraine').removeClass("selected");
        $('#item-2-ukraine').addClass("old-selected");
        $('#item-2-ukraine').children(".item-arrow-blue").hide();
        $('#item-2-ukraine').children(".item-arrow").hide();
        $('#item-2-ukraine').children(".item-arrow-grey").show();
        $('#item-1-nations').addClass("old-selected");
        $('#item-1-nations').children(".item-arrow-blue").hide();
        $('#item-1-nations').children(".item-arrow").hide();
        $('#item-1-nations').children(".item-arrow-grey").show();
      });
    
      $('#item-3-pysanky').dblclick(function() {
          window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/ukraine/pysanky.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
    
      });

       /* usa */
  
       var container = $('.folder-usa');
       container.click(function(){
         $('.folder-nations').show();
         $('#item-2-usa').removeClass("selected");
         $('#item-2-usa').addClass("old-selected");
         $('#item-2-usa').children(".item-arrow-blue").hide();
         $('#item-2-usa').children(".item-arrow").hide();
         $('#item-2-usa').children(".item-arrow-grey").show();
         $('#item-1-nations').addClass("old-selected");
         $('#item-1-nations').children(".item-arrow-blue").hide();
         $('#item-1-nations').children(".item-arrow").hide();
         $('#item-1-nations').children(".item-arrow-grey").show();
       });
     
       $('#item-3-penny').dblclick(function() {
           window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/usa/penny.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
     
       });

    /* africa */
  
    var container = $('.folder-africa');
    container.click(function(){
      $('.folder-nations').show();
      $('#item-2-africa').removeClass("selected");
      $('#item-2-africa').addClass("old-selected");
      $('#item-2-africa').children(".item-arrow-blue").hide();
      $('#item-2-africa').children(".item-arrow").hide();
      $('#item-2-africa').children(".item-arrow-grey").show();
      $('#item-1-nations').addClass("old-selected");
      $('#item-1-nations').children(".item-arrow-blue").hide();
      $('#item-1-nations').children(".item-arrow").hide();
      $('#item-1-nations').children(".item-arrow-grey").show();
    });
  
    $('#item-3-teeth').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/africa/teeth.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });
  
    $('#item-3-gem').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/africa/gem.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });
  
    $('#item-3-hamsa').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/nations/africa/teeth.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });

  
    /* tribes */
  
    /* yung jake celtics */
  
    var container = $('.folder-jake');
    container.click(function(){
      $('.folder-tribes').show();
      $('#item-2-jake').removeClass("selected");
      $('#item-2-jake').addClass("old-selected");
      $('#item-2-jake').children(".item-arrow-blue").hide();
      $('#item-2-jake').children(".item-arrow").hide();
      $('#item-2-jake').children(".item-arrow-grey").show();
      $('#item-1-tribes').addClass("old-selected");
      $('#item-1-tribes').children(".item-arrow-blue").hide();
      $('#item-1-tribes').children(".item-arrow").hide();
      $('#item-1-tribes').children(".item-arrow-grey").show();
    });
  
    $('#item-3-rabbit').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/tribes/celtic/rabbit.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
    });
  
   
    /* vikings - vince mckelvie */
  
    var container = $('.folder-vince');
    container.click(function(){
      $('.folder-tribes').show();
      $('#item-2-vince').removeClass("selected");
      $('#item-2-vince').addClass("old-selected");
      $('#item-2-vince').children(".item-arrow-blue").hide();
      $('#item-2-vince').children(".item-arrow").hide();
      $('#item-2-vince').children(".item-arrow-grey").show();
      $('#item-1-tribes').addClass("old-selected");
      $('#item-1-tribes').children(".item-arrow-blue").hide();
      $('#item-1-tribes').children(".item-arrow").hide();
      $('#item-1-tribes').children(".item-arrow-grey").show();
    });
  
    $('#item-3-vince-site').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/tribes/vikings/acorn.png", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/tribes/vikings/acorn2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");   
   
    });  
  
    
  
  
  
    /* shop */
  
    /* money phone */
  
    $('#item-2-money-phone').click(function(){
      // $(".column-3-holder").width(200);
      // $(".column-3").width(200);
      $(".content-area").scrollLeft(400);
    });
  
    $('#item-2-money-phone, #item-3-money-phone').dblclick(function(){
      var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
          $('#window-2').css('left', positionX);
      var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
          $('#window-2').css('top', positionY);
      $('#window-2').show();
    });
  
    $('#item-3-money-phone').click(function(){
      $(this).removeClass('selected');
      $('#item-2-money-phone').addClass("selected");
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children('.item-arrow-grey').show();
      $('#item-1-shop').children('.item-arrow').hide();
      $('.folder-shop').show();
    });
  
    /* usb mixtape */
  
    $('#item-2-usb').click(function(){
      // $(".column-3-holder").width(200);
      // $(".column-3").width(200);
      $(".content-area").scrollLeft(480);
    });
  
    $('#item-2-usb, #item-3-sub').dblclick(function(){
      var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
      $('#window-2').css('left', positionX);
      var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
      $('#window-2').css('top', positionY);
      $('#window-2').show();
    });
  
  
    $('#item-3-usb').click(function(){
      $(this).removeClass('selected');
      $('#item-2-usb').addClass("selected");
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children('.item-arrow-grey').show();
      $('#item-1-shop').children('.item-arrow').hide();
      $('.folder-shop').show();
      $('.folder-shop').show();
    });
  
  
    /* native american - squad hats */
  


    var container = $('.folder-squad-hats');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-squad-hats').removeClass("selected");
      $('#item-2-squad-hats').addClass("old-selected");
      $('#item-2-squad-hats').children(".item-arrow-blue").hide();
      $('#item-2-squad-hats').children(".item-arrow").hide();
      $('#item-2-squad-hats').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
     // $(".content-area").scrollLeft(480);
    });
  
    $('#item-3-hat-black').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/cricket.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
   
    });  

    $('#item-3-hat-yellow').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/dream.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/dream2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/dream3.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/dream4.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");

    });  

    $('#item-3-hat-pink').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/kachina.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
   
    });  

    $('#item-3-hat-white').dblclick(function() {
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/turtle.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
        window.open("https://kiaraputrilia.github.io/Core-2-Studio/p3/assets/cultures/native/turtle2.jpeg", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=300,left=700,width=500,height=500");
   
    });  

   // $('#item-3-hat-black, #item-4-hat-black').click(function(){
      //$('.column-4, .column-4-holder').css("width", "200px");
      //$('.column-4-holder').css("right", "-200px");
   //   $(".content-area").scrollLeft(400);
   // });
  
    //$('#item-3-hat-black, #item-4-hat-black').dblclick(function(){
     // var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
    //  $('#window-3').css('left', positionX);
   //   var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
     // $('#window-3').css('top', positionY);
    //  $('#window-3').show();
    // });
  
    // $(document).mouseup(function (e){
    //   var container = $("#item-3-hat-black");
    //   if (!container.is(e.target) && container.has(e.target).length === 0){
    //     $('.column-4, .column-4-holder').css("width", "150px");
    //     $('.column-4-holder').css("right", "-150px");
    //   }
    // });
  
    /* squad hoodies */
  
    var container = $('.folder-squad-hoodie');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-squad-hoodie').removeClass("selected");
      $('#item-2-squad-hoodie').addClass("old-selected");
      $('#item-2-squad-hoodie').children(".item-arrow-blue").hide();
      $('#item-2-squad-hoodie').children(".item-arrow").hide();
      $('#item-2-squad-hoodie').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
    /* gang hoodies */
  
    var container = $('.folder-gang-hoodie');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-gang-hoodie').removeClass("selected");
      $('#item-2-gang-hoodie').addClass("old-selected");
      $('#item-2-gang-hoodie').children(".item-arrow-blue").hide();
      $('#item-2-gang-hoodie').children(".item-arrow").hide();
      $('#item-2-gang-hoodie').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
    /* harambe hoodies */
  
    var container = $('.folder-harambe-hoodie');
    container.click(function(){
      $('.column-4-holder').show();
      $('.folder-shop').show();
      $('#item-2-harambe-hoodie').removeClass("selected");
      $('#item-2-harambe-hoodie').addClass("old-selected");
      $('#item-2-harambe-hoodie').children(".item-arrow-blue").hide();
      $('#item-2-harambe-hoodie').children(".item-arrow").hide();
      $('#item-2-harambe-hoodie').children(".item-arrow-grey").show();
      $('#item-1-shop').addClass("old-selected");
      $('#item-1-shop').children(".item-arrow-blue").hide();
      $('#item-1-shop').children(".item-arrow").hide();
      $('#item-1-shop').children(".item-arrow-grey").show();
      $(".content-area").scrollLeft(480);
    });
  
  });
  
  function openNewWindow(sizeX, sizeY, title, src, id){
    $('#window-3 .title').html(title);
    $('#window-3 .title-icon').attr("src",$(id + " .item-icon-normal").attr("src"));
    $('#window-3 .window-content').attr("src", src);
    var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
    $('#window-3').css('left', positionX);
    var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2 + 20;
    $('#window-3').css('top', positionY);
    $('#window-3').width(sizeX);
    $('#window-3').height(sizeY);
    $('#window-3').show();
    $('#window-3').click();
  }
  
  function openNewShopWindow(sizeX, sizeY, title, src, id){
    $('#window-2 .title').html(title);
    $('#window-2 .title-icon').attr("src",$(id + " .item-icon-normal").attr("src"));
    $('#window-2 .window-content').attr("src", src);
    var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
    $('#window-2').css('left', positionX);
    var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2 + 20;
    $('#window-2').css('top', positionY);
    $('#window-2').width(sizeX);
    $('#window-2').height(sizeY);
    $('#window-2').show();
    $('#window-2').click(); 
}