const menuitens = document.querySelectorAll('.menu ul li a')

menuitens.forEach(item =>{
    item.addEventListener('click',scrollar)
})

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

var botao = document.querySelector('#voltar')
botao.addEventListener('click',voltar)

function voltar(){
    window.scroll(0,0)
}

/* */

//puxando do HTML para JS (DOM)
var ordens_lista = document.querySelector('.ordens')
var oquesao = document.querySelector('#oquesao')
var mais_oquesao = document.querySelector('.mais_oquesao')
var res_ordens = document.querySelector('#resultado_ordens')
var res_oquesao = document.querySelector('#resultado_oquesao')

//colocando as FUNCOES
var resultado_ordens = ativar(ordens_lista,res_ordens)
var resultado_oquesao = ativar(oquesao,res_oquesao,mais_oquesao)

//criando as FUNCOES
function ativar(objeto,resultado,girar=0){
    objeto.onclick = function(){
        resultado.classList.toggle('ativar')
        girar.classList.toggle('girar')
    }
}
