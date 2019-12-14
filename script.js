// const plus = document.querySelector(".product-form");

// plus.on('click', function (event) {
//     event.preventDefault();

//     const $this = $(this);
//     const $input = $this.closest('form').find('input');
//     const value = parseInt($input.val());

//     if (value > 1) {
//         value = value - 1;
//     } else {
//         value = 0;
//     }

//     $input.val(value);

// });

// $('.plus').on('click', function (event) {
//     event.preventDefault();
//     const $this = $(this);
//     const $input = $this.closest('div').find('input');
//     const value = parseInt($input.val());

//     if (value < 99) {
//         value = value + 1;
//     } else {
//         value = 99;
//     }

//     $input.val(value);
// });

//Gallery slideshow for products page
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  const slides = document.getElementsByClassName("slides");
  const dots = document.getElementsByClassName("dots");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

$('.minus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value > 1) {
    value = value - 1;
  } else {
    value = 0;
  }

  $input.val(value);

});

$('.plus-btn').on('click', function(e) {
  e.preventDefault();
  var $this = $(this);
  var $input = $this.closest('div').find('input');
  var value = parseInt($input.val());

  if (value < 100) {
    value = value + 1;
  } else {
    value =100;
  }

  $input.val(value);
});

$('.like-btn').on('click', function() {
  $(this).toggleClass('is-active');
});