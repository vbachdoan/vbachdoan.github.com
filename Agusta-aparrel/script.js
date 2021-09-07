

/**
 * Slide 1's animation
 */

// explore this comment 
// let slide1_block1_image1, slide1_block1_image2,
//     slide1_block3_image1, slide1_block3_image2,
//     slide1_block4_image1, slide1_block4_image2,
//     slide1_block4_image3,
//     slide1_block5_image1, slide1_block5_image2,
//     slide1_block7_image1, slide1_block7_image2
// if (window.innerWidth >= 800) {
//     slide1_block1_image1 = './image/slide1_block1_image1_biggest.png'
// }

document.getElementById('slide1_block1_logo1').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block1_image').setAttribute('src', './image/slide1_block1_image1.png')
    document.getElementById('slide1_block1_logo1').style.border = '1px solid rgba(0,0,0,1)'
    document.getElementById('slide1_block1_logo2').style.border = '1px solid rgba(0,0,0,0)'
})
document.getElementById('slide1_block1_logo2').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block1_image').setAttribute('src', './image/slide1_block1_image2.png')
    document.getElementById('slide1_block1_logo1').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block1_logo2').style.border = '1px solid rgba(0,0,0,1)'
})
document.getElementById('slide1_block3_logo1').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block3_image').setAttribute('src', './image/slide1_block3_image1.png')
    document.getElementById('slide1_block3_logo1').style.border = '1px solid rgba(0,0,0,1)'
    document.getElementById('slide1_block3_logo2').style.border = '1px solid rgba(0,0,0,0)'
})
document.getElementById('slide1_block3_logo2').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block3_image').setAttribute('src', './image/slide1_block3_image2.png')
    document.getElementById('slide1_block3_logo1').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block3_logo2').style.border = '1px solid rgba(0,0,0,1)'
})
document.getElementById('slide1_block4_logo1').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block4_image').setAttribute('src', './image/slide1_block4_image1.png')
    document.getElementById('slide1_block4_logo1').style.border = '1px solid rgba(0,0,0,1)'
    document.getElementById('slide1_block4_logo2').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block4_logo3').style.border = '1px solid rgba(0,0,0,0)'
})
document.getElementById('slide1_block4_logo2').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block4_image').setAttribute('src', './image/slide1_block4_image2.png')
    document.getElementById('slide1_block4_logo1').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block4_logo2').style.border = '1px solid rgba(0,0,0,1)'
    document.getElementById('slide1_block4_logo3').style.border = '1px solid rgba(0,0,0,0)'
})
document.getElementById('slide1_block4_logo3').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block4_image').setAttribute('src', './image/slide1_block4_image3.png')
    document.getElementById('slide1_block4_logo1').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block4_logo2').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block4_logo3').style.border = '1px solid rgba(0,0,0,1)'
})
document.getElementById('slide1_block5_logo1').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block5_image').setAttribute('src', './image/slide1_block5_image1.png')
    document.getElementById('slide1_block5_logo1').style.border = '1px solid rgba(0,0,0,1)'
    document.getElementById('slide1_block5_logo2').style.border = '1px solid rgba(0,0,0,0)'
})
document.getElementById('slide1_block5_logo2').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block5_image').setAttribute('src', './image/slide1_block5_image2.png')
    document.getElementById('slide1_block5_logo1').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block5_logo2').style.border = '1px solid rgba(0,0,0,1)'
})
document.getElementById('slide1_block7_logo1').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block7_image').setAttribute('src', './image/slide1_block7_image1.png')
    document.getElementById('slide1_block7_logo1').style.border = '1px solid rgba(0,0,0,1)'
    document.getElementById('slide1_block7_logo2').style.border = '1px solid rgba(0,0,0,0)'
})
document.getElementById('slide1_block7_logo2').addEventListener('mouseenter', () => {
    document.getElementById('slide1_block7_image').setAttribute('src', './image/slide1_block7_image2.png')
    document.getElementById('slide1_block7_logo1').style.border = '1px solid rgba(0,0,0,0)'
    document.getElementById('slide1_block7_logo2').style.border = '1px solid rgba(0,0,0,1)'
})

