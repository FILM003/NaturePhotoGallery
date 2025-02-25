document.querySelectorAll('.card').forEach(card => {
    let img = card.querySelector('img');
    let video = card.querySelector('video');

    card.addEventListener('mouseenter', () => {
        img.style.opacity = 0;
        video.style.opacity = 1;
        video.play();
    });

    card.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
        video.style.opacity = 0;
        img.style.opacity = 1;
    });
});