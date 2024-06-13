const getToTopBtn = document.querySelector('#get_to_top_btn');


window.addEventListener("scroll", function(){
    if(window.pageYOffset > 200){
        getToTopBtn.style.display = "block";
    }
    else{
        getToTopBtn.style.display = "none";
    }
        
})

window.addEventListener('click', function(){
    window.scrollTo({
        behavior: "smooth"
    })
});
    




// $(document).ready(function() {
//     $("#news-slider").owlCarousel({
//         items : 3,
//         itemsDesktop:[1199,3],
//         itemsDesktopSmall:[980,2],
//         itemsMobile : [600,1],
//         navigation:true,
//         navigationText:["",""],
//         pagination:true,
//         autoPlay:true
//     });
// });