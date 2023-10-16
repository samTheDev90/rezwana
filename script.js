

const popup = document.querySelector('.popup-video');
  document.querySelectorAll('.video-container video').forEach(vid=>{
    vid.onclick=()=>{
      document.querySelector('.container').appendChild(popup) ;
     popup.style.display='block';
      document.querySelector('.popup-video video').src = vid.getAttribute('src');
      
    }
  });
  document.querySelector('.popup-video span' ).onclick = ()=>{
    popup.parentNode.removeChild(popup);

    // document.querySelector('.popup-video').style.display='none';
    
  };