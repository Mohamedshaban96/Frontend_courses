const imgs = document.images

for (let i = 0 ; i < imgs.length; i++){
    if (imgs[i].hasAttribute("alt")){
        imgs[i].alt = "Old"
    } else {
        imgs[i].setAttribute("alt","Elzero New")
    }
}