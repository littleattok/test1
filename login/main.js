const overlayOpen=document.getElementById('overlayOpen');
const overlayOut=document.getElementById('overlayOut');
const overlay= document.getElementById('overlay');

overlayOpen.addEventListener('click', () => {
    overlay.classList.add("overlay-active");
  });
  
overlayOut.addEventListener('click', () => {
    overlay.classList.remove("overlay-active");
  });