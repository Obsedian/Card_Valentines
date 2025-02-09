function nextPage(page) {
    window.location.href = page;
}

function trickNoButton() {
    let noButton = document.querySelector('.no-btn');
    let randomX = Math.random() * (window.innerWidth - 100);
    let randomY = Math.random() * (window.innerHeight - 100);
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

