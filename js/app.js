let nav = document.querySelector(".navbar");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 50){
   nav.classList.add("header-scrolled")
  }else{  
    nav.classList.remove(header-scrolled);
  }
}





// Initialize carousel with a 4-second interval
// $(document).ready(function() {
//   $('#carouselExampleCaptions').carousel({
//     interval: 1000  // 4 seconds
//   });
// });


