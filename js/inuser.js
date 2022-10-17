const notificacion = document.querySelector('.notificacion');
const formLogin = document.querySelector('#form-user');
const inputLogin = document.querySelector('#login-input');

formLogin.addEventListener('submit', async e => { 
    e.preventDefault(); 
    const response = await fetch('http://localhost:3000/users', {method: 'GET'});
    const users = await response.json();
    const user = users.find(user => user.username === inputLogin.value);
    
   if (!user) {
    notificacion.innerHTML = 'El usuario no existe';
        notificacion.classList.add('show-notification'); 
        setTimeout(() => { 

            notificacion.classList.remove('show-notification'); 

        },2000);
   } else {
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'registros.html'
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