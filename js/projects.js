
/*##############################INICIO do flexbox####################################*/

let currentSlides = [0, 0, 0, 0, 0];

function openCarousel(carouselIndex) {
  document.getElementById(`carouselModal${carouselIndex}`).style.display = "flex";
  showSlide(currentSlides[carouselIndex], carouselIndex);
}

function closeCarousel(carouselIndex) {
  document.getElementById(`carouselModal${carouselIndex}`).style.display = "none";
}

function changeSlide(direction, carouselIndex) {
  currentSlides[carouselIndex] += direction;
  const slides = document.querySelectorAll(`#carouselModal${carouselIndex} .carousel-slide`);
  
  if (currentSlides[carouselIndex] >= slides.length) {
    currentSlides[carouselIndex] = 0;
  }
  if (currentSlides[carouselIndex] < 0) {
    currentSlides[carouselIndex] = slides.length - 1;
  }
  
  showSlide(currentSlides[carouselIndex], carouselIndex);
}

function showSlide(n, carouselIndex) {
  const slides = document.querySelectorAll(`#carouselModal${carouselIndex} .carousel-slide`);
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove("active");
  }
  slides[n].classList.add("active");
}

// Close carousel when clicking outside
for (let i = 0; i < 5; i++) {
  document.getElementById(`carouselModal${i}`).addEventListener("click", function(e) {
    if (e.target === this) {
      closeCarousel(i);
    }
  });
}

// Keyboard controls
document.addEventListener("keydown", function(e) {
  for (let i = 0; i < 5; i++) {
    if (document.getElementById(`carouselModal${i}`).style.display === "flex") {
      if (e.key === "ArrowLeft") {
        changeSlide(-1, i);
      } else if (e.key === "ArrowRight") {
        changeSlide(1, i);
      } else if (e.key === "Escape") {
        closeCarousel(i);
      }
      break;
    }
  }
});

//congig de reprodução de videos

// Evento DOMContentLoaded para verificar os vídeos
document.addEventListener('DOMContentLoaded', function () {
  // IDs dos vídeos
  const videoIds = ['video-rpa', 'video-ml', 'video-microsaas'];

  videoIds.forEach(id => {
    const video = document.getElementById(id);
    if (video) {
      video.addEventListener('loadeddata', function () {
        console.log(`Vídeo ${id} carregado.`);
      });
      video.addEventListener('play', function () {
        console.log(`Vídeo ${id} está reproduzindo.`);
      });
      video.addEventListener('error', function (event) {
        console.error(`Erro ao reproduzir o vídeo ${id}.`, event);
      });
    } else {
      console.error(`Elemento de vídeo com ID '${id}' não encontrado.`);
    }
  });
});


// Função para abrir o modal
function openCarousel(id) {
  const modal = document.getElementById(`carouselModal${id}`);
  if (modal) {
    modal.style.display = 'block'; // Exibe o modal
    const video = modal.querySelector('video');
    if (video) {
      video.play(); // Reproduz o vídeo ao abrir o modal
      console.log(`Vídeo do modal ${id} reproduzindo.`);
    }
  } else {
    console.error(`Modal com ID carouselModal${id} não encontrado.`);
  }
}

// Função para fechar o modal
function closeCarousel(id) {
  const modal = document.getElementById(`carouselModal${id}`);
  if (modal) {
    modal.style.display = 'none'; // Oculta o modal
    const video = modal.querySelector('video');
    if (video) {
      video.pause(); // Pausa o vídeo ao fechar o modal
      video.currentTime = 0; // Reinicia o vídeo
      console.log(`Vídeo do modal ${id} pausado e reiniciado.`);
    }
  } else {
    console.error(`Modal com ID carouselModal${id} não encontrado.`);
  }
}



/*##############################FIM####################################*/

