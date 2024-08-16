function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")


  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-black.png")
    document.getElementById('paper').classList.add('paper-black')
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    document.getElementById('paper').classList.remove('paper-black')
  }
}
