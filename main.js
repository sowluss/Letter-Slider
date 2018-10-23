$(document).ready(function(){
  $('a:nth-child(1)').css('background-color', 'white');
  $('#circle1').click(function(){
    $('#slider').animate({'left': '5%'}, 500);
    $('#data').fadeIn(700);
    $('#data2, #data3, #data4').fadeOut(500); 
    $('.line').animate({'left': '60%'});
    $('a:nth-child(1)').css('background-color', 'white');
    $('a:nth-child(2), a:nth-child(3), a:nth-child(4)').css('background-color', 'black');
  });
  $('#circle2').click(function(){
    $('#slider').animate({'left': '-30%'}, 500);
    $('#data2').fadeIn(700);
    $('#data, #data3, #data4').fadeOut(500); 
    $('.line').animate({'left': '25%'});
    $('a:nth-child(2)').css('background-color', 'white');
    $('a:nth-child(1), a:nth-child(3), a:nth-child(4)').css('background-color', 'black');
  });
  $('#circle3').click(function(){
    $('#slider').animate({'left': '-190%'}, 500);
    $('#data3').fadeIn(700);
    $('#data, #data2, #data4').fadeOut(500); 
    $('.line').animate({'left': '55%'});
    $('a:nth-child(3)').css('background-color', 'white');
    $('a:nth-child(1), a:nth-child(2), a:nth-child(4)').css('background-color', 'black');
  });
  $('#circle4 ').click(function(){
    $('#slider').animate({'left': '-240%'}, 500);
    $('#data4').fadeIn(700);
    $('#data, #data2, #data3').fadeOut(500); 
    $('.line').animate({'left': '25%'});
    $('a:nth-child(4)').css('background-color', 'white');
    $('a:nth-child(1), a:nth-child(2), a:nth-child(3)').css('background-color', 'black');
  });
});

// Move text inside letters

let l1 = $('#d');
let l2 = $('#a');
let l3 = $('#f');
let l4 = $('#t');

let layer = $('#main');

let moveStrength = 25;
let height = moveStrength / $(window).height();
let width = moveStrength / $(window).width();

layer.mousemove(function(e){
  let valueX = (e.pageX * -1 / 40);

  l1.css({'background-position':(valueX-200)+' '+0}); 
  l2.css({'background-position':(valueX)+' '+0}); 
  l3.css({'background-position':(valueX-200)+' '+0}); 
  l4.css({'background-position':(valueX+600)+' '+0}); 
});