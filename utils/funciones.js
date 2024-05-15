document.addEventListener("DOMContentLoaded", function() {
    manejarEnlacesScroll();
});
function manejarEnlacesScroll() {
    var enlacesMostrarDivNavbar = document.querySelectorAll(".nav-item.nav-link");
    var enlacesMostrarDivFooter = document.querySelectorAll("#enlaceDisenoFooter, #enlaceIdentidadFooter, #enlaceGraficaFooter"); // Enlaces del footer

    enlacesMostrarDivNavbar.forEach(function(enlace) {
        enlace.addEventListener("click", function(event) {
            event.preventDefault();

            var objetivo = this.getAttribute("href").substr(1); // Obtener el ID del div objetivo
            var divObjetivo = document.getElementById(objetivo);

            if (divObjetivo) {
                mostrarDivYDesplazar(divObjetivo);
            }
        });
    });

    enlacesMostrarDivFooter.forEach(function(enlace) {
        enlace.addEventListener("click", function(event) {
            event.preventDefault();

            var objetivo = this.getAttribute("href").substr(1); // Obtener el ID del div objetivo
            var divObjetivo = document.getElementById(objetivo);

            if (divObjetivo) {
                mostrarDivYDesplazar(divObjetivo);
            }
        });
    });

    function mostrarDivYDesplazar(divObjetivo) {
        document.querySelectorAll(".cajas").forEach(function(div) {
            div.style.display = "none";
        });

        divObjetivo.style.display = "block";

        // Ajustar margen superior para dejar espacio para el navbar fijo
        var navbarHeight = document.querySelector("nav").offsetHeight; // Altura del navbar
        var margenSuperior = navbarHeight + 100; // Ajuste adicional para espacio
        window.scrollTo({
            top: divObjetivo.offsetTop - margenSuperior,
            behavior: 'auto'
        });
    }
}

function manejarBotonIrArriba() {
    window.onscroll = function() { mostrarBotonIrArriba() };

    function mostrarBotonIrArriba() {
        var botonIrArriba = document.getElementById("btnIrArriba");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            botonIrArriba.style.display = "block";
            botonIrArriba.classList.remove("btn-dark"); // Quita la clase btn-dark
            botonIrArriba.classList.add("btn-light"); // Agrega la clase btn-light
        } else {
            botonIrArriba.style.display = "none";
        }
    }
    function irArriba() {
        document.body.scrollTop = 0; // Para navegadores Safari
        document.documentElement.scrollTop = 0; // Para otros navegadores
    }
    document.getElementById("btnIrArriba").onclick = irArriba;
    return irArriba;
}
document.addEventListener("DOMContentLoaded", function() {
    manejarBotonIrArriba();
});

