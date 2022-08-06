var fle = document.querySelectorAll('.flecha')
var fec = document.querySelectorAll('.fechar')

for(var c in fec){
    //selecionar cada item de FECHAR e de FLECHA
    var fechar = fec[c]
    var flecha = fle[c]

    //selecionar as LI dos CONTEUDOS
    var expansionismo = document.querySelector('.exp')
    var revolucao = document.querySelector('.rev')
    var guerra = document.querySelector('.gue')

    //selecionar os RESULTADOS dos conteudos
    var res_expansionismo = document.querySelector('#res_exp') 
    var res_revolucao = document.querySelector('#res_rev')
    var res_guerra = document.querySelector('#res_gue')

    //funcao FECHAR
    fechar.onclick = function(){
        res_expansionismo.classList.remove('ativar')
        res_revolucao.classList.remove('ativar')
        res_guerra.classList.remove('ativar')
    }

    //expansionismo
    expansionismo.onclick = function(){
        res_expansionismo.classList.toggle('ativar')
        res_revolucao.classList.remove('ativar')
        res_guerra.classList.remove('ativar')
    }

    //revolucao
    revolucao.onclick = function(){
        res_revolucao.classList.toggle('ativar')
        res_expansionismo.classList.remove('ativar')
        res_guerra.classList.remove('ativar')
    }

    //guerra
    guerra.onclick= function(){
        res_guerra.classList.toggle('ativar')
        res_expansionismo.classList.remove('ativar')
        res_revolucao.classList.remove('ativar')
    }

    //
}



