//FUNCOES

function ativar(objeto,resultado,girar=0){
    objeto.onclick = function(){
        resultado.classList.toggle('ativar')
        girar.classList.toggle('girar')
    }
}

function Puxar_um(um){
    return document.querySelector(um)
}

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



const menuitens = document.querySelectorAll('.menu ul li a')

menuitens.forEach(item =>{
    item.addEventListener('click',scrollar)
})

var botao = document.querySelector('#voltar')
botao.addEventListener('click',voltar)

function voltar(){
    window.scroll(0,0)
}




/*resultados */
var res_oquesao = Puxar_um('#resultado_oquesao')
var res_ordens = Puxar_um('#resultado_ordens')
var res_gerais = Puxar_um('#resultado_gerais')
var res_respirar = Puxar_um('#resultado_respiracao')
var res_digestao = Puxar_um('#resultado_digestao')
var res_reproducao = Puxar_um('#resultado_reproducao')

/* plus*/
var mais_gerais = Puxar_um('.mais_gerais')
var mais_oquesao = Puxar_um('.mais_oquesao')
var mais_respirar = Puxar_um('.mais_respiracao')
var mais_digestao = Puxar_um('.mais_digestao')
var mais_reproducao = Puxar_um('.mais_reproducao')

/*itens */
var ordens_lista = Puxar_um('.ordens')
var oquesao = Puxar_um('#oquesao')
var gerais = Puxar_um('#gerais')
var respiracao = Puxar_um('#respiracao')
var digestao =  Puxar_um('#digestao')
var reproducao = Puxar_um('#reproducao')

//colocando as FUNCOES
var resultado_oquesao = ativar(oquesao,res_oquesao,mais_oquesao)
var resultado_ordens = ativar(ordens_lista,res_ordens)
var resultado_gerais = ativar(gerais,res_gerais,mais_gerais)
var resultado_respiracao = ativar(respiracao,res_respirar,mais_respirar)
var resultado_digestao = ativar(digestao,res_digestao,mais_digestao)
var resultado_reproducao = ativar(reproducao,res_reproducao,mais_reproducao)

/*FORMULARIO */

var formulario = Puxar_um('#formulario')
var botao_form = Puxar_um('#botao-pesquisar')
var resultado_animais = Puxar_um('#resultado_pesquisar')
var a = Puxar_um('#txtanimal')

formulario.addEventListener('submit',enviar)
botao_form.addEventListener('click',enviar)

function enviar(){
    event.preventDefault()
    var animais = a.value.toLowerCase()

    var lista_animais = {
        axolote:'axolote',
        sapo:'sapo',
        ra:'rã',
        salamandra:'salamandra',
        cobra_cega:'cobra-cega',
    }

    if(animais.length == 0){
        alert('Coloque um valor')
    }else if(animais == lista_animais.axolote){
        alert('axolote')
    }else if(animais == lista_animais.sapo){
        alert('sapo')
    }else if(animais == lista_animais.ra){
        alert('ra')
    }else if(animais == lista_animais.salamandra){
        alert('salamandra')
    }else if(animais == lista_animais.cobra_cega){
        alert('cobra cega')
    }else{
        alert('valor invalido, ou escrito errado')
    }

    a.value = ''
    a.focus()

    return lista_animais
}

function res_animal(ordem,familia,genero,especie,habitat,alimentacao){
    return resultado_animais.innerHTML = `
    <ul>
        <li>Reino: Animalia</li>
        <li>Filo: Chordata</li>
        <li>Classe: Amphibia</li>
        <li>Ordem: ${ordem}</li>
        <li>Familia: ${familia}</li>
        <li>Gênero: ${genero}</li>
        <li>Espécie: ${especie}</li>
        <li>Alimentação: ${alimentacao}</li>
        <li>Habitat: ${habitat}</li>
    </ul>` 
}