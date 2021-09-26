let mainSlide = document.getElementById('transSlide').getAttribute('src');
let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4 = document.getElementById('slide4');
let slide5 = document.getElementById('slide5');
const list = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5']

// alert(list);
document.querySelector('#slide1').addEventListener('click', () => {
    document.getElementById('transSlide').animate(
        [{ opacity: 0 }, { opacity: 1 }, ], {
            duration: 500
        })
    document.querySelector('#slide1').style.opacity = '0.6';
    for (let i of list) {
        if (i != 'slide1') {
            document.getElementById(`${i}`).style.opacity = '1';
        }
    }
});
document.querySelector('#slide2').addEventListener('click', () => {
    document.getElementById('transSlide').animate(
        [{ opacity: 0 }, { opacity: 1 }, ], {
            duration: 500
        })
    document.querySelector('#slide2').style.opacity = '0.6';
    for (let i of list) {
        if (i != 'slide2') {
            document.getElementById(`${i}`).style.opacity = '1';
        }
    }
});
document.querySelector('#slide3').addEventListener('click', () => {
    document.getElementById('transSlide').animate(
        [{ opacity: 0 }, { opacity: 1 }, ], {
            duration: 500
        })
    document.querySelector('#slide3').style.opacity = '0.6';
    for (let i of list) {
        if (i != 'slide3') {
            document.getElementById(`${i}`).style.opacity = '1';
        }
    }
});
document.querySelector('#slide4').addEventListener('click', () => {
    document.getElementById('transSlide').animate(
        [{ opacity: 0 }, { opacity: 1 }, ], {
            duration: 500
        })
    document.querySelector('#slide4').style.opacity = '0.6';
    for (let i of list) {
        if (i != 'slide4') {
            document.getElementById(`${i}`).style.opacity = '1';
        }
    }
});
document.querySelector('#slide5').addEventListener('click', () => {
    document.getElementById('transSlide').animate(
        [{ opacity: 0 }, { opacity: 1 }, ], {
            duration: 500
        })
    document.querySelector('#slide5').style.opacity = '0.6';
    for (let i of list) {
        if (i != 'slide5') {
            document.getElementById(`${i}`).style.opacity = '1';
        }
    }
});
// for (let i of list) {
//     alert(i);
// }
document.getElementById('slide1').style.transitionDuration = '1s';
document.getElementById('slide2').style.transitionDuration = '1s';
document.getElementById('slide3').style.transitionDuration = '1s';
document.getElementById('slide4').style.transitionDuration = '1s';
document.getElementById('slide5').style.transitionDuration = '1s';

document.getElementsByTagName("body").style.