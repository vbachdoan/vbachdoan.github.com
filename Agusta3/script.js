setInterval(function(){
    if(window.innerWidth>=990){
        document.getElementById('banner_image').setAttribute('src','./Image/header-banner-pcSize.png')
    }
    else if(window.innerWidth<990 && window.innerWidth>=575){
        document.getElementById('banner_image').setAttribute('src','./Image/header-banner-tabletSize.webp')
    }
    else{
        document.getElementById('banner_image').setAttribute('src','./Image/header-banner-mobileSize.webp')
    }
},100)


// swiper Animation
let isDown=false
let begin=0,finish=0
let preV

// change image for slide 3
setInterval(() => {
    if(window.innerWidth<990){
        document.getElementById('slide3_image').setAttribute('src','./Image/slide3_tabletSize.webp')
    }
    else{
        document.getElementById('slide3_image').setAttribute('src','./Image/slide3_bigSize.webp')
    }
}, 100);