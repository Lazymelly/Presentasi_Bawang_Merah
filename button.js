const Buttontotop = document.querySelector('.Buttontotop');

window.onscroll = function () {
    scrollFunction();
  };
  
Buttontotop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})