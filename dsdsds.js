function getRandomPosition() {
  var max = 80; // Altere o valor para ajustar o movimento do botão
  return Math.floor(Math.random() * max);
  const playButton = document.getElementById('playButton');


const audio = new Audio('assets');

playButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play();
    playButton.textContent = 'Pausar "Flamingos"';
  } else {
    audio.pause();
    playButton.textContent = 'Clique para tocar "Flamingos"';
  }
});

}