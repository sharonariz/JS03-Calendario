
function calcularFecha() {
    var diasssss = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes", "Sabado"];

    const diaInput = document.getElementById(`dia`).value;
    const mesInput = (document.getElementById(`mes`).value-1);
    const anioInput = document.getElementById(`año`).value;
    const resultado = document.getElementById(`resultado`);

    
    const date = new Date(anioInput, mesInput, diaInput);
    const diaSemana = diasssss[date.getDay()];
        

    console.log(diaSemana);
    let diaSemanaTexto = ""
    switch (diaSemana) {
        case "Sabado": case "Domingo":
            diaSemanaTexto= diasssss[date.getDay()]+ ": Día no laboral."

        break;
        default:
            diaSemanaTexto="Si se laboro el dia:" + " " + diasssss[date.getDay()];
        break;
    }
    resultado.value = diaSemanaTexto
}