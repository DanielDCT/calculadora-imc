function calcularIMC() {
    const alturaEnCentimetros = parseInt(document.getElementById('altura').value);
    const alturaEnMetros = alturaEnCentimetros / 100;
    const pesoEnKilos = parseInt(document.getElementById('peso').value);

    const imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
    var clasificacion;
    
    if (imc < 18.5) {
        clasificacion = 'Estás muy delgado';
    } else if (imc < 25) {
        clasificacion = 'Estás saludable';
    } else {
        clasificacion = 'Tienes sobrepeso';
    }
    
    document.getElementById("resultado").innerHTML = 'Hola, tu IMC es de ' + imc + ' , ¡ ' + clasificacion + ' ! ';
}