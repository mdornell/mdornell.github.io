// OBS : O arquivo js só foi foito pois estarei ultilizando o projeto também como portifolio em meu github 
// Então já estou fazendo algo mais completo

let btnMenu = document.getElementById('btn-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')


btnMenu.addEventListener('click', ()=> {
    menu.classList.add('abrir-menu')
})

menu.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})
overlay.addEventListener('click', ()=> {
    menu.classList.remove('abrir-menu')
})