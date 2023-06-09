var menu = document.getElementById('hamburger');
menu.addEventListener('click', showMenu);
var links = document.getElementById('main_menu');

function showMenu(){
    links.classList.toggle('main_links_show');
}