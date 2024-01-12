function toggleImage() {
    const mainImage = document.getElementById('profile-image-id');
    const flippedImage = document.getElementById('flipped-image-id');

    mainImage.classList.toggle('hidden');
    flippedImage.classList.toggle('hidden');
}
