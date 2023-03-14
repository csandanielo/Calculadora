function insert(numero){
	const num = document.getElementById('resultado').innerHTML;
	document.getElementById('resultado').innerHTML = num + numero;
}

function clean() {
    document.getElementById('resultado').innerHTML = "";
}

function calcular() {
    const resultado = document.getElementById('resultado').innerHTML;
    if(resultado) {
            document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else {
        document.getElementById('resultado').innerHTML = "Erro"
    }
}