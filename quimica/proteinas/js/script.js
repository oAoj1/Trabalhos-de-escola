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
    const i = document.querySelector('#idade')
    const a = document.querySelector('#altura')
    const p = document.querySelector('#peso')
    
    const nome = n.value
    const idade = i.value
    const peso = p.value
    const altura = a.value

    const imc = Math.round(peso / (altura*altura))

    const lista = []

    if(!validar_objetivos(objetivo)){
        erros.innerHTML = 'Preencha um objetivo '
        resultado.innerHTML = ''

    }if(!validar_nome(nome)){
        lista.push('Preencha nome ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(!validar_idade(idade)){
        lista.push('Preencha idade ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(!validar_peso(peso)){
        lista.push('Preencha peso ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(!validar_altura(altura)){
        lista.push('Preencha altura ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(lista.length == 0){
        if(objetivo[0].checked){
            resultados(objetivos())
            erros.innerHTML = ''

        }else if(objetivo[1].checked){
            resultados(objetivos())
            erros.innerHTML = ''

        }else if(objetivo[2].checked){
            resultados(objetivos())
            erros.innerHTML = ''

        }

        formulario.reset()

    }

    function resultados(){ 
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
       
}
