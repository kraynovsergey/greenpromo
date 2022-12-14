(function() {
	'use strict';

	window.addEventListener('scroll', () => {
		if ( document.querySelector('.header') ) {
			const header = document.querySelector('.header');

			document.documentElement.scrollTop <= 0 ?
				header.classList.remove('_scroll') : header.classList.add('_scroll');
		}
	});

	if ( document.querySelector('.clients__carousel') ) {
		const clientCarousel = document.querySelector('.clients__carousel');

		tns({
			container: clientCarousel,
			loop: false,
			gutter: 22,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: '.clients__arrows',
			fixedWidth: 208
		});
	}

	if ( document.querySelector('.case__carousel') ) {
		const caseCarousel = document.querySelector('.case__carousel');
		let caseArrows = document.querySelectorAll('.case__arrows._mobile .arrows__item');

		const caseCarouselTiny = tns({
			items: 1,
			container: caseCarousel,
			loop: true,
			gutter: 0,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: '.case__arrows._desktop',
			autoHeight: true
		});

		caseArrows.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.contains('_prev') ? caseCarouselTiny.goTo('prev') : caseCarouselTiny.goTo('next');
			});
		});
	}

	if ( document.querySelector('.reviews__carousel') ) {
		const reviewsCarousel = document.querySelector('.reviews__carousel');

		tns({
			container: reviewsCarousel,
			loop: false,
			gutter: 80,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: '.reviews__arrows',
			items: 2,
			responsive: {
				0: {
					fixedWidth: 240,
					gutter: 18
				},
				767: {
					items: 2,
					fixedWidth: false,
					gutter: 80
				}
			}
		});
	}

	window.addEventListener("DOMContentLoaded", () => {
		[].forEach.call( document.querySelectorAll('input[type="tel"]'), (input) => {
			let keyCode;

			function mask(event) {
				event.keyCode && (keyCode = event.keyCode);
				let pos = this.selectionStart;
				if (pos < 3) event.preventDefault();
				let matrix = "+7 (___) ___-__-__",
					i = 0,
					def = matrix.replace(/\D/g, ""),
					val = this.value.replace(/\D/g, ""),
					new_value = matrix.replace(/[_\d]/g, function(a) {
						return i < val.length ? val.charAt(i++) || def.charAt(i) : a
					});
				i = new_value.indexOf("_");
				if (i != -1) {
					i < 5 && (i = 3);
					new_value = new_value.slice(0, i)
				}
				let reg = matrix.substr(0, this.value.length).replace(/_+/g,
					function(a) {
						return "\\d{1," + a.length + "}"
					}).replace(/[+()]/g, "\\$&");
				reg = new RegExp("^" + reg + "$");
				if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
				if (event.type == "blur" && this.value.length < 5)  this.value = ""
			}

			input.addEventListener("input", mask, false);
			input.addEventListener("focus", mask, false);
			input.addEventListener("blur", mask, false);
			input.addEventListener("keydown", mask, false);
		});
	});

	if ( document.querySelector('.articles__carousel') ) {
		const articlesCarousel = document.querySelector('.articles__carousel');

		tns({
			container: articlesCarousel,
			loop: false,
			gutter: 70,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: false,
			items: 3,
			responsive: {
				0: {
					fixedWidth: 235,
					gutter: 18
				},
				767: {
					items: 3,
					fixedWidth: false,
					gutter: 30
				},
				991: {
					items: 3,
					fixedWidth: false,
					gutter: 70
				}
			}
		});
	}

	if ( document.querySelector('.goal__carousel') ) {
		const goalCarousel = document.querySelector('.goal__carousel');

		tns({
			container: goalCarousel,
			loop: false,
			gutter: 60,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			nav: false,
			controls: true,
			controlsContainer: '.goal__arrows',
			items: 3,
			responsive: {
				0: {
					fixedWidth: 300,
					gutter: 14
				},
				767: {
					items: 2,
					fixedWidth: false,
					gutter: 30
				},
				991: {
					items: 3,
					fixedWidth: false,
					gutter: 60
				}
			}
		});
	}

	if ( document.querySelector('.complex__carousel') ) {
		const complexCarousel = document.querySelector('.complex__carousel');

		let complexArrows = document.querySelectorAll('.complex__arrows._mobile .arrows__item');

		const complexCarouselTiny = tns({
			container: complexCarousel,
			loop: false,
			mouseDrag: true,
			swipeAngle: false,
			speed: 1000,
			//nav: true,
			//navContainer: '.complex__dots',
			controls: true,
			controlsContainer: '.complex__arrows._desktop',
			responsive: {
				0: {
					fixedWidth: false,
					items: 1,
					autoHeight: true
				},
				991: {
					fixedWidth: 824,
					gutter: 30,
					autoHeight: false
				}
			}
		});

		complexArrows.forEach((item) => {
			item.addEventListener('click', () => {
				item.classList.contains('_prev') ? complexCarouselTiny.goTo('prev') : complexCarouselTiny.goTo('next');
			});
		});
	}

})()