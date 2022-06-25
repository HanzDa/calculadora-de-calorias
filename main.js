const formularioCalculadora = document.getElementById('formulario-calculadora');
const resultado = document.getElementById('resultado');

formularioCalculadora.addEventListener('submit', (evento) => {
    evento.preventDefault();

    // resultado.style.display = 'none';

    setTimeout(calcularCalorias, 1000);
})

function calcularCalorias() {
    const edad = document.querySelector('#edad');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const genero = document.querySelector('input[name="genero"]:checked');
    const actividad = document.querySelector('#actividad');
    const totalCalorias = document.querySelector('#total-calorias');

    const multiplicadoresTMB = {
        peso: 10,
        altura: 6.25,
        edad: 5
    }

    if ( !(edad.value && peso.value && altura.value) ) {
        mostrarMensajeDeError('Por favor asegúrese de llenar todos los campos');
        return;
    } else if (edad.value < 15 || edad.value > 80) {
        mostrarMensajeDeError('La edad ingresada no es permitida')
        return;
    }
    
    let calculoCalorias;
    if (genero.id === 'hombre') {
        //Formula hombres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) + 5
        calculoCalorias = actividad.value * ((multiplicadoresTMB.peso * peso.value) +
                                             (multiplicadoresTMB.altura * altura.value) -
                                             (multiplicadoresTMB.edad * edad.value)) + 5;
    } else {
        //Formula mujeres: valor actividad x (10 x peso en kg) + (6,25 × altura en cm) - (5 × edad en años) - 161
        calculoCalorias = actividad.value * ((multiplicadoresTMB.peso * peso.value) +
                                             (multiplicadoresTMB.altura * altura.value) -
                                             (multiplicadoresTMB.edad * edad.value)) -161
    }

    totalCalorias.value = Math.floor(calculoCalorias);

    // resultado.style.display = 'block';
}

function mostrarMensajeDeError(msg) {
    // resultado.style.display = 'none';

    const divError = document.createElement('div');
    const card = document.createElement('div');

    console.log('hay un error!')
}