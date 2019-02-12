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

function scrubVideo(media, scrub = false) {
  if (scrub) media.currentTime = this.value;
  else media.currentTime += Number(this.dataset.skip);
}

const video = document.querySelector('.viewer');
const playButton = document.querySelector('.toggle');
const volume = document.querySelector('input[name="volume"]');
const speed = document.querySelector('input[name="playbackRate"]');
const playbackButtons = document.querySelectorAll('.player__button:not(.toggle)');
const filled = document.querySelector('.progress__filled');

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

playbackButtons.forEach(button => {
  button.addEventListener('click', function() {
    let boundScrub = scrubVideo.bind(this);
    boundScrub(video);
  });
});

video.addEventListener('timeupdate', function() {
  filled.style.flexBasis = `${100 * (video.currentTime/video.duration)}%`;
});


