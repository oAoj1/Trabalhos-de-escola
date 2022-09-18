const botao = document.querySelector('#enviar')
const limpar = document.querySelector("#limpar")
const objetivo = document.getElementsByName('objetivo')
const resultado = document.querySelector('#resultado_proteinas')
const formulario = document.querySelector('#formulario')
const erros = document.querySelector('#erros')

botao.addEventListener('click',calcular)
botao.addEventListener('submit',calcular)
limpar.addEventListener("click",limpando)

/* FUNÇÕES */


function calcular(){
    event.preventDefault()

    const n = document.querySelector('#nome')
    const a = document.querySelector('#altura')
    const p = document.querySelector('#peso')
    
    const nome = n.value
    const peso = p.value
    const altura = a.value

    const imc = Math.round(peso / (altura*altura))

    if(n.value.length == 0 && a.value.length == 0 && p.value.length == 0){
        resultado.innerHTML = 'Preencha todos os dados'

    }else if(n.value.length == 0 || a.value.length == 0 || p.value.length == 0){
        resultado.innerHTML = 'Dados insuficientes'

    }else{
        if(objetivo[0].checked){
            resultados(objetivos())
    
        }else if(objetivo[1].checked){
            resultados(objetivos())
    
        }else if(objetivo[2].checked){
            resultados(objetivos())
    
        }

        formulario.reset()

    }

    function resultados(){ 
        resultado.innerHTML = `<ion-icon name="pricetag"></ion-icon><b>${nome}</b><br>
        consumir <ion-icon name="pizza"></ion-icon><b>${objetivos(peso)}</b> G de proteína por dia <br>
        IMC de <b>${imc}</b> classificado <b>${classificaçao_imc(imc)}</b><ion-icon name="body"></ion-icon>
        `
    }

}  

function limpando(){
    event.preventDefault()
    resultado.innerHTML = ''
    formulario.reset()
}
