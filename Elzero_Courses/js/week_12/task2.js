let imgs = document.images

console.log(imgs)

for (let x = 0; x < imgs.length;x++){
    imgs[x].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
    imgs[x].alt = "Elzero Logo"
}