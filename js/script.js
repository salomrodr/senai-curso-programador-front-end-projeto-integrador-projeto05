function calcularIMC() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
  
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {

        alert('Por favor, digite valores válidos para peso e altura.');
        document.getElementById('nome').value="";
        document.getElementById('peso').value="";
        document.getElementById('altura').value="";

        return;

    }
    
    var imc = peso / (altura * altura);
    var resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = imc.toFixed(2);

    var resultadoElement = document.getElementById('resultado');
    var resultadoContainer = document.getElementById('resultado-container');
    var resultadoTexto = nome + ', seu IMC é ' + imc.toFixed(2) + ' ';
  
    if (imc < 18.5) {
        resultadoTexto += '(Abaixo do peso).';
    } 	
    else if (imc < 24.9) {
        resultadoTexto += '(Peso ideal).';
    } else if (imc < 29.9) {
        resultadoTexto += '(Sobrepeso).';
    } else if (imc < 34.9) {
        resultadoTexto += '(Obesidade I).';
    } else if (imc < 39.9) {
        resultadoTexto += '(Obesidade II).';
    } else {
        resultadoTexto += '(Obesidade III).';
    }
  
    resultadoElement.innerHTML = resultadoTexto;
    resultadoContainer.style.display = 'block';
  
  }