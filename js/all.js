

window.addEventListener("load", () => {
  (function () {
    var preloader = document.querySelector('#preloader');

    if(!preloader) { return }
    preloader.classList.add('hidden');
  })();

  (function () {
    let speed = 2; // Скорость скролла.

    let scroll = document.querySelector('.item__row_1');

    if(!scroll) { return }

    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.

    scroll.addEventListener('mousedown', function (e) {
      drag = true;
      coorX = e.pageX - this.offsetLeft;
    });
    document.addEventListener('mouseup', function () {
      drag = false;
      left = scroll.scrollLeft;
    });
    scroll.addEventListener('mousemove', function (e) {
      if (drag) {
        this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed;
      }
    });
  })();

  (function () {
    let speed = 2; // Скорость скролла.

    let scroll = document.querySelector('.item__row_2');

    if(!scroll) { return }

    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.

    scroll.addEventListener('mousedown', function (e) {
      drag = true;
      coorX = e.pageX - this.offsetLeft;
    });
    document.addEventListener('mouseup', function () {
      drag = false;
      left = scroll.scrollLeft;
    });
    scroll.addEventListener('mousemove', function (e) {
      if (drag) {
        this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed;
      }
    });
  })();

  (function () {
    let speed = 2; // Скорость скролла.

    let scroll = document.querySelector('.item__row_3');

    if(!scroll) { return }

    let left = 0; // отпустили мышку - сохраняем положение скролла
    let drag = false;
    let coorX = 0; // нажали мышку - сохраняем координаты.

    scroll.addEventListener('mousedown', function (e) {
      drag = true;
      coorX = e.pageX - this.offsetLeft;
    });
    document.addEventListener('mouseup', function () {
      drag = false;
      left = scroll.scrollLeft;
    });
    scroll.addEventListener('mousemove', function (e) {
      if (drag) {
        this.scrollLeft = left - (e.pageX - this.offsetLeft - coorX) * speed;
      }
    });
  })();

  (function () {
    const chartitem = document.querySelectorAll('[data-chartitem]');

    if(!chartitem) { return }
    chartitem.forEach((item) => {
      const idelem = item.getAttribute('data-chartitem');
      item.addEventListener('mouseover', () => {
        const currentElems = document.querySelectorAll(`[data-chartitem=${idelem}]`);
        currentElems.forEach((el) => {
          el.classList.add('active')
        });
      });
      item.addEventListener('mouseout', () => {
        const currentElems = document.querySelectorAll(`[data-chartitem=${idelem}]`);
        currentElems.forEach((el) => {
          el.classList.remove('active')
        });
      });
    });

  })();

  (function () {
    const img = document.querySelector('#random-image')
    const imgWebp = document.querySelector('#random-image-webp')
    const imgPng = document.querySelector('#random-image-png')

    if(!img) return
    const interval = setInterval(() => {
      if(!img || !imgWebp || !imgPng) {
        clearInterval(interval)
        return
      }
      const limit = { min: 1, max: 29 }
      const random = Math.floor(Math.random() * ((limit.max + 1) - limit.min) + limit.min)

      img.setAttribute('src', `/img/ran/small/${random}.png`)
      imgWebp.setAttribute('srcset', `/img/ran/small/${random}.webp, /img/ran/small/${random}@2.webp 2x`)
      imgPng.setAttribute('srcset', `/img/ran/small/${random}.png, /img/ran/small/${random}@2.png 2x`)
    },600)
  })();
});

// document.addEventListener("DOMContentLoaded", () => {
//   // const splashInput = document.querySelector(".splash-input");

//   // if(!splashInput) { return }
//   // var splashVal = parseFloat(splashInput.value);
//   // const elem__plus = document.querySelector(".counter-elem__plus");
//   // const elem__minus = document.querySelector(".counter-elem__minus");

//   // if(!elem__plus || !elem__minus) { return }
//   // elem__plus.onclick = function () {
//   //   splashInput.value = ++splashVal;
//   // }
//   // elem__minus.onclick = function () {
//   //   if (splashVal > 1) {
//   //     splashInput.value = --splashVal;
//   //   }
//   // }
// });


// document.addEventListener("DOMContentLoaded", () => {
//   // const button = document.querySelector(".footer__link");

//   // if(!button) { return }
//   // const dataText = button.dataset.text.trim();

//   // button.addEventListener('click', () => {

//   //   if (!dataText.length) return;

//   //   navigator.clipboard.writeText(dataText)
//   //     .then(() => console.log("Done!"))
//   //     .catch(err => console.error(err))
//   // })
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // //popup1
//   // let popupBg = document.querySelector('.popup__bg');
//   // let popup = document.querySelector('.popup');
//   // let openPopupButtons = document.querySelectorAll('.mint__button');
//   // let closePopupButton = document.querySelector('.close-popup');

//   // openPopupButtons.forEach((button) => {
//   //   button.addEventListener('click', (e) => {
//   //     e.preventDefault();
//   //     popupBg.classList.add('active');
//   //     popup.classList.add('active');
//   //   })
//   // });

//   // closePopupButton.addEventListener('click', () => {
//   //   popupBg.classList.remove('active');
//   //   popup.classList.remove('active');
//   // });

//   // document.addEventListener('click', (e) => {
//   //   if (e.target === popupBg) {
//   //     popupBg.classList.remove('active');
//   //     popup.classList.remove('active');
//   //   }
//   // });

//   // document.addEventListener('keydown', function (e) {
//   //   if (e.key === 'Escape') {
//   //     //ваша функция закрытия окна
//   //     popupBg.classList.remove('active');
//   //     popup.classList.remove('active');
//   //   }
//   // });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   // const rangeInputs = document.querySelectorAll('input[type="range"]')
//   // const numberInput = document.querySelector('input[type="number"]')

//   // function handleInputChange(e) {
//   //   let target = e.target
//   //   if (e.target.type !== 'range') {
//   //     target = document.getElementById('range')
//   //   }
//   //   const min = target.min
//   //   const max = target.max
//   //   const val = target.value

//   //   target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
//   // }

//   // rangeInputs.forEach(input => {
//   //   input.addEventListener('input', handleInputChange)
//   // })

//   // numberInput.addEventListener('input', handleInputChange)

// });
