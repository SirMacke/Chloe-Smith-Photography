var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000);
}

var pages = ['home', 'work', 'about', 'blog', 'contact'];

function newPage(name) {
  for (let i = 0; i < pages.length; i++) {
    document.getElementById(pages[i]).style.display = 'none';
  }

  document.getElementById(name).style.display = 'block';
}
