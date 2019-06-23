

// -----------------------------------------------------
var close =  document.querySelectorAll(".close")
var menubox =  document.querySelector(".menubox")
var  menu = document.querySelector('.menu')

close.forEach(function(closelist) {
    closelist.addEventListener('click',closelistHandler)
    function  closelistHandler(){
        if(menubox.style.display == 'block'){
            menubox.style.display = 'none'
            menu.classList.remove('menuani')
        }else{
            menubox.style.display = 'none'   
        }
    }
})
// -----------------------------------------------------