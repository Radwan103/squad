// start info for navbar
let navBar = document.querySelector(".navbar");
let navItems = document.querySelectorAll(".navbar-nav .nav-item .nav-link");
navItems[0].classList.add("activated");

// sections
let headPage = document.getElementById("head-page");
let aboutUs = document.getElementById("about");
let services = document.getElementById("services");
let portfolio = document.getElementById("portfolio");
let team = document.getElementById("team");
let contact = document.getElementById("contact");

// changes on scroll to navbar and counter
window.onscroll = function () {
  if (window.scrollY + 30 > sec.offsetTop) {
    if (!started) {
      numS.forEach((num) => {
        startCount(num);
      });
    }
    started = true;
  }
/**************/
  if (window.scrollY > 1) {
    navBar.classList.add("scrolled-nav");
  } else {
    navBar.classList.remove("scrolled-nav");
  }
/**************/
  navItems.forEach((item) => {
    item.classList.remove("activated");
  });

  if (window.scrollY + 50 >= contact.offsetTop) {
    navItems[5].classList.add("activated");
  } else if (window.scrollY + 70 >= team.offsetTop) {
    navItems[4].classList.add("activated");
  } else if (window.scrollY + 30 >= portfolio.offsetTop) {
    navItems[3].classList.add("activated");
  } else if (window.scrollY + 30 >= services.offsetTop) {
    navItems[2].classList.add("activated");
  } else if (window.scrollY + 60 >= aboutUs.offsetTop) {
    navItems[1].classList.add("activated");
  } else {
    navItems[0].classList.add("activated");
  }

  /**************/
  // start go up
  let goUp = document.querySelector('.up');
  if(window.scrollY >= 500){
    goUp.style.display = 'flex';
  }else{
    goUp.style.display = 'none';
  }

  goUp.addEventListener('click' , function(){
    window.scroll({
        top :0,
        left: 0,
        behavior : 'smooth'
    });
  })
};

// start info for counter
let numS = document.querySelectorAll(".count-box .count-num");
let sec = document.querySelector(".services");
let started = false;

let startCount = function (el) {
  let goal = el.dataset.count;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(counter);
    }
  }, 1000 / goal);
};
// end counter

// start portfolio 
let switcherLis = document.querySelectorAll('.switcher li');
let boxes = document.querySelectorAll('.port-box');


switcherLis.forEach((li) =>{
  li.addEventListener("click" , removeActive);
  li.addEventListener("click" , manageBox);
})

function removeActive(){
  switcherLis.forEach((li) =>{
    li.classList.remove('activate');
    this.classList.add('activate');
  });
}

function manageBox(){
  boxes.forEach((box) =>{
    box.style.display = 'none';
  });
  document.querySelectorAll(this.dataset.cat).forEach((el) =>{
    el.style.display = 'block';
  })
}

// start pop up

let images = document.querySelectorAll('.portfolio .all .box img');
let links = document.querySelectorAll('.portfolio .all .box .link-box button');

links.forEach(link => {
  link.addEventListener('click' , (e) =>{

    let popOverLay = document.createElement('div');
    popOverLay.className = 'popup-overlay';
    document.body.appendChild(popOverLay);

    let popBox = document.createElement('div');
    popBox.className = 'popup-box';

    if(link.dataset.pop !== null){
      let popHeading =  document.createElement('h1');
      let headingText =  document.createTextNode(link.dataset.pop);

      popHeading.appendChild(headingText);
      popBox.appendChild(popHeading);
    }

    let imgs = document.createElement('img');
    imgs.src = link.dataset.image;
    popBox.appendChild(imgs);

    let close = document.createElement('span');
    close.className = 'close';

    let closeText = document.createTextNode('X');
    close.appendChild(closeText);

    popBox.appendChild(close);
    popOverLay.appendChild(popBox);

  })
})
document.addEventListener('click', (e) =>{
  if(e.target.className == 'close'){
      e.target.parentElement.remove()
      document.querySelector('.popup-overlay').remove();
  }
})






// swiper
new Swiper(".testimonials-slider", {
  speed: 600,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 40,
    },

    1200: {
      slidesPerView: 3,
    },
  },
});
