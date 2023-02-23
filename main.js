// DOM - Document object model 
const formularioCalculadora = document.getElementById('formulario-calculadora')  // Forma vieja
const resultado = document.querySelector('#resultado') // forma nueva



formularioCalculadora.addEventListener('submit', (evento) => {
    evento.preventDefault();
    
    calcularCalorias();
})

function calcularCalorias() {
    const edad = document.querySelector("#edad")
    const peso = document.querySelector("#peso")
    const altura = document.querySelector("#altura")
    const genero = document.querySelector("input[name='genero']:checked")
    const actividad = document.querySelector("#actividad")

    console.log(edad)
    console.log(peso)
    console.log(altura)
    console.log(genero)
    console.log(actividad)

    // formula masculino ( actividad * (10 * peso) + (6.25 * altura) - (5 * edad) + 5 )
    // formula femenino ( actividad * (10 * peso) + (6.25 * altura) - (5 * edad) - 161 )

    let calculo = actividad.value * (10 * peso.value) + (6.25 * altura.value) - (5 * edad.value)

    if (genero.id === 'masculino') {
        calculo += 5 // calculo = calculo + 5
    } else {
        calculo -= 161 
    }

    resultado.innerHTML = `
    <div class=" card-body d-flex flex-column justify-content-center align-items-center h-100" id="calculo">
        <h5 class="card-title h2">Calorías requeridas</h5>
        <div class="mb-3 w-100">
            <input class="form-control text-center" value="${Math.ceil(calculo)} kcal" style="font-size: 2rem" disabled>
        </div>
    </div>
    `

    edad.value = null;
    peso.value = null;
    altura.value = null;
    actividad.value = null;
}
