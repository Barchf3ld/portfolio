function onScroll(){
  if(scrollY > 0){
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu(){
  document.body.classList.add('menu-expanded')
}

function closeMenu(){
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '40px',
  duration: 700,
  delay: 50,
  reset: false,
}).reveal(`
  #initial, 
  #initial .numbers,
  #initial .numbers .info-numbers,
  #services,
  #services .services-check,
  #about-us,
  #about-us p,
  #about-us .happy-doctor,
  #contact,
  #contact .pin,
  #contact .mail,
  #contact button,
  #contact img
`)