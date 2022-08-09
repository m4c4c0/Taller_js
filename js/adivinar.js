var min=1; //almaceno mi valor minimo 
var max=100; //almaceno mi valor maximo


var intentos =0; //almaceno el numero de intentos en que encontro el numero

var aleatorio = Math.floor(Math.random() * max - min + 1) + min; //creo numeros aleatorios del 1 al 100

var numero;

alert('Bienvenido');
alert('A continuacion se creara una serie de numero del 1 al 100');
alert('Adivina cual es el numero escondido :) ');

for(intentos; intentos < 1000; intentos++){ //valido en un for en cuantos intentos a logrado adivinar el numero

    numero = parseInt(prompt('ingrese un numero entre '+min+ ' y el '+max));

    if (numero >= min && numero <= max){
        if(numero < aleatorio){
            alert('El numero que ingreso es mas bajo');
        }else if (numero > aleatorio){
            alert('El numero que ingreso es mas alto');
        }else if(numero==aleatorio){
            break;
        }
    }else{
        alert('Debe ingresar un numero entre '+min+' y '+max);
    }
}

if (numero == aleatorio){
    alert('felicidades adivinaste el numero en: '+(intentos +1)+ ' intentos.');
}

if(intentos == 1){
    alert('Sobresaliente');
}else if(intentos < 4){
    alert('Notable');
}else if(intentos < 11){
    alert('Muy bien');
}else if(intentos < 25){
    alert('Regular');
}else{
    alert('pesimo');
}