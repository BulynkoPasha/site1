// прокрутка изображений
$(function() {  
    $('.marquee').marquee({
      duration: 26700,  //время за которое текст должен прокрутиться
      startVisible: true,  //текст заполняtn пространство в начале
      duplicated: true,  //задает непрерывность текста
    });
  });
// кнопка 1
$(document).ready(function(){
	$('.content_toggle').click(function(){
		$('.hide').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle').html('Подробнее');
			} else {
				$('.content_toggle').html('Скрыть текст');
			}							
		});
		return false;
	});
});
// кнопка 2
$(document).ready(function(){
	$('.content_toggle1').click(function(){
		$('.hide1').slideToggle(300, function(){
			if ($(this).is(':hidden')) {
				$('.content_toggle1').html('Подробнее');
			} else {
				$('.content_toggle1').html('Скрыть текст');
			}							
		});
		return false;
	});
});