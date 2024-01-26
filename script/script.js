function insert(num){

    var numero = document.getElementById("numero1").innerHTML;
    document.getElementById("numero1").innerHTML = numero + num;
}

function limpar(){
    document.getElementById("numero1").innerHTML = "";
}

function calcular(){
    var resultado = document.getElementById("numero1").innerHTML;
    if(resultado){
        document.getElementById('numero1').innerHTML = eval(resultado);
    }
}