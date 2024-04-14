// js for header image slider
const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelector('.control-prev');
const next_btn = document.querySelector('.control-next');

let n = 0;
function changeslider(){
    for(let i = 0; i < imgs.length; i++){
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
}
changeslider();

prev_btn.addEventListener('click', (e)=>{
    if(n > 0){
        n--;
    }
    else{
        n = imgs.length - 1;
    }
    changeslider();
})
next_btn.addEventListener('click', (e)=>{
    if(n < imgs.length - 1){
        n++;
    }
    else{
        n = 0;
    }
    changeslider();
})
// js for scrolling usin mouse wheel horizontally
const scrollcontainer = document.querySelectorAll('.products');
for (const item of scrollcontainer){
  item.addEventListener('wheel', (evt)=>{
    evt.preventDefault();
    item.scrollLeft += evt.deltaY;
  });
}

//js for popup and Email validation--
let modelBox = document.getElementById("modelBox");
    document.onmouseleave = function(){
        modelBox.style.display = "block";
    }
    function closeModel(){
        modelBox.style.display = "none";
    }
    var emailfield = document.getElementById("email-field");

  function validateEmail(){
  

    if(!emailfield.value.match(/^[A-za\._\-0-9]*[@][A-za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "please enter a valid email";
        emailfield.style.borderBlockColor = "red";
        emailError.style.top = "30px";
        return false;
    }
    emailError.innerHTML = "";
    emailfield.style.borderBlockColor = "green";
    emailError.style.top = "50px";
    return true;
  }
  /// js for zooming out images
  var width = 100;
  var addition = 2;
  var intervalId = 0; // Corrected variable name
  
  function increase() {
      clearInterval(intervalId);
      intervalId = setInterval(zoomin, 10); // Corrected variable name
  }
  
  function decrease() {
      clearInterval(intervalId);
      intervalId = setInterval(zoomout, 10); // Corrected variable name
  }
  
  function zoomin() {
      if (width < 200) {
          width = width + addition;
          document.getElementById("img").style.width = width + 'px'; // Set the new width to the element
          console.log(width);
      } else {
          clearInterval(intervalId);
      }
  }
  
  function zoomout() {
      if (width > 100) {
          width = width - addition;
          document.getElementById("img").style.width = width + 'px'; // Set the new width to the element
          imgElement.style.zIndex = '1';
          console.log(width);
      } else {
          clearInterval(intervalId);
          imgElement.style.zIndex = '4';
      }
  }
  ///js for image slider
  const slides = document.querySelector('.slides');
  const slideWidth = slides.clientWidth;
  let currentIndex = 0;

  function slide() {
    currentIndex = (currentIndex + 1) % slides.children.length;
    const offset = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${offset}px)`;
  }

  setInterval(slide, 4000); // Change slides every 4 seconds
  