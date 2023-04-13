const bulb = document.getElementById('bulb');

// switching to dark theme
bulb.onclick = function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        bulb.src = "img/bulb-2.png"
    }else{
        bulb.src = "img/bulb-1.png"
    }
}


