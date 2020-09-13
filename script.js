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
