/******** Swiper View ********/
function myFunction(x) {
  if (x.matches) { // If media query matches
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  } else {
    /***  Initialize Swiper **/
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
}


var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes




/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});

sr.reveal('.hero__main,.team,.card,.swiper', {
  interval: 200
})


ScrollReveal({ distance: '65px' });
ScrollReveal().reveal('.about__circle,.about__circle2,.card_3d', { origin: 'right' });
ScrollReveal().reveal('.about_list,.hero__title,.line,.con', { origin: 'left' });




// ================scroll top================//

let span = document.querySelector(".up");
window.onscroll =function(){
  if (this.scrollY >= 1000){span.classList.add("show");}
  else {span.classList.remove("show");}
};

span.onclick = function()
{
  window.scrollTo({top:0 , behavior:"smooth"})
}
