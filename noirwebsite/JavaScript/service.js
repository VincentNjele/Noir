
 

 window.addEventListener('scroll',show);

 function show() {

     var showData = document.querySelectorAll('.show');

     for(var i=0; i<showData.length; i++) {

         var windowHeight = window.innerHeight;
         var showTop = showData[i].getBoundingClientRect().top;
         var showPoint = 150;
         
         if(showTop <windowHeight-showPoint) {
            
           
             showData[i].classList.add('active');
            
         } else {
             showData[i].classList.remove('active');
         }
     }
 }

 function displayValue() {
 let displayValue = document.querySelectorAll('.item-stats-count');
 let interval = 5000;

 console.log(displayValue)
 displayValue.forEach(value => {
 let start = 0;
 let end = parseInt(value.getAttribute("data-val"));

 let duration = Math.floor(interval/end);

 let counter = setInterval(function(){

     start +=1;
     value.textContent = start;

     if(start == end) {
         clearInterval(counter);
     }
 }, duration);

 })

 }
 displayValue();


//  const swiper = new Swiper('.swiper', {
//     loop: true,

//     pagination: {
//     el: '.swiper-pagination',
//     },

//     navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//     },

//     });

  
    // function moveImage() {

    //     var movePosition = document.getElementById('image');
    //     window.addEventListener('scroll', function() {
            
    //         movePosition.style.backgroundPosition = +window.pageYOffset + 'px';
    //     })
    // }

    // moveImage();

    $(window).scroll(function() {
        var scrollTop = $('html,body').scrollTop();
        console.log(scrollTop)
        $('.container').css({'background-positionY':+ (-scrollTop/10) + 'px'});
    });

    window.onscroll = function(){

        var nav = document.getElementById('nav');
        if(window.pageYOffset> 560){
            nav.style.backgroundColor = '#000000';
            nav.style.boxShadow = '1px 1px 1px orangered';
        }else {
            nav.style.backgroundColor = 'transparent';
            nav.style.boxShadow = 'none';
        }
    }