document.addEventListener('DOMContentLoaded',() =>{


//1--contenido dinamico en Array
    const arrPelis = [

        {
            img: 'the_thing.jpg',
            title: 'La cosa',
            descr: '🐕👽'
        },
        {
            img: 'marsAttack.jpg',
            title: 'Marcianos al ataque',
            descr: 'ak ak ak ak',
        },
        {
            img: 'pistoladesnuda.jpg',
            title: 'la pistola desnuda 33 1/3',
            descr: 'Frank Debrin vuelve de su retiro 🔫',
        },
        {
            img: 'Ben.webp',
            title: 'Ben la rata asesina',
            descr: '🔪🐀🐀',
        },
        {
            img: 'Thewarriors.webp',
            title: 'The warriors',
            descr: 'warriors,come out to play',
        },
        {
            img: 'los_extra.jpg',
            title: 'Los extraterrestres',
            descr: 'primer y unica obra de monguito en la tierra',
        },
        {
            img: 'heydude.jpg',
            title: 'Hey, donde esta mi auto',
            descr: '¡Zoltan! 🫡',
        },
    ];

    const pelisContainer = document.querySelector('#pelis-container');
    pelisContainer.innerHTML = '';
    arrPelis.forEach(p => {
        const cardPeli = document.createElement('div');
        cardPeli.className = 'card';
        cardPeli.innerHTML = `
        <h3>${p.title}</h3>
        <img class="img-card" src="imgs/${p.img}" alt="Poster${p.title}">
        <p>${p.descr}</p>
        `;
        pelisContainer.appendChild(cardPeli);
    });

 //2--modo claro/oscruo
 
  const darkModeToggle = document.createElement('button');
  darkModeToggle.id = 'dark-mode-toggle';
  const nav = document.querySelector('nav');
  nav.insertAdjacentElement('afterend', darkModeToggle);
  
  updateDarkModeButton();
  
  darkModeToggle.addEventListener('click', function() {
      const isDarkMode = document.body.classList.toggle('dark-mode');
      localStorage.setItem('darkMode', isDarkMode ? 'enabled' : 'disabled');
      updateDarkModeButton();
  });
  
  function updateDarkModeButton() {
      const isDarkMode = document.body.classList.contains('dark-mode');
      darkModeToggle.textContent = isDarkMode ? 'Modo Claro 🌝' : 'Modo Oscuro 🌚';
  }
  
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      updateDarkModeButton();
  }

//3 y 4 form con validacion con un popup de success
    const form = document.getElementById('form-contacto');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); 

        // vaciar los slots
        const erroresPrevios = form.querySelectorAll('.error');
        erroresPrevios.forEach(e => e.remove());

        let errores = 0;

        // campos
        const nombre = form.querySelector('input[placeholder="Nombre"]');
        const apellido = form.querySelector('input[placeholder="Apellido"]');
        const planeta = form.querySelector('input[placeholder="Planeta"]');
        const email = form.querySelector('input[type="email"]');
        const telefono = form.querySelector('input[type="tel"]');

        // valid nombre y apellido
        const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;

        if (!soloLetras.test(nombre.value)) {
            mostrarError(nombre, 'El nombre no puede contener números');
            errores++;
        }

        if (!soloLetras.test(apellido.value)) {
            mostrarError(apellido, 'El apellido no puede contener números');
            errores++;
        }

          // validación planeta obligatorio (ya está con required, pero reforzamos con un aviso en forma de div)
        if (!email.validity.valid) {
            mostrarError(email, 'Ingresá un email válido');
            errores++;
        }

        if (planeta.value.trim() === '') {
            mostrarError(planeta, 'El planeta es obligatorio');
            errores++;
        }

        if (errores === 0) {
            alert('Formulario enviado con éxito 🚀');
            form.reset();
        }
    });

    function mostrarError(input, mensaje) {
        const error = document.createElement('div');
        error.className = 'error';
        error.style.color = 'red';
        error.textContent = mensaje;
        input.parentNode.insertBefore(error, input.nextSibling);
    }

    // -5. Contador de visitas -----
    let visitas = localStorage.getItem('visitas');

    if (!visitas) {
        visitas = 1;
    } else {
        visitas = parseInt(visitas) + 1;
    }

    localStorage.setItem('visitas', visitas);

    // Mostramos el número en algún lugar de la página
    const contador = document.createElement('div');
    contador.textContent = `👀 Esta es tu visita número ${visitas} (premio soropresa al N° 1000)`;
    contador.style.margin = '1em';
    contador.style.fontWeight = 'bold';
    darkModeToggle.insertAdjacentElement('afterend', contador);

    if (visitas >= 1000) {
        // Estilos del body
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'lime';
        document.body.style.fontSize = '2rem';
        document.body.style.display = 'flex';
        document.body.style.justifyContent = 'center';
        document.body.style.alignItems = 'center';
        document.body.style.height = '100vh';
        document.body.style.margin = 0;
    

        document.body.innerHTML = '';

        const theGame = document.createElement('div');
        theGame.textContent = 'THE GAME';
        theGame.style.fontSize = '8rem';
        theGame.style.fontWeight = 'bold';
        theGame.style.textAlign = 'center';
        theGame.style.animation = 'zoomIn 1s ease-out';
    
        const style = document.createElement('style');
        style.textContent = `
            @keyframes zoomIn {
                from { transform: scale(0); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);
    
        document.body.appendChild(theGame);
    }
});
