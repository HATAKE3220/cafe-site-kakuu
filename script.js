   const showpage=(show)=> {
   
   document.querySelectorAll('.page')
   .forEach(p => p.classList.remove('active'));

   document.getElementById(show).classList.add('active');
   }

   
   const topbtnsyutoku = document.getElementById("topbtn");

  topbtnsyutoku.addEventListener("click",()=>{
  window.scrollTo({
   top: 0,
   behavior: "smooth"
   });
});

  const slide = document.querySelectorAll(".fade");
let ima = 0; // ← 現在の画像番号を管理する変数

setInterval(() => {
  slide[ima].classList.remove("anime");
  ima = (ima + 1) % slide.length;
  slide[ima].classList.add("anime");
}, 7000);

  const slider = document.querySelectorAll(".off");
let current = 0;

setInterval(() => {
  const next = (current + 1) % slider.length;
  slider[current].classList.remove("on");
  slider[current].classList.add("prev");

slider[next].classList.remove("prev");

slider[next].classList.add("on");

  setTimeout(() => {
    slider[current].classList.remove("prev");
    current = next;
  }, 2000);

}, 5000);

  const miseru = document.querySelectorAll(".coffee");
let kazu = 0; // ← 現在の画像番号を管理する変数

setInterval(() => {
  miseru[kazu].classList.remove("deta");
  kazu = (kazu + 1) % miseru.length;
  miseru[kazu].classList.add("deta");
}, 7000);

  const mawaru = document.querySelectorAll(".tugi");
let counter = 0;

setInterval(() => {
  const ji = (counter + 1) % mawaru.length;
  mawaru[counter].classList.remove("ok");
  mawaru[counter].classList.add("kaeri");

mawaru[ji].classList.remove("kaeri");

mawaru[ji].classList.add("ok");

  setTimeout(() => {
   
mawaru[counter].classList.remove("kaeri");
    counter = ji;
  }, 2000);

}, 5000);
  
  const btnn = 
document.querySelector(".naav");
  const btnti =
document.querySelector(".navi");

  btnn.addEventListener("click", () => {
     btnti.classList.toggle("dete");
    }); 


  const form = document.getElementById("myForm");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeModal");

form.addEventListener("submit", (e) => {
  e.preventDefault();  // 本当の送信を止める
  modal.style.display = "flex"; // モーダル表示
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none"; // モーダル閉じる
});

  