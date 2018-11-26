function openPopup(){
    document.getElementById("popup").style.visibility = "visible";
}

function closePopup(){
    document.getElementById("popup").style.visibility = "hidden";
}

function toggleBox(){
    var box = document.getElementById("box");
    if(box.style.display == "none"){
        box.style.display = "block";
    } else {
        box.style.display = "none";
    }
}