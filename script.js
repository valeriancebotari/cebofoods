// MENU
const divtoShow = 'nav .menu';
const divPopup = document.querySelector(divtoShow);
const divTrigger = document.querySelector('.m-trigger');

divTrigger.addEventListener('click', () => {
    setTimeout( () => {
        if (!divPopup.classList.contains('show')) {
            divPopup.classList.add('show');
            document.body.classList.add('menu-visible');
        }
    }, 250); // end setTimeout
});


// automatically close by clicking outside of menu
document.addEventListener('click', (e) => {
   const isClosest = e.target.closest(divtoShow);
   
   if (!isClosest && divPopup.classList.contains('show')) {
       divPopup.classList.remove('show');
       document.body.classList.remove('menu-visible');  
   }
});

// Search
const sTrigger = document.querySelector('.s-trigger');
const addclass = document.querySelector('.site');
sTrigger.addEventListener('click', () => {
    addclass.classList.toggle('showsearch');
});

// Slider 
const sliderThumb = new Swiper('.thumb-nav', {
    spaceBetween: 10,
    slidesPerView: 3,
    slidesPerGroup: false,
    breakpoints: {
        992: {
            direction: 'vertical'
        }
    }
});

const theSlider = new Swiper('.thumb-big', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
    },
    thumbs: {
        swiper: sliderThumb,
    }
});

// Tabbed Products
const tabbedNav = new Swiper('.tnav', {
    spaceBetween: 20,
    slidesPerView: 6,
    centeredSlides: true,
    slidesPerGroup: false,    
});

const theTab = new Swiper('.tabbed-item', {
    loop: true,
    slidesPerView: 1,
    autoHeight: true,
    thumbs: {
        swiper: tabbedNav,
    }
});
