$(document).ready(function() {
    var a = 3;
    $('.window').draggable({
        start: function(event, ui) { $(this).css("z-index", a++); }
    });

    $('.window').click(function() {
        $(this).addClass('top').removeClass('bottom');
        $(this).siblings().removeClass('top');
        $(this).css("z-index", a++);
    });

    /* window-2 */

    $('#item-2-money-phone').dblclick(function(){
      $('#window-2').addClass('top').removeClass('bottom');
      $('#window-2').siblings().removeClass('top');
      $('#window-2').css("z-index", a++);
    });

    $('#item-2-usb').dblclick(function(){
      $('#window-3').addClass('top').removeClass('bottom');
      $('#window-3').siblings().removeClass('top');
      $('#window-3').css("z-index", a++);
    });
});