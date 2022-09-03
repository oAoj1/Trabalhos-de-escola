function calcular_imc(peso,altura){
    var imc = peso / (altura*altura)
    return imc
}

function classificaçao_imc(imc){
    if(imc < 18.5){
        return 'Abaixo do peso'
    }
    if(imc >= 18.5 && imc <= 24.9){
        return 'Peso normal'
    }
    if(imc >= 25 && imc <= 29.9){
        return 'Sobre peso'
    }
    if(imc >= 30 && imc <= 34.9){
        return 'Obesidade grau 1'
    }
    if(imc >= 35 && imc <= 39.9){
        return 'Obesidade grau 2'
    }
    if(imc >= 40){
        return 'Obesidade grau 3'
    }

}
