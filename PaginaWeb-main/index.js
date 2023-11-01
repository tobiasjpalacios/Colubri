const carrusel = document.querySelector('.carrusel');

let currentIndex = 0;

function prev (){
    if (currentIndex > 0) {
      currentIndex--;
      updateCarrusel();
    }
};

function next(){
  if (currentIndex < 3) {
    currentIndex++;
    updateCarrusel();
  }
};

function updateCarrusel() {
  const offset = -currentIndex * 100;
  document.getElementById("carrusel").style.transform = `translateX(${offset}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("all").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "block";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("chocolate").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "block";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("showpice").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "block";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("desserts").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "block";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("viennoiserie").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "block";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("events").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "block";
        document.getElementById("confectionery-div").style.display = "none";
    });

    document.getElementById("confectionery").addEventListener("click", function() {
        event.preventDefault();
        document.getElementById("all-div").style.display = "none";
        document.getElementById("chocolate-div").style.display = "none";
        document.getElementById("showpice-div").style.display = "none";
        document.getElementById("desserts-div").style.display = "none";
        document.getElementById("viennoiserie-div").style.display = "none";
        document.getElementById("events-div").style.display = "none";
        document.getElementById("confectionery-div").style.display = "block";
    });

});

function m_image_1() {
    var overlay = document.getElementById("image-1");
    var cont = document.getElementById("cont1");
    cont.style.zIndex = 10;
    cont.style.display = "flex";
    overlay.style.display = "flex";
}
function m_image_2() {
    var overlay = document.getElementById("image-2");
    var cont = document.getElementById("cont2");
    cont.style.zIndex = 10;
    cont.style.display = "flex"
    overlay.style.display = "flex";
}
function m_image_3() {
    var overlay = document.getElementById("image-3");
    var cont = document.getElementById("cont3");
    cont.style.zIndex = 10;
    cont.style.display = "flex";
    overlay.style.display = "flex";
}
function m_image_4() {
    var overlay = document.getElementById("image-4");
    var cont = document.getElementById("cont4");
    cont.style.zIndex = 10;
    cont.style.display = "flex";
    overlay.style.display = "flex";
}
function close_1() {
    var overlay = document.getElementById("image-1");
    var cont = document.getElementById("cont1");
    cont.style.display = "none";
    overlay.style.display = "none";
}
function close_2() {
    var overlay = document.getElementById("image-2");
    var cont = document.getElementById("cont2");
    cont.style.display = "none";
    overlay.style.display = "none";
}
function close_3() {
    var overlay = document.getElementById("image-3");
    var cont = document.getElementById("cont3");
    cont.style.display = "none";
    overlay.style.display = "none";
}
function close_4() {
    var overlay = document.getElementById("image-4");
    var cont = document.getElementById("cont4");
    cont.style.display = "none";
    overlay.style.display = "none";
}