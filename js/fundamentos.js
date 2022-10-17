const edad = prompt('cual es tu edad');

if (Number(edad) >= 18) {
    console.log('eres mayor de edad')
} else if (Number(edad) < 10) {
    console.log('eres un ni;no')
}
else {
    console.log('no eres mayor de edad')
}

