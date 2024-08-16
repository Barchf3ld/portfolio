window.addEventListener('scroll', onScroll)
window.addEventListener('resize', onWidth)

onScroll()
function onScroll(){
  if(scrollY > 0){
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll')
  }
}

function openAnimation(){
  document.getElementById('buttonstroke').classList.toggle('button-animation')
  document.body.classList.toggle('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

var dinamico = document.querySelector('.dinamico');
function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i) =>{
    setTimeout(() => elemento.innerHTML += letra, 90 * i);
  });
}
setInterval(() => {typeWriter(dinamico)}, 3900);


onWidth()
function onWidth (){
  var largura = window.innerWidth;

  if (largura >= 1024){
      document.getElementById('card-none').classList.add('card-experiences')
  }else{
      document.getElementById('card-none').classList.remove('card-experiences')
  }
}


ScrollReveal({
  origin: 'bottom',
  distance: '40px',
  duration: 1200,
  delay: 30,
  reset: false,
}).reveal(`
  .initial h3,
  .initial h1,
  .initial .estatico,
  .initial p,
  .initial a,
  .about-me,
  .about-me .about-me-img,
  .about-me .about-me-text h3,
  .about-me .about-me-text p,
  .experiences,
  .experiences .experiences-languages,
  .experiences .experiences-languages .card-experiences,
  .experiences .experiences-graphics,
  .experiences .experiences-graphics .card-experiences,
  .applications,
  .applications .card-applications,
  .contact .contact-content,
  .contact .contact-content h3,
  .contact .contact-content p,
  .contact .contact-contet a
`)

ScrollReveal({
  origin: 'center',
  distance: '0',
  duration: 500,
  delay: 40,
  reset: false,
}).reveal(`
  .animation-svg
`)

ScrollReveal({
  origin: 'bottom',
  distance: '20px',
  duration: 900,
  delay: 100,
  reset: false,
}).reveal(`
  .numbers-animation,
  .numbers-animation .numbers-one,
  .numbers-animation .numbers-one .numbers-two
`)
