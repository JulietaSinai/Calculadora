let boton = document.getElementById('sumar');//comentario investigar que significa let//
let respuesta = document.getElementById('respuesta');    /*otra forma para poner comentario */

boton.addEventListener('click', hacersuma);

function hacersuma(){
    let n1 =parseFloat(document.getElementById('n1').value); /* parse float, significa numero flotante, no se pueden sumar textos */
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1+n2;
    respuesta.innerHTML= `El resultado de la suma es: ${n3}`;
}

let boton2 = document.getElementById('restar');
let respuesta2 = document.getElementById('respuesta');    

boton2.addEventListener('click', hacerresta);

function hacerresta(){
    let n1 =parseFloat(document.getElementById('n1').value); /* parse float, significa numero flotante, no se pueden sumar textos */
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1-n2;
    respuesta2.innerHTML= `El resultado de la resta es: ${n3}`;
}

let boton3 = document.getElementById('multiplicar');
let respuesta3 = document.getElementById('respuesta');    

boton3.addEventListener('click',hacermultiplicacion);

function hacermultiplicacion(){
    let n1 =parseFloat(document.getElementById('n1').value); 
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1*n2;
    respuesta3.innerHTML= `El resultado de la multiplicación es: ${n3}`;
}


let boton4 = document.getElementById('dividir');
let respuesta4 = document.getElementById('respuesta');    

boton4.addEventListener('click', hacerdivision);

function hacerdivision(){
    let n1 =parseFloat(document.getElementById('n1').value); 
    let n2 =parseFloat(document.getElementById('n2').value);
    let n3 = n1/n2;
    respuesta4.innerHTML= `El resultado de la división es: ${n3}`;
}
