const botao = document.querySelector('#enviar')
botao.addEventListener('click',calcular)
botao.addEventListener('submit',calcular)

const resultado = document.querySelector('#resultado_proteinas')
const formulario = document.querySelector('#formulario')
const objetivo = document.getElementsByName('objetivo')

/*funcoes */

function calcular(){
    event.preventDefault()

    if(objetivo[0].checked){
        resultados(objetivos())

    }else if(objetivo[1].checked){
       resultados(objetivos())

    }else if(objetivo[2].checked){
        resultados(objetivos())

    }else{
        resultado.innerHTML = 'Assinale uma alternativa'
    }

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
    ${objetivos(peso)} G de proteína <br>
    Nome: ${nome} //
    Idade: ${idade} <br>
    Altura: ${altura} //
    Peso: ${peso} <br> 
    IMC: ${imc} //
    Classificação: ${classificaçao_imc(imc)}
    ` 
   
} 

/* Consumo mais baixo de proteína (1,0 a 1,4g de ptn/Kg/dia);
Consumo médio de proteína (1,6 a 1,8 g de ptn/Kg/dia);
Alto consumo de proteína (> 2,0 g de Ptn/kg/dia).

considera criança até 10 anos, 
adolescente estão entre 10 e 19 anos, 
jovens entre 15 e 24 anos,
adulto jovem de 25 a 44 anos, 
adultos de 45 a 59 anos,
idosos de 60 a 90 anos
muito idosas acima de 90 anos.*/

