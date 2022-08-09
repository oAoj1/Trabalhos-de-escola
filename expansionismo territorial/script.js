
var guerra = document.querySelector('.gue')
var res_guerra = document.querySelector('#res_gue')
var fechar_gue = document.querySelector('.fechar')

var francisco = document.querySelector('#francisco')
var res_francisco = document.querySelector('#res_fran')
var fechar_fran = document.querySelector('.fechar-fran')

/* */

function pesquisa(tema,resultado1=0,resultado2=0){
    var abrindo = tema.onclick = function(){
        resultado1.classList.toggle('ativar')
        resultado2.classList.remove('ativar') 
    }
    return abrindo
}

var gue = pesquisa(guerra,res_guerra,res_francisco)
var fran = pesquisa(francisco,res_francisco)
var fg = pesquisa(fechar_gue,res_guerra)
var ff = pesquisa(fechar_fran,res_francisco)
