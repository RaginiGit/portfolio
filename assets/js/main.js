let details = navigator.userAgent;
let regexp = /android|iphone|kindle|ipad/i;
let isMobileDevice = regexp.test(details);
if (!isMobileDevice) {
  document.write("<h3 style='text-align: center; user-select: none;background: hsl(207, 48%, 8%); line-height: 100vh;overflow: hidden;font-family: verdana;color: hsl(207, 90%, 72%)'>Use Mobile to view it</h3>");
  document.body.style.margin = '0';
  document.body.style.padding = '0';
  document.body.style.overflow = 'hidden';
  

}
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 00,
  reset: true
})

sr.reveal('.home__data');



let numForInterval = 0;
let popupsAll = document.querySelectorAll('.nav__item p');

setInterval(() => {
  popupsAll.forEach((pop) => {
    if (pop.style.display === "inline-block" && pop.classList.contains("animate__zoomOut")) {
      pop.style.display = "none";
      pop.classList.remove("animate__zoomOut")

    }
  })
  let popups = document.querySelectorAll('.nav__item p')[numForInterval];
  popups.style.display = "inline-block";
  popups.classList.add("animate__animated")
  popups.classList.add("animate__zoomIn")
  setTimeout(() => {
    popups.classList.remove("animate__zoomIn")
    popups.classList.add("animate__zoomOut")
  }, 1000)

  if (numForInterval >= 5) {
    numForInterval = 0;
  }
  else {
    numForInterval++;
  }
}, 3000)

const modalViews = document.querySelectorAll('.services__modal'),
  modalBtns = document.querySelectorAll('.services__button'),
  modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');

}

modalBtns.forEach((mb, i) => {
  mb.addEventListener('click', () => {
    modal(i)
    const activeModalParent = document.querySelector('.active-modal');
    const activeModal = document.querySelector('.active-modal .services__modal-content');
    document.body.style.overflow = 'hidden';
    activeModalParent.addEventListener('click', function (event) {
      activeModalParent.classList.remove('active-modal');
      document.body.style.overflow = 'auto';


    })
    activeModal.addEventListener('click', function (event) {
      event.stopPropagation();
      activeModalParent.classList.add('active-modal');
    })
  })
})

modalClose.forEach((mc) => {
  mc.addEventListener('click', (event) => {
    modalViews.forEach((mv) => {
      event.stopPropagation();

      mv.classList.remove('active-modal');
      document.body.style.overflow = 'auto';

    })
  })
})

let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card'
  },
  animation: {
    duration: 300
  }
});

const linkWork = document.querySelectorAll('.work__item')

function activeWork() {
  linkWork.forEach(l => l.classList.remove('active-work'))
  this.classList.add('active-work')
}

linkWork.forEach(l => l.addEventListener('click', activeWork))

let swiper = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".testimonial__container .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    466: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 28,
    },
  }
});


const sections = document.querySelectorAll('section[id]:not(#testimonial)')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute('id')

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
      // scrollEl.setAttribute('href', divs[divs.indexOf(sectionId) + 1])
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive)

let swiperEffect = new Swiper(".home .mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".home .swiper-pagination",
  },
  initialSlide: 0,
  loop: true,
  navigation: {
    nextEl: ".home .swiper-button-next",
    prevEl: ".home .swiper-button-prev",
  },
});

let numVerified = false;
let textVerified = false;

function phonenumber(inputtxt) {
  let phoneno = /^\d{10}$/;
  let letters = /^[A-Za-z ]+$/;


  if (inputtxt.text2.value.match(letters)) {
    textVerified = true;
    if (inputtxt.text1.value.match(phoneno)) {
      numVerified = true;
    }
    else {
      alert("Invalid Phone Number");
      document.getElementById("numverified").focus();
      document.getElementById("numverified").select();
    }

  }
  else {
    alert("Invalid Name");
  }
}

window.onload = function () {
  btn.addEventListener('click', function () {
    if (numVerified && textVerified) {
      setTimeout(() => {
        btn.classList.add('onclic');
        validate();
      }, 250);

    }

  })

  function validate() {
    setTimeout(() => {
      btn.classList.remove("onclic");
      btn.classList.add("validate");
      callback()
    }, 2250);
  }

  function callback() {
    setTimeout(() => {
      btn.classList.remove("validate");
    }, 1800);
  }
}
