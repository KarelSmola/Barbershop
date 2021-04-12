// Selectors
const sluzbyBtn = document.querySelectorAll(".sluzba-btn").length;
const barberMen = document.querySelectorAll(".barberman-img").length;

// Listeners
for (let i = 0; i < sluzbyBtn; i++) {
  document
    .querySelectorAll(".sluzba-btn")
    [i].addEventListener("click", toggleContent);
}

for (let i = 0; i < barberMen; i++) {
  document
    .querySelectorAll(".barberman-img")
    [i].addEventListener("click", toggleContent);
}

// Functions
function toggleContent(e) {
  if (e.target.nextElementSibling.style.display === "flex") {
    e.target.nextElementSibling.style.display = "none";
    e.target.classList.remove("active");
  } else {
    e.target.nextElementSibling.style.display = "flex";
    e.target.classList.add("active");
  }
}
