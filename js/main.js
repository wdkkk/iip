const burger_arr = document.getElementsByClassName("burger__button_child");
const nav_list = document.getElementById('nav_list');

window.addEventListener('resize', function(e) {  
    if (window.innerWidth <= 1200) {
        nav_list.classList.add('__adaptive');
    }
    else nav_list.classList.remove('__adaptive');
});


function backToTop() {
	let button = $('#to_top');

	button.on('click', (e) => {
        if ($(this).scrollTop() >= 10) {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
        }

        for (let i = 0; i <= 2; i++) {
            burger_arr[i].classList.remove("__active");
        }
    
        document.body.classList.remove('__fixed');
    
        nav_list.classList.remove('__adapitve');
        nav_list.classList.remove('__active');
	})
};
backToTop();

window.addEventListener('scroll', function(e) {
    const nav = document.getElementById('nav');

    if (window.pageYOffset >= 50) {
        nav.classList.add('__active');
        nav_list.classList.add('__blue');
    } else {
        nav.classList.remove('__active')
        nav_list.classList.remove('__blue');
    }
});

const burger = document.getElementById('burger_button');

burger.onclick = function() {

    for (let i = 0; i <= 2; i++) {
        burger_arr[i].classList.toggle("__active");
    }

    document.body.classList.toggle('__fixed');

    nav_list.classList.toggle('__adapitve');
    nav_list.classList.toggle('__active');
}

$("#nav_list").on('click', '.nav__list__el', function(){
    console.log('click')
    for (let i = 0; i <= 2; i++) {
        burger_arr[i].classList.remove("__active");
    }

    document.body.classList.remove('__fixed');

    nav_list.classList.remove('__adapitve');
    nav_list.classList.remove('__active');
 });