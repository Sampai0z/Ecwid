const hamb = document.getElementById('hamburguer');
const backdrop = document.getElementById("backdrop");

function myFunction() {
  let x = document.getElementById("myLinks");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
const toggleBackdrop = () => {
  backdrop.classList.toggle('none');
  return
};
const menuTab = () => {
  // toggleBackdrop()
  myFunction();
}

hamb.addEventListener('click', menuTab);