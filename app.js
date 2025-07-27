let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('menu-icon1');
let menus = document.querySelector('.Menus');
menuIcon.addEventListener("click", function(){
menus.style.display="block";
menuIcon.style.display="none"
})
closeIcon.addEventListener("click", function(){
menuIcon.style.display="block"
menus.style.display="none"


})
