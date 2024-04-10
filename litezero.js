function setlzModal() {
  $('<div class="lz_modal"><div class="lz_modal_content"></div></div>').appendTo('body');
}

$('[data-lz-modal]').click(function() {
  var lzImg = $(this).attr('src')
  var lzTitle = $(this).attr('data-lz-title')
	setlzModal()
  $('<img class="lz_modal_img" src="' + lzImg + '">').appendTo('.lz_modal_content');
  if (lzTitle !== undefined) {
    $('<span class="lz_modal_title">' + lzTitle + '</span>').appendTo('.lz_modal_content');
  }
$('body').addClass('lz_overhide');
  $('.lz_modal').fadeIn(250);
})

$('body').on('click', '.lz_modal', function(event) {
  $('.lz_modal').fadeOut(250);
$('body').removeClass('lz_overhide');	
  setTimeout(function() {
    $('.lz_modal').remove();
  }, 300)
});

$('body').on('click', '.lz_modal_img, .lz_modal_title', function(event) {
  event.stopPropagation();
});
