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

    }if(!nome_vazio(nome)){
        lista.push('Preencha nome ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(!idade_vazia(idade)){
        lista.push('Preencha idade ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }else if(!validar_idade(idade)){
        lista.push('Idade invalida ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(!peso_vazio(peso)){
        lista.push('Preencha peso ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }else if(!validar_peso(peso)){
        lista.push('Peso invalido ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }if(!altura_vazia(altura)){
        lista.push('Preencha altura ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }else if(!validar_altura(altura)){
        lista.push('Altura invalida ')
        erros.textContent = lista
        resultado.innerHTML = ''

    }

    if(lista.length == 0){
        if(objetivo[0].checked){
            resultados(objetivos())
            erros.innerHTML = ''
            formulario.reset()

        }else if(objetivo[1].checked){
            resultados(objetivos())
            erros.innerHTML = ''
            formulario.reset()

        }else if(objetivo[2].checked){
            resultados(objetivos())
            erros.innerHTML = ''
            formulario.reset()

        }      

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
