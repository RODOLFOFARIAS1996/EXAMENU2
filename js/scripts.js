document.addEventListener("DOMContentLoaded", () => {
    // Variables para elementos del DOM
    const botonMenu = document.getElementById("botonMenu");
    const menu = document.getElementById("menuNavegacion");

    const menuIcono = document.querySelector(".icono-menu")
    const menuNavegacion = document.querySelector(".menu-navegacion")
    const itemsAcordeon = document.querySelectorAll(".item-acordeon")
    const botonPlay = document.querySelector(".boton-play")
    const controlPrevHero = document.querySelector(".seccion-hero .control-prev")
    const controlNextHero = document.querySelector(".seccion-hero .control-next")
    const controlPrevTestimonios = document.querySelector(".seccion-testimonios .control-prev")
    const controlNextTestimonios = document.querySelector(".seccion-testimonios .control-next")
    const itemsGaleria = document.querySelectorAll(".item-galeria")
    const modalVideo = document.getElementById("modal-video")
    const cerrarModalVideo = document.querySelector(".cerrar-modal")
    const modalGaleria = document.getElementById("modal-galeria")
    const imgModal = document.getElementById("img-modal")
    const cerrarModalGaleria = document.querySelector(".cerrar-modal-galeria")
    const controlPrevModal = document.querySelector(".control-prev-modal")
    const controlNextModal = document.querySelector(".control-next-modal")
    const botonSubir = document.querySelector(".boton-subir")
  
    // Imágenes para el slider hero
    const imagenesHero = [
      "img/foto_principal.jpg",
      "img/foto_slide1.jpeg",
      "img/foto_slide2.jpeg",
      "img/foto_slide3.jpeg",
    ]
    let indiceHeroActual = 0
  
    // Testimonios
    const testimonios = [
      {
        numero: "01",
        nombre: "Ing. Martínez, Obras Grandes",
        texto:
          '"He sido un cliente frecuente desde hace años y siempre recibo un servicio excepcional. La calidad de los materiales y la profesionalidad del equipo son incomparables. Recomiendo ampliamente a Cementio para cualquier proyecto de construcción."',
      },
      {
        numero: "02",
        nombre: "Arq. Javier, Diseños Modernos",
        texto:
          '"Trabajar con el equipo de Cementio ha sido una experiencia excepcional. Su atención al detalle y compromiso con la calidad son evidentes en cada proyecto. Han superado mis expectativas en cada ocasión."',
      },
      {
        numero: "03",
        nombre: "Ing. Laura, Constructora Eficiente",
        texto:
          '"La calidad del cemento y los servicios de Cementio son insuperables. Han sido nuestros proveedores de confianza durante años y nunca nos han decepcionado. Su equipo es profesional y siempre cumple con los plazos."',
      },
    ]
    let indiceTestimonioActual = 0
  
    // Imágenes de la galería
    const imagenesGaleria = [
      "img/foto_galeria1.jpeg",
      "img/foto_galeria2.jpeg",
      "img/foto_galeria3.jpeg",
      "img/foto_galeria4.jpeg",
    ]
    let indiceGaleriaActual = 0
  
    botonMenu.addEventListener("click", () => {
        // Si está visible, lo ocultamos
        if (menu.classList.contains("activo")) {
          menu.classList.remove("activo");
          menu.style.maxHeight = "0px";
        } else {
          menu.classList.add("activo");
          menu.style.maxHeight = menu.scrollHeight + "px";
        }
      });
    
      // Esto previene que se quede bloqueado si el contenido cambia
      window.addEventListener("resize", () => {
        if (menu.classList.contains("activo")) {
          menu.style.maxHeight = menu.scrollHeight + "px";
        }
      });
      
  
    // Funcionalidad del acordeón
    itemsAcordeon.forEach((item) => {
      const cabecera = item.querySelector(".cabecera-acordeon")
  
      cabecera.addEventListener("click", () => {
        // Cerrar todos los acordeones abiertos
        itemsAcordeon.forEach((otroItem) => {
          if (otroItem !== item && otroItem.classList.contains("activo")) {
            otroItem.classList.remove("activo")
          }
        })
  
        // Alternar el estado del acordeón actual
        item.classList.toggle("activo")
      })
    })
  
    // Funcionalidad del botón de reproducción de video
    if (botonPlay) {
      botonPlay.addEventListener("click", () => {
        modalVideo.style.display = "block"
      })
    }
  
    // Cerrar modal de video
    if (cerrarModalVideo) {
      cerrarModalVideo.addEventListener("click", () => {
        modalVideo.style.display = "none"
        // Pausar el video al cerrar el modal
        const iframe = modalVideo.querySelector("iframe")
        const iframeSrc = iframe.src
        iframe.src = iframeSrc
      })
    }
  
    // Cerrar modal al hacer clic fuera del contenido
    window.addEventListener("click", (event) => {
      if (event.target == modalVideo) {
        modalVideo.style.display = "none"
        // Pausar el video al cerrar el modal
        const iframe = modalVideo.querySelector("iframe")
        const iframeSrc = iframe.src
        iframe.src = iframeSrc
      }
  
      if (event.target == modalGaleria) {
        modalGaleria.style.display = "none"
      }
    })
  
    // Funcionalidad del slider hero
    function actualizarSliderHero() {
      const slide = document.querySelector(".slide")
      const imagen = slide.querySelector("img")
      imagen.src = imagenesHero[indiceHeroActual]
  
      // Efecto de transición
      imagen.style.opacity = "0"
      setTimeout(() => {
        imagen.style.opacity = "1"
      }, 100)
    }
  
    if (controlPrevHero) {
      controlPrevHero.addEventListener("click", () => {
        indiceHeroActual = (indiceHeroActual - 1 + imagenesHero.length) % imagenesHero.length
        actualizarSliderHero()
      })
    }
  
    if (controlNextHero) {
      controlNextHero.addEventListener("click", () => {
        indiceHeroActual = (indiceHeroActual + 1) % imagenesHero.length
        actualizarSliderHero()
      })
    }
  
    // Funcionalidad del slider de testimonios
    function actualizarTestimonios() {
      const testimonio = document.querySelector(".testimonio")
      const numeroTestimonio = testimonio.querySelector(".numero-testimonio")
      const nombreTestimonio = testimonio.querySelector(".cabecera-testimonio h3")
      const textoTestimonio = testimonio.querySelector(".texto-testimonio")
  
      numeroTestimonio.textContent = testimonios[indiceTestimonioActual].numero
      nombreTestimonio.textContent = testimonios[indiceTestimonioActual].nombre
      textoTestimonio.textContent = testimonios[indiceTestimonioActual].texto
  
      // Efecto de transición
      testimonio.style.opacity = "0"
      setTimeout(() => {
        testimonio.style.opacity = "1"
      }, 100)
    }
  
    if (controlPrevTestimonios) {
      controlPrevTestimonios.addEventListener("click", () => {
        indiceTestimonioActual = (indiceTestimonioActual - 1 + testimonios.length) % testimonios.length
        actualizarTestimonios()
      })
    }
  
    if (controlNextTestimonios) {
      controlNextTestimonios.addEventListener("click", () => {
        indiceTestimonioActual = (indiceTestimonioActual + 1) % testimonios.length
        actualizarTestimonios()
      })
    }
  
    // Funcionalidad de la galería
    itemsGaleria.forEach((item, index) => {
      item.addEventListener("click", () => {
        modalGaleria.style.display = "block"
        imgModal.src = imagenesGaleria[index]
        indiceGaleriaActual = index
      })
    })
  
    // Cerrar modal de galería
    if (cerrarModalGaleria) {
      cerrarModalGaleria.addEventListener("click", () => {
        modalGaleria.style.display = "none"
      })
    }
  
    // Controles del modal de galería
    if (controlPrevModal) {
      controlPrevModal.addEventListener("click", () => {
        indiceGaleriaActual = (indiceGaleriaActual - 1 + imagenesGaleria.length) % imagenesGaleria.length
        imgModal.src = imagenesGaleria[indiceGaleriaActual]
      })
    }
  
    if (controlNextModal) {
      controlNextModal.addEventListener("click", () => {
        indiceGaleriaActual = (indiceGaleriaActual + 1) % imagenesGaleria.length
        imgModal.src = imagenesGaleria[indiceGaleriaActual]
      })
    }
  
    // Botón para subir
    if (botonSubir) {
      botonSubir.addEventListener("click", (e) => {
        e.preventDefault()
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }
     const sliderClientes = document.getElementById("sliderClientes");
  const slides = document.querySelectorAll(".slide-cliente");
  const btnPrev = document.getElementById("prevCliente");
  const btnNext = document.getElementById("nextCliente");

  let currentSlide = 0;

  function updateCarousel() {
    const offset = currentSlide * sliderClientes.clientWidth;
    sliderClientes.scrollTo({ left: offset, behavior: "smooth" });
  }

  btnPrev.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel();
  });

  btnNext.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateCarousel();
  });
    // Iniciar sliders automáticos
    let sliderHeroInterval = setInterval(() => {
      indiceHeroActual = (indiceHeroActual + 1) % imagenesHero.length
      actualizarSliderHero()
    }, 5000)
  
    let testimoniosInterval = setInterval(() => {
      indiceTestimonioActual = (indiceTestimonioActual + 1) % testimonios.length
      actualizarTestimonios()
    }, 7000)
  
    // Detener intervalos cuando el usuario interactúa
    document.querySelector(".seccion-hero").addEventListener("mouseenter", () => {
      clearInterval(sliderHeroInterval)
    })
  
    document.querySelector(".seccion-hero").addEventListener("mouseleave", () => {
      sliderHeroInterval = setInterval(() => {
        indiceHeroActual = (indiceHeroActual + 1) % imagenesHero.length
        actualizarSliderHero()
      }, 5000)
    })
  
    document.querySelector(".seccion-testimonios").addEventListener("mouseenter", () => {
      clearInterval(testimoniosInterval)
    })
  
    document.querySelector(".seccion-testimonios").addEventListener("mouseleave", () => {
      testimoniosInterval = setInterval(() => {
        indiceTestimonioActual = (indiceTestimonioActual + 1) % testimonios.length
        actualizarTestimonios()
      }, 7000)
    })
  
    // Inicializar la página
    actualizarSliderHero()
    actualizarTestimonios()
  })
  