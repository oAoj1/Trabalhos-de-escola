//FUNCOES

function ativar(objeto,resultado,girar=0){
    objeto.onclick = function(){
        resultado.classList.toggle('ativar')
        girar.classList.toggle('girar')
    }
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