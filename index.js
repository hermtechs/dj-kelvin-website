const video_element = document.querySelectorAll('#video-element');
const controls_btns = document.querySelectorAll('.controls-video');
if(video_element.paused){
    controls_btns.classList.add('change-content-pseudo');
}
controls_btns[0].addEventListener('click', ()=>{
    for(var i=0; i<=video_element.length; i++){
      const eachVideo = video_element[i];
      eachVideo.play()   
    }  
})