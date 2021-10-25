class Scroll {
    constructor(obj) {
        this.element = document.querySelector(obj.element);
        this.top = obj.top;
        this.element.style.position = 'fixed';
        this.unit = obj.unit;
        this.element.style.top = this.scroll();

        window.addEventListener('scroll', () => this.scroll());
        window.addEventListener('resize', () => this.scroll());
    }

    scroll() {
        this.window = this.scrollNumber();
        if (this.window - pageYOffset > 0) {
            this.element.style.top = this.window - pageYOffset + 'px';
        }else {
            this.element.style.top = 0;
        }

    }

    scrollNumber() {
        if (this.unit == 'px') {
            return this.top >= 0 ? this.top : 0;
        } else if (this.unit == '%' || this.unit == undefined) {
            return this.calc(window.innerHeight, this.top) - this.element.clientHeight;
        }
    }


    calc(height, top) {
        return height / 100 * top
    }
}



const scroll = new Scroll({
    element: '.header__nav',
    top: 100,
    unit: '%'
})


const headerbig = document.querySelector('.header__content')
function headerTeleport() {
    const h1 = document.createElement('h1')
    h1.innerHTML = 'HEADER TITLE'
    const disc = document.createElement('p')
    disc.innerHTML = "header description";
    const rplace = document.createElement('div')
    rplace.classList.add('rplace')

     let height = headerbig.clientHeight;
     let width = headerbig.clientWidth;

 let x = randomPlace(0, width - 200)
 let y = randomPlace(0, height - 150)

 rplace.style = `
 left: ${x}px;
 top: ${y}px;
 position: absolute;
 text-align: center;
 `;

rplace.appendChild(h1)
rplace.appendChild(disc)
headerbig.appendChild(rplace)
}
     headerTeleport();
headerbig.addEventListener('mouseover', (e) => {
    console.log(e.target.parentNode);
    if (
      e.target.classList.contains("rplace") ||
      e.target.parentNode.classList.contains("rplace")
    ) {
      e.target.parentNode.remove();
      headerTeleport();
    }
})


// console.log(pageYOffset);

// alert('asdasd')

// window.alert('asdasd')

// window.console.log()

// console.log(scrollY);
// console.log(scrollX);

// console.log(name);


function randomPlace(min, max) {
  return Math.floor(Math.random() * (max + 1 - min) + min);
}