var fec = document.querySelectorAll('.fechar')

for(var c in fec){
    //selecionar cada item de FECHAR e de FLECHA
    var fechar = fec[c]

    //selecionar as LI dos CONTEUDOS
    var francisco = document.querySelector('#francisco')
    var vladimir = document.querySelector('#vladimir')
    var revolucao = document.querySelector('.rev')
    var guerra = document.querySelector('.gue')

    //selecionar os RESULTADOS dos conteudos
    var res_vladimir = document.querySelector('#res_vlad')
    var res_francisco = document.querySelector('#res_fran')
    var res_revolucao = document.querySelector('#res_rev')
    var res_guerra = document.querySelector('#res_gue')

    //funcao FECHAR
    var fec_fran = document.querySelector('.fechar-fran')
    var fec_vlad = document.querySelector('.fechar-vlad')
    fechar.onclick = function(){
        res_vladimir.classList.remove('ativar')
        res_revolucao.classList.remove('ativar')
        res_guerra.classList.remove('ativar')
        res_francisco.classList.remove('ativar')
    }

    fec_fran.onclick = function(){
        res_francisco.classList.remove('ativar')
    }
    fec_vlad.onclick = function(){
        res_vladimir.classList.remove('ativar')
    }

    //revolucao
    revolucao.onclick = function(){
        res_revolucao.classList.toggle('ativar')
        res_guerra.classList.remove('ativar')
        res_francisco.classList.remove('ativar')
        res_vladimir.classList.remove('ativar')
    }

    //guerra
    guerra.onclick= function(){
        res_guerra.classList.toggle('ativar')
        res_revolucao.classList.remove('ativar')
        res_francisco.classList.remove('ativar')
        res_vladimir.classList.remove('ativar')
    }

    //francisco
    francisco.onclick = function(){
        res_francisco.classList.toggle('ativar')
    }

    //vladimir
    vladimir.onclick = function(){
        res_vladimir.classList.toggle('ativar')
    }

}

