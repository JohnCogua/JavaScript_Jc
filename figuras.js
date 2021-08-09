//Código del cuadrado
console.group("Cuadrado")
//const ladocuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladocuadrado + "cm");

function perimetrocuadrado (lado){
    return lado*4;
} 
//console.log("El perimetro del cuadrado es: " + perimetrocuadrado + "cm");

function areacuadrado (lado){
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areacuadrado + "cm^2");
console.groupEnd();


//Código del Triangulo
console.group("Triangulo")
//const ladotriangulo1 = 6;
//const ladotriangulo2 = 6;
//const basetriangulo = 4;
//const alturatriangulo = 5.5;
//console.log("Los lados del triangulo miden: " + ladotriangulo1 + "cm,"
//  + ladotriangulo2 + "cm y " 
//  + basetriangulo + "cm");
// console.log("La altura del triangulo es: " + alturatriangulo + "cm");

function perimetrotriangulo (base, lado1, lado2) {
    return parseFloat(base) + parseFloat(lado1) + parseFloat(lado2);
} 
//console.log("El perimetro del triangulo es: " + perimetrotriangulo + "cm");

function areatriagulo (base, lado1, lado2) {
    const alturatriangulo = Math.sqrt((lado1*lado1)-((base*base)/4));
    return [base*alturatriangulo / 2, alturatriangulo];
} 
//console.log("El área del triangulo es: " + areatriagulo + "cm^2");
console.groupEnd();

//Código del Circulos
console.group("Circulos");
const radioCirculo = 4;
console.log("El radio del circulo es " + radioCirculo + " cms.");
const diametroCirculo = radioCirculo * 2;
console.log("El diametro del circulo es " + diametroCirculo + " cms.");
const PI = Math.PI;
console.log("PI es " + PI + ".");

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del circulo es " + perimetroCirculo + " cms.");

const areaCirculo = PI * (radioCirculo**2);
console.log("El area del circulo es " + areaCirculo + " cms.");
console.groupEnd();


function calcularperimetrocuadrado(){
    const input = document.getElementById("Inputcuadrado");
    const value = input.value;
    const perimetro = perimetrocuadrado(value);
    alert(perimetro + "cm");
}
function Calcularareacuadrado(){
    const input = document.getElementById("Inputcuadrado");
    const value = input.value;
    const area = areacuadrado(value);
    alert(area + "cm^2");
}
function calcularperimetrotriangulo(){
    const inputlado1 = document.getElementById("Inputlado1");
    const inputlado2 = document.getElementById("Inputlado2");
    const inputbase = document.getElementById("Inputbase");
    const lado1 = inputlado1.value;
    const lado2 = inputlado2.value;
    const base = inputbase.value;
    const perimetrot = perimetrotriangulo(base, lado1, lado2);
    alert(perimetrot + "cm");
}
function Calcularareatriangulo(){
    const inputlado1 = document.getElementById("Inputlado1");
    const inputlado2 = document.getElementById("Inputlado2");
    const inputbase = document.getElementById("Inputbase");
    const lado1 = inputlado1.value;
    const lado2 = inputlado2.value;
    const base = inputbase.value;
    const areat = areatriagulo(base, lado1, lado2);
    alert(areat[0] + "cm y la altura del triangulo es: " + areat[1]);
}