const botao = document.querySelector('#enviar')
const objetivo = document.getElementsByName('objetivo')
const resultado = document.querySelector('#resultado_proteinas')
const formulario = document.querySelector('#formulario')
const erros = document.querySelector('#erros')

botao.addEventListener('click',calcular)
botao.addEventListener('submit',calcular)


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


    if(objetivo[0].checked){
        resultados(objetivos())

    }else if(objetivo[1].checked){
        resultados(objetivos())

    }else if(objetivo[2].checked){
        resultados(objetivos())

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
