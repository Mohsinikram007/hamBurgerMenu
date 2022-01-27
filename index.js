let list = document.querySelector(".list");
let closeMenu = document.querySelector(".closeMenu");
let opneMenu = document.querySelector(".openMenu");

opneMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show()
{
    list.style.display = 'flex';
    list.style.top = '0';
    
}
function close()
{
    list.style.top ="-100%";
}

