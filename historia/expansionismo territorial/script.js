
var guerra = document.querySelector('.gue')
var res_guerra = document.querySelector('#res_gue')
var fechar_gue = document.querySelector('.fechar')

var revolucao = document.querySelector('.rev')
var res_revolucao = document.querySelector('#res_rev')
var fechar_rev = document.querySelector('.fechar_rev')

var francisco = document.querySelector('#francisco')
var res_francisco = document.querySelector('#res_fran')
var fechar_fran = document.querySelector('.fechar-fran')

var vladimir = document.querySelector('#vladimir')
var res_vladimir = document.querySelector('#res_vlad')
var fechar_vlad = document.querySelector('.fechar-vlad')

/* */

function abrir(tema,resultado){
    var abrindo = tema.onclick = function(){
        resultado.classList.toggle('ativar')
    }
    return abrindo
}

function fechar(tema,resultado){
    var fechando = tema.onclick = function(){
        resultado.classList.remove('ativar')
    }
    return fechando
}

function AF(tema,resultado1,resultado2){
    var abfe = tema.onclick = function(){
        resultado1.classList.toggle('ativar')
        resultado2.classList.remove('ativar')
    }
    return abfe
}

//guerra e francisco
var ag = AF(guerra,res_guerra,res_francisco)
var af = AF(francisco,res_francisco,res_vladimir)
var fg = fechar(fechar_gue,res_guerra)
var ff = fechar(fechar_fran,res_francisco)

//revolucao e vladimir
var ar = AF(revolucao,res_revolucao,res_vladimir)
var av = AF(vladimir,res_vladimir,res_francisco)
var fr = fechar(fechar_rev,res_revolucao)
var fv = fechar(fechar_vlad,res_vladimir)
