

const formCreate = document.querySelector('#form-create');
const inputCreate = document.querySelector('#create-input');
const notificacion = document.querySelector('.notificacion');
const formLogin = document.querySelector('#form-user');
const inputLogin = document.querySelector('#login-input');

formCreate.addEventListener('submit', async e => { 
    e.preventDefault(); 
    const response = await fetch('http://localhost:3000/users', {method: 'GET'});
    const users = await response.json();
    const user = users.find(user => user.username === inputCreate.value);
    
    if (inputCreate.value === '') {
        notificacion.innerHTML = 'El usuario no puede estar vacio';
        notificacion.classList.add('show-notification'); 
        setTimeout(() => { 

            notificacion.classList.remove('show-notification'); 

        },2000);
    } else if (user) {
        notificacion.innerHTML = 'El usuario ya existe';
        notificacion.classList.add('show-notification'); 
        setTimeout(() => { 

            notificacion.classList.remove('show-notification'); 

        },2000);
        
    } else { 
         await fetch('http://localhost:3000/users', 
         {method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({username: inputCreate.value}),
            
        });
        notificacion.innerHTML = `Usuario ${inputCreate.value} ha sido creado`;
        notificacion.classList.add('show-notification'); 
        setTimeout(() => { 

            notificacion.classList.remove('show-notification'); 

        },2000);
        inputCreate.value = ''; 
    
    }
})



















// input script
document.querySelectorAll('.text-input').forEach((Element) => {
    Element.addEventListener('blur', (event) => {
        if (event.target.value != '') {
            event.target.nextElementSibling.classList.add('filled');

        } else {
            event.target.nextElementSibling.classList.remove('filled')
        }
    })
})