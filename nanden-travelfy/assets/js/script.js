const menuNav = document.querySelectorAll('.nav-bar a')
console.log(menuNav)

function ativarLink(link){
  const url = location.href
  const href = link.href

  if(url.includes(href)){
    link.classList.add("ativo")
  console.log(link)

}
}
menuNav.forEach(ativarLink)