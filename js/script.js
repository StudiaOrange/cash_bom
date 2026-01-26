document.querySelector('.play-button').addEventListener('click', function() {
    const video = document.getElementById('myVideo');
    const cover = document.querySelector('.video-cover');
    const button = this;

    // Показываем видео и прячем обложку
    video.style.display = 'block';
    cover.style.display = 'none';
    button.style.display = 'none'; // Прячем кнопку play

    // Начинаем воспроизведение видео
    video.play();
});