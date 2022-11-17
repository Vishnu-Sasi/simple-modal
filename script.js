const modal = document.getElementById("modal");
const modalBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");
const overlay = document.getElementById("overlay");

modalBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("open");
  overlay.classList.add("open");
});
let closeModal = () => {
  modal.classList.remove("open");
  overlay.classList.remove("open");
};
closeBtn.addEventListener("click", (e) => {
  closeModal();
});
overlay.addEventListener("click", () => {
  closeModal();
});
