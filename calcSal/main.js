function salarioLiquido(){
    const salario = String(document.getElementById("salario").value);
    let sliquido;
    if(salario <= 1300){
        sliquido = salario - (salario * 0.075);
    } else if(salario <= 2600){
        sliquido = salario - ((salario * 0.0827) + salario* 0.0086);
    } else {
        sliquido = salario -((salario * 0.0954)+ salario * 0.045);
    }
    const resp = `Salario liquido é R$${sliquido}`;
    document.getElementById("result").innerHTML = resp;
}