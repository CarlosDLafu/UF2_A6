let audio = document.getElementById('player');
let volume = document.getElementById('volumeSlider');

function engegarAudio() {

    // engeguem audio
    audio.play();

    Waves(true);

}

function pausarAudio() {

    // engeguem audio
    audio.pause();
    
    Waves(false);

}

function Waves(play) {

    var waves = document.querySelectorAll('.wave');

    for (var i = 0; i < waves.length; i++) {
        play?waves[i].classList.add('playing'):waves[i].classList.remove('playing');
    }

}

volume.oninput = function() {
    audio.volume = this.value / 100;
}