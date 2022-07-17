//Variables to connect to the HTML classes needed

const mainMenu = document.querySelector('.mainMenu');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');

//Click events for opening the menu with the burger button, close the menu with the
// 'X'(close) button, or close it upon link click in the open mobile menu.
openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)
mainMenu.addEventListener('click', close)

//Show will make the normally hidden Navbar visibile.

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}

//Close will move the Navbar section up 100%, essentially moving it out of visibility from the screen

function close(){
    mainMenu.style.top = '-100%'
}



