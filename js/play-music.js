// play-music.js
document.addEventListener('DOMContentLoaded', function() {
    document.body.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            playMusic();
        }
    });
});

function playMusic() {
    var audio = new Audio('../Lena Raine - Reach for the Summit.mp3'); // Replace with your music file path
    audio.play();
}
