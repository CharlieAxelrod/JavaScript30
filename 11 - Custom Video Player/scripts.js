function toggleVideo(media) {
  if (media.paused) {
    media.play();
    this.innerText = '||';
  } else {
    media.pause();
    this.innerText = '►';
  } 
}

function adjustSlider(media, property) {
  media[property] = this.value;
}

const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const speed = document.querySelector('input[name="playbackRate"]');

playButton.addEventListener('click', function(){
  let boundToggle = toggleVideo.bind(this);
  boundToggle(video);
});

volume.addEventListener('input', function() {
  let boundAdjust = adjustSlider.bind(this);
  boundAdjust(video, 'volume');
});

speed.addEventListener('input', function() {
  let boundAdjust = adjustSlider.bind(this);
  boundAdjust(video, 'playbackRate');
});