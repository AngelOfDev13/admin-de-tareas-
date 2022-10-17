// for loop
// for (let index = 0; index < 11; index++) {
//     console.log('esto se repetira 10 veces')
    
// }

// for in



// for of
// for (const nombre of nombres) {
//     console.log(nombre);
    
// }
// while loop
// alert('bienvenidos a banesco');
// const userDB = 'angelofdev';
// let intentos = 3;
// const passDB = 1234;
// let pass = 0;
// const user = prompt('ingrese su usuario');

// if (userDB === user) {
//     alert('usuario correcto');

//     while (intentos > 0 && passDB !== Number(pass)) {
//         pass = prompt('ingrese su contrase;a');
//         intentos = intentos - 1;
//         alert(`te quedan ${intentos} intentos`);
        
//     }

//     if (passDB === Number(pass)) {
//         alert('contrase;a correcta')
//     } else {
//         alert('contrase;a incorrecto');
//     }   
    
// } else {
//     alert('usuario incorrecto')
    
// }
// alert('welcome')
// const num1 = Number (prompt('numero 1'));
// const num2 = Number (prompt('numero 2'));
// const operador = prompt('operador');

// const calc = (arg1, arg2, arg3) => num1 + num2;
//  if (operador === '+') {
//     console.log(num1 + num2);
    
//  } else if (operador === '-') {
//     console.log(num1 - num2)
    
//  }else if (operador === '*') {
//     console.log(num1 * num2)


//  }else if (operador === '/') { 
//     console.log(num1 / num2)
//  }

 const num_secreto1 = '89';
 const num_secreto2 = '69';
 let intentos = 3; 
 let numero = 0;

 const numerito = prompt('ingrese el primer numero')
 if (num_secreto1 === numerito) {
    alert('bravo');
    while (intentos > 0 && numero !== num_secreto1  || num_secreto2) {
        numero = prompt('ingrese el segundo numero')
        intentos = intentos - 1;
        alert(`te quedan ${intentos} intentos`);
        if (num_secreto2 === numero) {
            alert('bravo 2')
            
        }else {
            alert('ese no es el numero')
        }
        
    }
    
 }else { 
    alert('numero incorrecto')
 }

   

  
 

// for each
// nombres.forEach(nombre) => console.log