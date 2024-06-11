
$(document).ready(function(){
    $('.slick-slider').slick({
      prevArrow: "",
      nextArrow: ` 
      <div class="slick-next-box">
          <svg  version="1.0" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 64.000000 64.000000" preserveAspectRatio="xMidYMid meet">
              <g id="slick-next" transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                 <path d="M91 594 c-46 -33 -91 -172 -91 -282 0 -59 14 -101 24 -72 3 8 6 58 8 110 3 81 8 105 35 163 26 54 36 67 55 67 33 0 55 -15 34 -23 -10 -4 -16 -18 -16 -36 0 -16 -7 -36 -15 -44 -9 -10 -13 -26 -9 -44 3 -17 -1 -36 -9 -48 -11 -14 -12 -25 -4 -42 7 -16 7 -30 0 -46 -8 -17 -7 -28 4 -42 8 -12 12 -31 9 -48 -4 -18 0 -34 9 -44 8 -8 15 -28 15 -44 0 -18 6 -32 16 -36 21 -8 -1 -23 -34 -23 -17 0 -28 11 -44 45 -23 47 -38 58 -38 28 0 -28 38 -82 65 -95 23 -10 45 -2 220 85 l194 96 3 -31 c4 -38 30 -58 56 -42 11 7 18 27 20 59 2 29 11 58 23 73 10 14 19 33 19 44 0 23 -46 72 -60 63 -16 -10 -12 -23 10 -30 27 -9 27 -56 0 -73 -16 -10 -20 -23 -20 -67 0 -30 -4 -55 -10 -55 -5 0 -10 20 -10 45 0 79 -36 125 -97 125 -60 0 -104 -63 -85 -120 l11 -30 -91 -46 c-49 -25 -96 -43
                    -104 -40 -8 3 -14 16 -14 29 0 13 -7 32 -15 43 -8 10 -15 35 -15 55 0 20 -3 39 -6 42 -4 3 -7 29 -7 57 0 28 3 54 7 57 3 3 6 22 6 42 0 20 7 45 15 55 8 11 15 30 15 43 0 27 26 41 43 24 8 -8 8 -14 -1 -23 -17 -17 -15 -89 3 -114 46 -66 162 -48 188 29 3 9 14 7 41 -5 44 -21 46 -22 46 -5 0 12 -343 188 -365 187 -6 0 -21 -7 -34 -16z m229 -104 c33 -17 60 -36 60 -43 0 -8 -11 -24 -25 -37 -64 -60 -166 13 -125 91 14 25 20 24 90 -11z m174 -201 c14 -11 26 -25 26 -30 0 -5 -27 -22 -59 -39 -63 -32 -71 -29 -71 25 0 24 41 65 65 65 7 0 24 -9 39 -21z"></path>
                 <path d="M260 470 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"></path>
                 <path d="M310 434 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10 -7 -10 -16z"></path>
                 <path d="M430 270 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0 -15 -4 -15 -10z"></path>
                 <path d="M520 400 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"></path>
                 <path d="M425 380 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0 -12 -4 -9 -10z"></path>
                 <path d="M170 350 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"></path>
                 <path d="M217 282 c-22 -24 -21 -35 1 -55 22 -20 63 -22 80 -5 15 15 15 51 0 66 -18 18 -63 14 -81 -6z m62 -16 c9 -10 8 -16 -4 -26 -17 -14 -45 -7 -45 13 0 29 30 37 49 13z"></path>
                 <path d="M20 190 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"></path>
                 <path d="M210 170 c0 -5 5 -10 10 -10 6 0 10 5 10 10 0 6 -4 10 -10 10 -5 0 -10 -4 -10 -10z"></path>
              </g>
           </svg>
      </div>`,
/*       nextArrow: '<button type="button" class="slick-next"><img src="../assets/images/home/next.svg" alt=""></button>',
 */  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
  })
  ;
  window.addEventListener("load", () => {
    const slickPrev = document.querySelector('#slick-prev');
    const slickPrevBox = document.querySelector('.slick-prev-box');
    const slickNext = document.querySelector('#slick-next');
    const slickNextBox = document.querySelector('.slick-next-box');
    slickPrevBox.addEventListener("mouseover", () => {
        slickPrev.setAttribute("fill", "#f7b035");
        slickPrevBox.style.cursor = "pointer"
    });
    slickPrevBox.addEventListener("mouseout", () => {
        slickPrev.setAttribute("fill", "#000");
    });

    
    slickNextBox.addEventListener("mouseover", () => {
        slickNext.setAttribute("fill", "#f7b035");

        
    });
    slickNextBox.addEventListener("mouseout", () => {
        slickNext.setAttribute("fill", "#000");
        slickNextBox.style.cursor = "pointer"

        
    });
})
  

