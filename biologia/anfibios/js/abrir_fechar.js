//FUNCOES

function ativar(objeto=0,resultado=0,girar=0){
    objeto.onclick = function(){
        resultado.classList.toggle('ativar')
        girar.classList.toggle('girar')
    }
}

/*resultados */
var res_oquesao = document.querySelector('#resultado_oquesao')
var res_gerais = document.querySelector('#resultado_gerais')
var res_respirar = document.querySelector('#resultado_respiracao')
var res_digestao = document.querySelector('#resultado_digestao')
var res_reproducao = document.querySelector('#resultado_reproducao')

/* girar*/
var mais_gerais = document.querySelector('.mais_gerais')
var mais_oquesao = document.querySelector('.mais_oquesao')
var mais_respirar = document.querySelector('.mais_respiracao')
var mais_digestao = document.querySelector('.mais_digestao')
var mais_reproducao = document.querySelector('.mais_reproducao')

/*objeto */
var oquesao = document.querySelector('#oquesao')
var gerais = document.querySelector('#gerais')
var respiracao = document.querySelector('#respiracao')
var digestao =  document.querySelector('#digestao')
var reproducao = document.querySelector('#reproducao')

//aplicando as FUNCOES
var resultado_oquesao = ativar(oquesao,res_oquesao,mais_oquesao)
var resultado_gerais = ativar(gerais,res_gerais,mais_gerais)
var resultado_respiracao = ativar(respiracao,res_respirar,mais_respirar)
var resultado_digestao = ativar(digestao,res_digestao,mais_digestao)
var resultado_reproducao = ativar(reproducao,res_reproducao,mais_reproducao)
