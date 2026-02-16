const fotosContainer = document.getElementById("herbieGallery");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

const herbieBlack = document.getElementById('herbieBlack');
const herbieBrown = document.getElementById('herbieBrown');

prevBtn.addEventListener("click", () => {
  nextBtn.style.display = "block";
  prevBtn.style.display = "none";
  herbieBrown.style.display = "none";
  herbieBlack.style.display = "block";
});

nextBtn.addEventListener("click", () => {
  prevBtn.style.display = "block";
  nextBtn.style.display = "none";
  herbieBrown.style.display = "block";
  herbieBlack.style.display = "none";
});
