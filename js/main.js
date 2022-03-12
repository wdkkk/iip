function backToTop() {
	let button = $('#to_top');

	button.on('click', (e) => {
        if ($(this).scrollTop() >= 10) {
            e.preventDefault();
            $('html').animate({scrollTop: 0}, 1000);
        }
	})
};
backToTop();

window.addEventListener('scroll', function(e) {
    const nav = document.getElementById('nav');
    
    if (window.pageYOffset >= 50) nav.classList.add('__active');
    else nav.classList.remove('__active')
});