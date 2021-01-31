const video = document.querySelectorAll('#video-element');
const playPauseBtn = document.querySelectorAll('.play-btn');
playPauseBtn[0].addEventListener('click', ()=>{
    if(video[0].paused){
        playPauseBtn[0].classList.add('pause-btn');
        video[0].play();
    }
    else{
        video[0].pause();
        playPauseBtn[0].classList.remove('pause-btn');
    }
   
})