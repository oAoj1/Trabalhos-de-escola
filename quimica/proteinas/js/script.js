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
        resultado.innerHTML = 'Preencha nome, peso e altura'

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
        resultado.innerHTML = `
        <strong>${objetivos(peso)} G</strong> de proteína <br>
        <strong> Nome:</strong> ${nome}
        <strong> Altura:</strong> ${altura}  
        <strong> Peso:</strong> ${peso} <br>
        <strong> IMC:</strong> ${imc}
        <strong> Classificação:</strong> ${classificaçao_imc(imc)} 
        `

    }

}  

function limpando(){
    event.preventDefault()
    resultado.innerHTML = ''
    formulario.reset()
}
