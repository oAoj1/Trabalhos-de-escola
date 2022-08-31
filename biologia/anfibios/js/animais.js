var a = document.querySelector('#txtanimal')
var formulario = document.querySelector('#formulario')
var botao_form = document.querySelector('#botao-pesquisar')
var botao_limpar = document.querySelector('#limpar')
var resultado_animais = document.querySelector('#resultado_pesquisar')
var titulo_animal = document.querySelector('#titulo-animal')
var img = document.querySelector('#img-animal')

formulario.addEventListener('submit',enviar)
botao_limpar.addEventListener('click',remover)
botao_form.addEventListener('click',enviar)

function enviar(){
    event.preventDefault()
    var animais = a.value.toLowerCase().replaceAll(' ', '') 

    var lista_animais = {
        axolote:'axolote',
        sapo:['sapo-boi','sapoboi'],
        ra:['ra','rã'],
        salamandra:'salamandra',
        cobra_cega:['cobra-cega','cobracega'],
    }

    if(animais.length == 0){
        resultado_animais.innerHTML = `<p class="insert">Insira um valor</p>`
        img.src = ''
        titulo_animal.innerHTML = ''
        img.classList.remove('img-axolote','img-sapo','img-ra','img-salamandra','img-cobra-cega')
    }else{
        if(animais == lista_animais.axolote){

            res_animal(Axolote())

            dados_animais('Axolote','axolote.jpg','img-axolote')

        }else if(animais == lista_animais.sapo[0] || animais == lista_animais.sapo[1]){
    
            res_animal(Sapo())
    
            dados_animais('Sapo-boi','sapo.webp','img-sapo')
    
        }else if(animais == lista_animais.ra[0] || animais == lista_animais.ra[1]){
    
            res_animal(Ra())
    
            dados_animais('Rã','ra.jpg','img-ra')
    
        }else if(animais == lista_animais.salamandra){
    
            res_animal(Salamandra())
    
            dados_animais('Salamandra','salamandra.jpg','img-salamandra')
    
        }else if(animais == lista_animais.cobra_cega[0] || animais == lista_animais.cobra_cega[1]){
    
            res_animal(Cobra_cega())
    
            dados_animais('Cobra-cega','cobra-cega.webp','img-cobra-cega')
    
        }
    }
    
    focar()
    
    return lista_animais

}


//FUNCOES


function res_animal(animal){  
    return animal
}

function dados_animais(titulo,imagem,classe_foto){
    titulo_animal.textContent = titulo
    img.src = `imagens/animais/${imagem}`
    img.classList.add(`${classe_foto}`)
}

function focar(){
    a.value = ''
    a.focus()
}

function remover(){
    event.preventDefault()

    limpar()
    focar()
}

function limpar(){  
    resultado_animais.innerHTML = ''
    img.src = ''
    titulo_animal.innerHTML = ''
    img.classList.remove('img-axolote','img-sapo','img-ra','img-salamandra','img-cobra-cega')
}
