const formularioCalculadora = document.getElementById('formulario-calculadora')
const resultado = document.querySelector('#resultado')

formularioCalculadora.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    calcularCalorias();
})

function calcularCalorias() {
    const edad = document.querySelector('#edad');
    const peso = document.querySelector('#peso');
    const altura = document.querySelector('#altura');
    const genero = document.querySelector('input[name="genero"]:checked');
    const actividad = document.querySelector('#actividad');

    // Formula hombres: valor actividad * (10 * peso) + (6.25 * altura) - (5 * edad) + 5
    // Formula mujeres: valor actividad * (10 * peso) + (6.25 * altura) - (5 * edad) - 161

    console.log(edad.value);
    console.log(peso.value);
    console.log(altura.value);
    console.log(genero.id);
    console.log(actividad.value);

    let calculo1 = actividad.value * (10 * peso.value) + (6.25 * altura.value) - (5 * edad.value);

    if (genero.id === 'masculino') {
        calculo1 += 5
    } else {
        calculo1 -= 161
    }
    
    resultado.innerHTML = `
    <div class=" card-body d-flex flex-column justify-content-center align-items-center h-100" id="calculo">
        <h5 class="card-title h2">Calorías requeridas</h5>
        <div class="mb-3 w-100">
            <input class="form-control text-center" value="${Math.floor(calculo1)} kcal" style="font-size: 2rem" disabled>
        </div>
    </div>
    `

    edad.value = null;
    peso.value = null;
    altura.value = null;
    actividad.value = null;
}