window.onscroll = function() {
    var pos =  document.documentElement.scrollTop;
    var calc_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scroll = pos * 100 / calc_height;
    document.getElementById("progress").style.width= scroll + "%";
}
alert("just tried to make simple website without using any framework.There are many issues if you know how to fix that please help😅.Better in desktop view.");
var swiper = new Swiper('.swiper-container', {
      speed: 600,
      parallax: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });