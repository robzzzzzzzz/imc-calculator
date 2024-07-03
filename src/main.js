import './style.css';

function setupWeightListeners() {
    const inputs = document.querySelectorAll('.decimalNumber');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            let value = this.value.trim();
            
            value = value.replace(/\D/g, '');
            value = value.slice(0, 4);
            
            if (value.length > 1) {
                value = value.slice(0, value.length - 1) + '.' + value.slice(value.length - 1);
            }
            this.value = value;
        });
    });
}

function setupHeightListeners() {
    const inputs = document.querySelectorAll('.decimalNumberHeight');

    inputs.forEach(function(input) {
        input.addEventListener('input', function() {
            let value = this.value.trim();
            
            value = value.replace(/\D/g, '');
            value = value.slice(0, 3);
            
            if (value.length > 1) {
                value = value.slice(0, value.length - 2) + ',' + value.slice(value.length - 2);
            }
            
            this.value = value;
        });
    });
}

function imc() {
    document.querySelector('.buttonResult').addEventListener('click', function() {
        const inputs = {
            heightOne: parseFloat(document.querySelector('.buttonHeightOne').value.replace(',', '.')),
            heightTwo: parseFloat(document.querySelector('.buttonHeightTwo').value.replace(',', '.')),
            weight: parseFloat(document.querySelector('.buttonWeight').value.replace(',', '.'))
        };

        if (isNaN(inputs.heightOne) || isNaN(inputs.heightTwo) || isNaN(inputs.weight) || inputs.weight === 0) {
            alert('Por favor, insira valores válidos e certifique-se de que o divisor não seja zero.');
            return;
        }

        const result = inputs.weight / (inputs.heightOne * inputs.heightTwo) ;
        
        if (result <= 18.5 ) {
            document.querySelector('.result').innerHTML = `Seu imc é: ${result.toFixed(2)} <br/> Você está abaixo do peso`;
        } else if (24.9 > result && result > 18.6 ) {
            document.querySelector('.result').innerHTML = `Seu imc é: ${result.toFixed(2)} <br/> Você está no peso certo`;
        } else if (29.9 > result && result> 25) {
            document.querySelector('.result').innerHTML = `Seu imc é: ${result.toFixed(2)} <br/> Você está acima do peso`;
        } else if (34.9 > result && result> 30) {
            document.querySelector('.result').innerHTML = `Seu imc é: ${result.toFixed(2)} <br/> Você está com obsesidade grau I`;
        } else if (39.9 > result && result> 35) {
            document.querySelector('.result').innerHTML = `Seu imc é: ${result.toFixed(2)} <br/> Você está com obsesidade grau II`;
        } else if (result > 40) {
            document.querySelector('.result').innerHTML = `Seu imc é: ${result.toFixed(2)} <br/> Você está com obsesidade grau III`;
        }
        
    });
}

document.addEventListener('DOMContentLoaded', function() {
    setupWeightListeners();
    setupHeightListeners();
    imc();
});

// Atualização do conteúdo usando innerHTML
document.querySelector('#app').innerHTML = `
    <div id="all">
      <h2 id="tittle"> Calculadora de IMC </h2>
      
      <div id="buttons">
        <input type="text" class="decimalNumberHeight buttonHeightTwo" placeholder="Altura"/>

        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>        

        <input type="text" class="decimalNumberHeight buttonHeightOne" placeholder="Altura"/>
        
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M420-680v-120h120v120H420Zm0 520v-120h120v120H420Z"/></svg>

        <input type="text" class="decimalNumber buttonWeight" placeholder="Peso" /> 
      </div>
      
      <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/></svg>
      
      <h1 class="result"></h1>
      
      <button class="buttonResult"> RESULTADO </button>
    </div>
`;
