let opennavbarIcon = document.getElementById("bar");
let navbar = document.getElementById("navbar");
let closenavbarIcon = document.getElementById("closenavbar")


opennavbarIcon.onclick = function(){
    navbar.classList.add('active');
}

closenavbarIcon.onclick = function(){
    navbar.classList.remove('active');
}