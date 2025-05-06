/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

//*INICIO DA CONFIG DARK E LIGHT*
//################################


const toggleSwitch = document.getElementById('theme-toggle');
const body = document.body;

// Carregar preferência do tema do LocalStorage
if(localStorage.getItem('theme')) {
  body.classList.add(localStorage.getItem('theme'));
  if (localStorage.getItem('theme') === 'dark-theme') {
    toggleSwitch.checked = true;
  } 
}

// Adicionar evento de clique ao botão de alternância
toggleSwitch.addEventListener('click', () => {
  // Alterna a classe 'dark-theme' no body
  body.classList.toggle('dark-theme');
  
  // Salva a preferência no localStorage
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', 'dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme'); 
  }
});
//*FIM DA CONFIG DARK E LIGHT*
//################################


//*INICIO DA CONFIG DO CARROUSEL*
document.addEventListener('DOMContentLoaded', function () {
  const elemento = document.getElementById('seu-elemento');
  if (elemento) {
    elemento.addEventListener('click', function () {
      console.log('Evento de clique registrado no seu-elemento.');
    });
  } else {
    console.warn('Elemento com ID "seu-elemento" não encontrado no DOM.');
  }
});

//################################