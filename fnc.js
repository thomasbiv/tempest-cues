/*
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      document.querySelectorAll(".image-container")[0].classList.add("fadeInLeft");
      document.querySelectorAll(".image-container")[1].classList.add("fadeInRight");
    }
  })
})

observer.observe(document.querySelector(".gallery1"))
*/
let observerOptions = {
    rootMargin: '0px',
    threshold: 0.5
  }
  
  var observer = new IntersectionObserver(observerCallback, observerOptions);
  
  function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
          document.querySelectorAll(".image-container")[0].classList.add("fadeInLeft");
          document.querySelectorAll(".image-container")[1].classList.add("fadeInRight");
          document.querySelectorAll(".image-container")[2].classList.add("fadeInLeft");
          document.querySelectorAll(".image-container")[3].classList.add("fadeInRight");
          document.querySelectorAll(".image-container")[4].classList.add("fadeInLeft");
          document.querySelectorAll(".image-container")[5].classList.add("fadeInRight");
          document.querySelectorAll(".image-container")[6].classList.add("fadeInLeft");
          document.querySelectorAll(".image-container")[7].classList.add("fadeInRight");
        }
    });
  };
  
  let target = '.service-images';
  document.querySelectorAll(target).forEach((i) => {
      if (i) {
          observer.observe(i);
      }
  });
  
  function shrinkNav() {
      var x = document.getElementById("navBar");
      if (x.className === "navbar") {
        x.className += " responsive";
      } else {
        x.className = "navbar";
      }
    }