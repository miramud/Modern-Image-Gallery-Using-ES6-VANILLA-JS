const [selectedImg, imgs] = [document.querySelector('.selected-img img'), document.querySelectorAll('.thumbnail-imgs img')]

imgs[0].style.opacity = 0.6

imgs.forEach(img => img.addEventListener('click', imgClicked))

function imgClicked (e) {
    // Reset opacity of all the other images when selecting one of the images
    imgs.forEach(img => img.style.opacity = 1)

    // Change the src of the original image to that of the selected image
    selectedImg.src = e.target.src

    // Add the fade-in animation
    selectedImg.classList.add('fade-in')
    // Refresh the fade-in animation for the next selections
    setTimeout(()=>selectedImg.classList.remove('fade-in') , 600)

    // Change the opacity of the selected image
    e.target.style.opacity = 0.5

}