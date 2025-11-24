/*document.querySelectorAll(".wines").forEach(gallery => {
  let images = [];

  if (gallery.dataset.images) {
    try {
      images = JSON.parse(gallery.dataset.images);
    } catch (e) {
      console.warn("Hibás data-images JSON:", gallery.dataset.images);
    }
  }

  const winesIMG = gallery.querySelector(".winesIMG");
  const leftArrow = gallery.querySelector(".leftArrow");
  const rightArrow = gallery.querySelector(".rightArrow");
  let currentIndex = 0;

  function showImage(index) {
    winesIMG.classList.remove("zoomed");
    winesIMG.style.transform = "translateX(50px)";
    winesIMG.style.opacity = "0.2";
    winesIMG.style.transition = "all 0.4s ease-in-out";
    setTimeout(() => {
      if (images.length > 0) {
        winesIMG.src = `./assets/wines/${images[index]}`;
      }
      winesIMG.style.transform = "translateX(0px)";
      winesIMG.style.opacity = "1";

      setTimeout(() => {
        winesIMG.style.transform = "";
        winesIMG.style.transition = "";
      }, 400);
    }, 200);
  }

  if (leftArrow && images.length > 0) {
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }

  if (rightArrow && images.length > 0) {
    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }
});


document.querySelectorAll(".winesIMG").forEach(image => {
image.addEventListener("click", () => {
   const isZoomed = image.classList.toggle("zoomed");
   let overlay = document.querySelector("#overlay");
   
    if (isZoomed) {
      const scaleFactor = 2;
      const rect = image.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const imageCenterX = rect.left + rect.width / 2;
      const offsetX = centerX - imageCenterX;
      const centerY = window.innerHeight / 2;
      const imageCenterY = rect.top + rect.height / 2;
      const offsetY = centerY - imageCenterY;
      image.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleFactor})`;

      
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
        

        setTimeout(() => {
          overlay.classList.add("visible");
        }, 20);

        overlay.addEventListener("click", () => {
          image.classList.remove("zoomed");
          image.style.transform = "";
          removeOverlay(overlay);
          
      })
      }
    } else {
        image.style.transform = "";
        removeOverlay(overlay);
        document.querySelector(".zoomedLeftArrow").remove();
        document.querySelector(".zoomedRightArrow").remove();
        }
        
        
        zoomedLeftButton = document.createElement("button");
        zoomedRightButton = document.createElement("button");
        zoomedLeftButton.className = "zoomedLeftArrow";
        zoomedRightButton.className = "zoomedRightArrow";
        zoomedLeftButton.innerHTML = '<img class="arrow" src="./assets/wines/leftarrow.svg" alt="left arrow button">';
        zoomedRightButton.innerHTML = '<img class="arrow" src="./assets/wines/rightarrow.svg" alt="right arrow button">';
        
        document.body.appendChild(zoomedLeftButton);
        document.body.appendChild(zoomedRightButton);
        




function removeOverlay(overlayElement) {
  overlayElement.classList.remove("visible");

  overlayElement.addEventListener("transitionend", function handler()  {
        overlayElement.removeEventListener("transitionend", handler);
        overlayElement.remove();
        document.querySelector(".zoomedLeftArrow").remove();
        document.querySelector(".zoomedRightArrow").remove();
    });
};

});
});*/

document.querySelectorAll(".wines").forEach(gallery => {
  let images = [];

  if (gallery.dataset.images) {
    try {
      images = JSON.parse(gallery.dataset.images);
    } catch (e) {
      console.warn("Hibás data-images JSON:", gallery.dataset.images);
    }
  }

  const winesIMG = gallery.querySelector(".winesIMG");
  const leftArrow = gallery.querySelector(".leftArrow");
  const rightArrow = gallery.querySelector(".rightArrow");
  let currentIndex = 0;

  function showImage(index) {
    winesIMG.classList.remove("zoomed");
    winesIMG.style.transform = "translateX(50px)";
    winesIMG.style.opacity = "0.2";
    winesIMG.style.transition = "all 0.4s ease-in-out";
    setTimeout(() => {
      if (images.length > 0) {
        winesIMG.src = `./assets/wines/${images[index]}`;
      }
      winesIMG.style.transform = "translateX(0px)";
      winesIMG.style.opacity = "1";

      setTimeout(() => {
        winesIMG.style.transform = "";
        winesIMG.style.transition = "";
      }, 400);
    }, 200);
  }

  // Alap nyilak
  if (leftArrow && images.length > 0) {
    leftArrow.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });
  }

  if (rightArrow && images.length > 0) {
    rightArrow.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });
  }

  // === Zoom funkció ===
  winesIMG.addEventListener("click", () => {
    const isZoomed = winesIMG.classList.toggle("zoomed");
    let overlay = document.querySelector("#overlay");

    if (isZoomed) {
      const scaleFactor = 2;
      const rect = winesIMG.getBoundingClientRect();
      const centerX = window.innerWidth / 2;
      const imageCenterX = rect.left + rect.width / 2;
      const offsetX = centerX - imageCenterX;
      const centerY = window.innerHeight / 2;
      const imageCenterY = rect.top + rect.height / 2;
      const offsetY = centerY - imageCenterY;
      winesIMG.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(${scaleFactor})`;

      // Overlay létrehozása
      if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "overlay";
        document.body.appendChild(overlay);
        setTimeout(() => overlay.classList.add("visible"), 20);
      }

      overlay.addEventListener("click", () => {
        exitZoom();
      });

      // Zoom nyilak létrehozása
      createZoomButtons();

    } else {
      exitZoom();
    }

    function exitZoom() {
      winesIMG.classList.remove("zoomed");
      winesIMG.style.transform = "";
      removeOverlay();
    }

    function removeOverlay() {
      if (overlay) {
        overlay.classList.remove("visible");
        overlay.addEventListener("transitionend", function handler() {
          overlay.removeEventListener("transitionend", handler);
          overlay.remove();
        });
      }
      document.querySelectorAll(".zoomedLeftArrow, .zoomedRightArrow").forEach(btn => btn.remove());
    }

    function createZoomButtons() {
      const zoomedLeftButton = document.createElement("button");
      const zoomedRightButton = document.createElement("button");
      zoomedLeftButton.className = "zoomedLeftArrow";
      zoomedRightButton.className = "zoomedRightArrow";
      zoomedLeftButton.innerHTML = '<img class="arrow" src="./assets/wines/leftarrow.svg" alt="left arrow">';
      zoomedRightButton.innerHTML = '<img class="arrow" src="./assets/wines/rightarrow.svg" alt="right arrow">';

      document.body.appendChild(zoomedLeftButton);
      document.body.appendChild(zoomedRightButton);

      // ➡️ Itt jön a lényeg: eseménykezelők
      zoomedLeftButton.addEventListener("click", e => {
        e.stopPropagation(); // Ne zárja be a zoomot
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        winesIMG.src = `./assets/wines/${images[currentIndex]}`;
        winesIMG.style.opacity = "0";        
        setTimeout(() => {
          winesIMG.style.opacity = "1";          
        }, 200);
               
      });

      zoomedRightButton.addEventListener("click", e => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        winesIMG.src = `./assets/wines/${images[currentIndex]}`;
        winesIMG.style.opacity = "0";        
        setTimeout(() => {
          winesIMG.style.opacity = "1";          
        }, 200);
               
      });
    }
  });
});

const params = new URLSearchParams(location.search);
const id = params.get('scrollTo');
if (id) {
  const el = document.getElementById(id);
  setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 300);
}