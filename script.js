// HAMBURGER MENU TOGGLE
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });


const words = [
    "Manpower Solutions ",
    "Contracting",
    "Rental Equipments",
    "Material Supply",
    "Transportation",
    "Accounting",
    "Portable Cabins",
    "Storage Containers"
];

let wordIndex = 0;
let charIndex = 0;
const typingSpeed = 100;
const eraseSpeed = 60;
const delayBetweenWords = 1500;

const dynamicText = document.querySelector(".dynamic-text");

function typeWord() {
    if (charIndex < words[wordIndex].length) {
        dynamicText.textContent += words[wordIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeWord, typingSpeed);
    } else {
        setTimeout(eraseWord, delayBetweenWords);
    }
}

function eraseWord() {
    if (charIndex > 0) {
        dynamicText.textContent = words[wordIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseWord, eraseSpeed);
    } else {
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeWord, 300);
    }
}

// Start animation
document.addEventListener("DOMContentLoaded", () => {
    typeWord();
});




document.addEventListener("DOMContentLoaded", () => {
  const manpowerImages = [
    "image/manpower/Manpower.png",
    "image/manpower/Manpower2.png",
    "image/manpower/Manpower3.png"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicManpowerImage");

  if (!imgElement) return; // safety check

  function changeImage() {
    // fade out
    imgElement.style.opacity = 0;

    setTimeout(() => {
      // change the image after fade out
      currentIndex++;
      if (currentIndex >= manpowerImages.length) currentIndex = 0;
      imgElement.src = manpowerImages[currentIndex];

      // fade in
      imgElement.style.opacity = 1;
    }, 500); // match CSS transition duration
  }

  // Change image every 3 seconds
  setInterval(changeImage, 3000);

  // Optional: click to manually change image
  imgElement.addEventListener("click", changeImage);
});
// document.addEventListener("DOMContentLoaded", () => {
//   const manpowerImages = [
//     "image/Manpower.png",
//     "image/background.jpg",
//     "image/Material.png"
//   ];

//   let currentIndex = 0;
//   const imgElement = document.getElementById("dynamicManpowerImage");

//   if (!imgElement) return; // safety check

//   function changeImage() {
//     // slide out to left
//     imgElement.style.transform = "translateX(-100%)";
//     imgElement.style.opacity = 0;

//     setTimeout(() => {
//       // change the image after slide out
//       currentIndex++;
//       if (currentIndex >= manpowerImages.length) currentIndex = 0;
//       imgElement.src = manpowerImages[currentIndex];

//       // slide in from right
//       imgElement.style.transform = "translateX(100%)";

//       setTimeout(() => {
//         imgElement.style.transition = "transform 0.5s ease, opacity 0.5s ease";
//         imgElement.style.transform = "translateX(0)";
//         imgElement.style.opacity = 1;
//       }, 50); // small delay for browser to register transform
//     }, 500); // match slide out duration
//   }

//   // Change image every 3 seconds
//   setInterval(changeImage, 3000);

//   // Optional: click to manually change image
//   imgElement.addEventListener("click", changeImage);
// });
document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/rental/escavator.png",
    "image//rental/dumptruck.jpg",
    "image/rental/Crane.png",
    "image/rental/forklift.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicRentalImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});

document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/material/steel.jpg",
    "image/material/tools.jpg",
    "image/material/electric.avif"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicMaterialImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});

document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/Contracting/Contracting1.jpg",
    "image/Contracting/Contracting2.jpg",
    "image/Contracting/Contracting3.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicContractImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});



document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/Accounting/Accounting1.jpg",
    "image/Accounting/Accounting2.jpg",
    "image/Accounting/Accounting3.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicAccountImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});

document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/Transportation/Transportation1.jpg",
    "image/Transportation/Transportation2.jpg",
    "image/Transportation/Transportation3.jpg",
    "image/Transportation/Transportation4.jpg"
    
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicTransportationImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});


document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/Storage/Storage1.jpg",
    "image/Storage/Storage2.png",
    "image/Storage/Storage3.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicStorageImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});

document.addEventListener("DOMContentLoaded", () => {
  const rentalImages = [
    "image/Portable/portable1.jpg",
    "image/Portable/portable2.jpg",
    "image/Portable/portable3.jpg"
  ];

  let currentIndex = 0;
  const imgElement = document.getElementById("dynamicPortableImage");

  if (!imgElement) return;

  function changeImage() {
    imgElement.style.opacity = 0;

    setTimeout(() => {
      currentIndex++;
      if (currentIndex >= rentalImages.length) currentIndex = 0;
      imgElement.src = rentalImages[currentIndex];
      imgElement.style.opacity = 1;
    }, 500);
  }

  setInterval(changeImage, 3000);
  imgElement.addEventListener("click", changeImage);
});


const hero = document.getElementById("hero");

const images = [
    "image/manpower/Manpower.png",
    "image/rental/escavator.png",
    "image/Storage/Storage2.png",
    
    "image/Transportation/Transportation2.jpg",
    "image/Accounting/Accounting2.jpg"
    


    
    
];

let index = 0;

// set initial background
hero.style.backgroundImage = `url(${images[index]})`;

setInterval(() => {
    index = (index + 1) % images.length;
    hero.style.backgroundImage = `url(${images[index]})`;
}, 4000); // change every 4 seconds


const header = document.getElementById("header");
const aboutSection = document.getElementById("about");


window.addEventListener("scroll", () => {
    const aboutBottom =
        aboutSection.offsetTop + aboutSection.offsetHeight - 100;

    if (window.scrollY > aboutBottom) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

