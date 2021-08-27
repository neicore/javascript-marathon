function generateImage() {
    let image = document.createElement('img');
    let div = document.getElementById('image-grid');
    image.src = 'img.jpg';
    div.appendChild(image);
}

function removeImage() {
    let div = document.getElementById('image-grid');
    div.removeChild(div.lastChild);
}