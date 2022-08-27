const menuitens = document.querySelectorAll('.menu ul li a')
var botao = document.querySelector('#voltar')
botao.addEventListener('click',voltar)

function scrollar(evento){
    event.preventDefault()
    const elementos = evento.target
    const id = elementos.getAttribute('href')
    const to = document.querySelector(id).offsetTop

    window.scroll({
        top:to,
        behavior:'smooth',
    })
}

function voltar(){
    window.scroll(0,0)
}

menuitens.forEach(item =>{
    item.addEventListener('click',scrollar)
})
