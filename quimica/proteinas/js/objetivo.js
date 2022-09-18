function objetivos(peso){

    if(objetivo[0].checked){
        const perder_peso = Math.round(peso * 0.8)
        return perder_peso

    }else if(objetivo[1].checked){
        const manter_peso = Math.round(peso * 1.0)
        return manter_peso

    }else if(objetivo[2].checked){
        const ganhar_peso = Math.round(peso * 2.0)
        return ganhar_peso
        
    }

}
