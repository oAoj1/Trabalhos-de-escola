const botao = document.querySelector('#enviar')
botao.addEventListener('click',calcular)
botao.addEventListener('submit',calcular)

const objetivo = document.getElementsByName('objetivo')
const resultado = document.querySelector('#resultado_proteinas')
const formulario = document.querySelector('#formulario')
const erros = document.querySelector('#erros')


/* FUNÇÕES */


function calcular(){
    event.preventDefault()

    if(objetivo[0].checked){
        resultados(objetivos())
        erros.innerHTML = ''

    }else if(objetivo[1].checked){
        resultados(objetivos())
        erros.innerHTML = ''

    }else if(objetivo[2].checked){
        resultados(objetivos())
        erros.innerHTML = ''

    }else{
        erros.innerHTML = 'Assinale um objetivo'
        limpar_resultado()

    }
    
    formulario.reset()

}

function resultados(){
    const n = document.querySelector('#nome')
    const i = document.querySelector('#idade')
    const a = document.querySelector('#altura')
    const p = document.querySelector('#peso')
    
    const nome = n.value
    const idade = i.value
    const peso = p.value
    const altura = a.value

    const imc = Math.round(peso / (altura*altura))

    resultado.innerHTML = `
    <p>
        ${objetivos(peso)} G de proteína <br>
        Nome: ${nome} //
        Idade: ${idade} <br>
        Altura: ${altura} //
        Peso: ${peso} <br> 
        IMC: ${imc} //
        Classificação: ${classificaçao_imc(imc)}
    </p>` 

} 
