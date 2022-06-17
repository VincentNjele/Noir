


window.addEventListener('scroll', show);

function show() {

    var showData = document.querySelectorAll('.show');

    for (var i = 0; i < showData.length; i++) {

        var windowHeight = window.innerHeight;
        var showTop = showData[i].getBoundingClientRect().top;
        var showPoint = 150;

        if (showTop < windowHeight - showPoint) {


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

        let duration = Math.floor(interval / end);

        let counter = setInterval(function () {

            start += 1;
            value.textContent = start;

            if (start == end) {
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

$(window).scroll(function () {
    var scrollTop = $('html,body').scrollTop();
    console.log(scrollTop)
    $('.container').css({ 'background-positionY': + (-scrollTop / 10) + 'px' });
});

window.onscroll = function () {
    var getUl = document.getElementById('getUl');
    var nav = document.getElementById('nav');

    if (window.pageYOffset > 560) {


        nav.style.backgroundColor = '#000000';
        nav.style.boxShadow = '1px 1px 1px orangered';
        getUl.style.backgroundColor = '#000000';
    } else {
        nav.style.backgroundColor = 'transparent';
        getUl.style.backgroundColor = '#2c3e50';
        nav.style.boxShadow = 'none';
    }
}

// function showNav() {

//     var nav = document.querySelector('.menu-icon');
//     var isOpen = false;

//     nav.addEventListener('click', function() {
//         if(!isOpen) {
//           nav.classList.add('open');
//           isOpen = true;
//           alert('Please');

//           var tagName = document.querySelector('.list');

//           tagName.style.opacity = 1;

//         }else {

//             nav.classList.remove('open');
//             isOpen = false; 

//         }

//     });


// }
// showNav();

function displayModal() {

    var registerBtn = document.querySelector('#register-with-us');
    var closeBtn = document.querySelector('#close');
    var modalBtn = document.querySelector('.Register-box');
    registerBtn.addEventListener('click', function () {
        modalBtn.classList.add('display-modal');
    });

    closeBtn.addEventListener('click', function () {
        modalBtn.classList.remove('display-modal');
    });
}

displayModal();



function displayModalBook() {


    var reg2 = document.querySelector('.book-now');
    var closeBtn2 = document.querySelector('#close');
    var modalBtn2 = document.querySelector('.Register-box');
    reg2.addEventListener('click', function () {
        modalBtn2.classList.add('display-modal');
    });

    closeBtn2.addEventListener('click', function () {
        modalBtn2.classList.remove('display-modal');
    });
}

displayModalBook();



// const links = document.querySelectorAll('.nav-link');
//     links.forEach(link => {

//        if(link.href === $(this).attr('href')) {
//         $(this).addClass('active-link');
//        }
//         link.addEventListener('click', function(){
//             $(this).addClass('active-link');
//         })
//     })


// $('a').click(function(){
//     $('a').css('background-color', '');
//     $(this).css('background-color','#1b9bff;')
// })

// const section = document.querySelectorAll('section');
// function addActiveLink (){

//     // let len = section.length;

//     // while(--len && window.scrollY <section[len].offsetTop){}
//     // links.forEach(link=>{
//     //     link.classList.remove('active-link');
//     //     link.classList.add('active-link');
//     // })


//     for(var i=0; i<section.length; i++) {

//         var windowHeight = window.innerHeight;
//         var showTop = section[i].getBoundingClientRect().top;
//         var showPoint = 0;

//         if(showTop <windowHeight-showPoint) {


//             links[i].classList.add('active-link');

//         } else {
//             links[i].classList.remove('active-link');
//         }
//     }


// }
// addActiveLink();

// window.addEventListener('scroll', addActiveLink);

var addActiveLink = function () {

    const sections = document.querySelectorAll("section");
    const navLi = document.querySelectorAll(".nav-link");
    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute("id");
            }
        });

        navLi.forEach((li) => {
            li.classList.remove("active-link");
            if (li.classList.contains(current)) {
                li.classList.add("active-link");
            }
        });
    });
}

addActiveLink();