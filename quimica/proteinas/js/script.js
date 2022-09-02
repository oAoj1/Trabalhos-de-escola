/*
Consumo mais baixo de proteína (1,0 a 1,4g de ptn/Kg/dia);
Consumo médio de proteína (1,6 a 1,8 g de ptn/Kg/dia);
Alto consumo de proteína (> 2,0 g de Ptn/kg/dia).

considera criança até 10 anos, 
adolescente estão entre 10 e 19 anos, 
jovens entre 15 e 24 anos,
adulto jovem de 25 a 44 anos, 
adultos de 45 a 59 anos,
idosos de 60 a 90 anos
muito idosas acima de 90 anos.
*/

function clicar(){
    event.preventDefault()

    var n = document.querySelector('#nome')
    var i = document.querySelector('#idade')
    var a = document.querySelector('#altura')
    var p = document.querySelector('#peso')

    var objetivo = document.getElementsByName('objetivo')

    var botao = document.querySelector('#enviar')
    var formulario = document.querySelector('#formulario')

    var peso = p.value
    var altura = a.value

    var imc = Math.round(peso / (altura*altura))
    var perder_peso = Math.round(peso * 0.75)
    var manter_peso = Math.round(peso * 1.2)
    var ganhar_peso = Math.round(peso * 2.0)

    if(objetivo[0].checked){
        
    }

    if(objetivo[1].checked){
        
    }

    if(objetivo[2].checked){
        
    }

}
