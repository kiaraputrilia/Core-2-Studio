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
  
    /* contact */
  
  
    $('#item-1-contact').click(function(){
        $('#item-1-contact').removeClass("old-selected");
        $('#item-1-contact').children(".item-arrow-grey").hide();
        $('#item-1-contact').siblings().removeClass("old-selected");
        $('#item-1-contact').siblings().children(".item-arrow-grey").hide();
        $('.folder-contact').show();
        $('.folder-contact').siblings().hide();
        $('.folder-contact').children().removeClass("selected");
        $('.folder-contact').children().removeClass("old-selected");
        $('.folder-contact').children().children(".item-arrow-grey").hide();
        $('.folder-contact').children().children(".item-arrow-blue").hide();
        $('.folder-contact').children().children(".item-arrow").show();
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
  
    var container = $('.folder-contact');
    container.click(function(){
      $('#item-1-contact').removeClass("selected");
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    /*email*/
  
    $('#item-2-email').dblclick(function() {
        alert("email address copied to clipboard");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($("#email-address").text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
  
    $('#item-2-email').click(function(){
        $('.column-3-holder').hide();
        $('#item-2-jake').siblings().removeClass("old-selected");
        $('#item-2-jake').siblings().children(".item-arrow-grey").hide();
    });
  
    /* yung jake */
  
    $('#item-2-jake').click(function(){
        $('.column-3-holder').show();
        $('.folder-jake').show();
        $('.folder-jake').siblings().hide();
        $('.folder-jake').children().removeClass("old-selected");
        $('.folder-jake').children().removeClass("selected");
        $('#item-2-jake').removeClass("old-selected");
        $('#item-2-jake').children(".item-arrow-grey").hide();
        $('#item-2-jake').children(".item-arrow").hide();
        $('#item-2-jake').siblings().removeClass("old-selected");
        $('#item-2-jake').siblings().children(".item-arrow-grey").hide();
    });
  
    /* vince mckelvie */
  
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
  
     var container = $('.folder-africa');
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

  
    /* contact */
  
    /* yung jake */
  
    var container = $('.folder-jake');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-jake').removeClass("selected");
      $('#item-2-jake').addClass("old-selected");
      $('#item-2-jake').children(".item-arrow-blue").hide();
      $('#item-2-jake').children(".item-arrow").hide();
      $('#item-2-jake').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-yj-ig').dblclick(function() {
        window.open('https://www.instagram.com/yungjake/?hl=en');
    });
  
    $('#item-3-yj-twitter').dblclick(function() {
        window.open('https://twitter.com/yungjake?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor');
    });
  
    $('#item-3-yj-facebook').dblclick(function() {
        window.open('https://www.facebook.com/yuungjaake/');
    });
  
    $('#item-3-yj-youtube').dblclick(function() {
        window.open('https://www.youtube.com/user/jakebake135');
    });
  
    $('#item-3-yj-mssngpeces').dblclick(function() {
        window.open('http://mssngpeces.com/directors/digital/yungjake/is-yung-jake-the-internets-artist/');
    });
  
    /* vince mckelvie */
  
    var container = $('.folder-vince');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-vince').removeClass("selected");
      $('#item-2-vince').addClass("old-selected");
      $('#item-2-vince').children(".item-arrow-blue").hide();
      $('#item-2-vince').children(".item-arrow").hide();
      $('#item-2-vince').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-vince-site').dblclick(function() {
        window.open('https://vincemckelvie.com/');
    });
  
    $('#item-3-vince-ig').dblclick(function() {
        window.open('https://www.instagram.com/vincemckelvie/?hl=en');
    });
  
    $('#item-3-vince-mssngpeces').dblclick(function() {
        window.open('http://mssngpeces.com/directors/digital/vince-mckelvie/about-vince/');
    });
  
  
    /* theo bark */
  
    var container = $('.folder-theo');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-theo').removeClass("selected");
      $('#item-2-theo').addClass("old-selected");
      $('#item-2-theo').children(".item-arrow-blue").hide();
      $('#item-2-theo').children(".item-arrow").hide();
      $('#item-2-theo').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-theo-ig').dblclick(function() {
        window.open('https://www.instagram.com/wisekingt/?hl=en');
    });
  
    $('#item-3-theo-email').dblclick(function() {
        alert("email address copied to clipboard");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($("#email-address-theo-2").text()).select();
        document.execCommand("copy");
        $temp.remove();
    });
  
    /* corey houck */
  
    var container = $('.folder-corey');
    container.click(function(){
      $('.folder-contact').show();
      $('#item-2-corey').removeClass("selected");
      $('#item-2-corey').addClass("old-selected");
      $('#item-2-corey').children(".item-arrow-blue").hide();
      $('#item-2-corey').children(".item-arrow").hide();
      $('#item-2-corey').children(".item-arrow-grey").show();
      $('#item-1-contact').addClass("old-selected");
      $('#item-1-contact').children(".item-arrow-blue").hide();
      $('#item-1-contact').children(".item-arrow").hide();
      $('#item-1-contact').children(".item-arrow-grey").show();
    });
  
    $('#item-3-corey-site').dblclick(function() {
        window.open('http://coreyhouck.com');
    });
  
    $('#item-3-corey-ig').dblclick(function() {
        window.open('https://www.instagram.com/coreyhouck/');
    });
  
    $('#item-3-corey-email').dblclick(function() {
        alert("email address copied to clipboard");
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($("#email-address-corey").text()).select();
        document.execCommand("copy");
        $temp.remove();
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
  
  
    /* squad hats */
  
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
      $(".content-area").scrollLeft(480);
    });
  
    $('#item-3-hat-black, #item-4-hat-black').click(function(){
      //$('.column-4, .column-4-holder').css("width", "200px");
      //$('.column-4-holder').css("right", "-200px");
      $(".content-area").scrollLeft(400);
    });
  
    $('#item-3-hat-black, #item-4-hat-black').dblclick(function(){
      var positionX = Math.random() * $(window).width() * 0.6 + $(window).width() * 0.2;
      $('#window-3').css('left', positionX);
      var positionY = Math.random() * $(window).height() * 0.4 + $(window).height() * 0.2;
      $('#window-3').css('top', positionY);
      $('#window-3').show();
    });
  
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