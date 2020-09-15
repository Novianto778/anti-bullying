const dampak = [
  {
    name: "Depresi",
    text:
      "Necessitatibus, vitae ipsa? Ab, placeat? Placeat ad quasi, sunt hic praesentium suscipit excepturi necessitatibus qui facere iste illum assumenda in quos esse!",
    imgUrl: "images/1.png",
  },
  {
    name: "Benci Diri Sendiri",
    text:
      "Korban bullying menjadi benci dirinya sendiri. Terutama dalam bullying yang menghina fisik, korban menjadi benci dengan fisiknya sendiri dan menjadi malu untuk tampil di public",
    imgUrl: "images/2.png",
  },
  {
    name: "Kesehatan Menurun",
    text:
      "Kesehatan korban bullying menjadi menurun baik kesehatan jasmani maupun mental. Suasana hati korban bullying sangat buruk sehingga berdampak bagi kesehatannya.",
    imgUrl: "images/3.png",
  },
  {
    name: "Bunuh Diri",
    text:
      "Ini merupakan dampak paling fatal dari bullying. Kondisi mental korban yang menurun disertai tidak adanya dukungan dari sekitar, membuat korban lelah untuk menjalani hidupnya dan memilih untuk bunuh diri.",
    imgUrl: "images/4.png",
  },
];

const img = document.querySelector("#person-img");
const name = document.querySelector("#name");
const text = document.querySelector("#text");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const readBtn = document.querySelector(".btn-read");
const pengertian = document.querySelector("#pengertian");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.querySelector(".navbar");

let index = 0;

nextBtn.addEventListener("click", function () {
  index++;
  if (index > dampak.length - 1) {
    index = 0;
  }
  showDampak(index);
});

prevBtn.addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = dampak.length - 1;
  }
  showDampak(index);
});

function showDampak(index) {
  const item = dampak[index];
  name.textContent = item.name;
  text.textContent = item.text;
  img.src = item.imgUrl;
}

const navHeight = navbar.getBoundingClientRect().height;
window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > navHeight) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

readBtn.addEventListener("click", function () {
  let position = pengertian.offsetTop - navHeight;
  const fixedNav = navbar.classList.contains("sticky");

  if (!fixedNav) {
    position -= navHeight;
  }

  window.scrollTo({
    top: position,
    behavior: "smooth",
  });
});

navLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("sticky");
    let position = element.offsetTop - navHeight;

    if (!fixedNav) {
      position -= navHeight;
    }

    window.scrollTo({
      top: position,
      behavior: "smooth",
    });
  });
});
