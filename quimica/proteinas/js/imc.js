function calcular_imc(peso,altura){
    var imc = peso / (altura*altura)
    return imc
}

function classificaçao_imc(imc){
    if(imc < 18.5){
        resultado.innerHTML = 'Abaixo do peso'
    }
    if(imc >= 18.5 && imc <= 24.9){
        resultado.innerHTML += 'Peso normal'
    }
    if(imc >= 25 && imc <= 29.9){
        resultado.innerHTML += 'Sobre peso'
    }
    if(imc >= 30 && imc <= 34.9){
        resultado.innerHTML += 'Obesidade grau 1'
    }
    if(imc >= 35 && imc <= 39.9){
        resultado.innerHTML += 'Obesidade grau 2'
    }
    if(imc >= 40){
        resultado.innerHTML += 'Obesidade grau 3'
    }

}
