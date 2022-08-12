const hamb = document.querySelector('.fa');
const menu_button = document.querySelector('#hamburguer');
const backdrop = document.getElementById("backdrop");

function active_bar() {
  let tab_menu = document.getElementById("myLinks");

  if (tab_menu.style.display === "block") {
    tab_menu.style.display = "none";
    menu_button.classList.remove('menu-open');
  } else {
    tab_menu.style.display = "block";
    menu_button.classList.add('menu-open');
  }
}

/* .btn-close:hover:before::after{
  content: '\f00d';
} */

const oX = () => {
  if(hamb.className == "new"){
    hamb.className = "bar"
  }else{
    hamb.className = "new"
  }
};

const menuTab = () => {
  active_bar();
}

hamb.addEventListener('click', menuTab);