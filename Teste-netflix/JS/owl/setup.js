$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
// Para o modal info
$('#infoButton').click(function() {
  $('#infoModal').addClass('active');
});

$('#infoClose').click(function() {
  $('#infoModal').removeClass('active');
});

// Para o modal watch
$('#watchButton').click(function() {
  $('#watchModal').addClass('active');
});

$('#watchClose').click(function() {
  $('#watchModal').removeClass('active');
});
