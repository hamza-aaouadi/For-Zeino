window.onload = function() {
    generateHearts();
};


function generateHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.animationDuration = 5 + Math.random() * 5 + 's'; // Durée aléatoire entre 5 et 10 secondes
        document.body.appendChild(heart);
    }
}
