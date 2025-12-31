function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  // Pegar a tag img
  const img = document.querySelector("#profile img")
  // Substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se não tiver light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  if (html.classList.contains("light")) {
    img.setAttribute("alt", "Foto de um entardecer")
  } else {
    img.setAttribute("alt", "Foto de um anoitecer")
  }
}
