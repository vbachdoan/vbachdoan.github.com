

 /** 
 * animation for slide 2
 * 
 */
var a=getComputedStyle(document.getElementById('slider2')).backgroundImage;
//list url of sliders
const imageOfSlider2=[
    'url(\'./image/Content_Slider2_1stSwiper.webp\')',
    'url(\'./image/Content_Slider2_2ndSwiper.webp\')',
    'url(\'./image/Content_Slider2_3rdSwiper.webp\')'
]
//set the first value for navigation bar
if(a='url(\'./image/Content_Slider2_1stSwiper.webp\')'){
    document.getElementById('slider2_1').style.boxShadow='inset 0 -2.5px 0 0';
    document.getElementById('p1').style.opacity='1';
}

// changes slide
document.getElementById('slider2_1').addEventListener('click',function(){
    document.getElementById('slider2_1').style.boxShadow='inset 0 -2.5px 0 0 #000';
    document.getElementById('slider2_2').style.boxShadow='inset 0 -1px 0 0 #ccc';
    document.getElementById('slider2_3').style.boxShadow='inset 0 -1px 0 0 #ccc';
    document.getElementById('p1').style.opacity='1';
    document.getElementById('p2').style.opacity='0.4';
    document.getElementById('p3').style.opacity='0.4';
    document.getElementById('slider2').style.backgroundImage='url(\'./image/Content_Slider2_1stSwiper.webp\')';
})
document.getElementById('slider2_2').addEventListener('click',function(){
    document.getElementById('slider2_1').style.boxShadow='inset 0 -1px 0 0 #ccc';
    document.getElementById('slider2_2').style.boxShadow='inset 0 -2.5px 0 0 #000';
    document.getElementById('slider2_3').style.boxShadow='inset 0 -1px 0 0 #ccc';
    document.getElementById('p2').style.opacity='1';
    document.getElementById('p1').style.opacity='0.4';
    document.getElementById('p3').style.opacity='0.4';
    document.getElementById('slider2').style.backgroundImage='url(\'./image/Content_Slider2_2ndSwiper.webp\')';
})
document.getElementById('slider2_3').addEventListener('click',function(){
    document.getElementById('slider2_1').style.boxShadow='inset 0 -1px 0 0 #ccc';
    document.getElementById('slider2_2').style.boxShadow='inset 0 -1px 0 0 #ccc';
    document.getElementById('slider2_3').style.boxShadow='inset 0 -2.5px 0 0 #000';
    document.getElementById('p3').style.opacity='1';
    document.getElementById('p1').style.opacity='0.4';
    document.getElementById('p2').style.opacity='0.4';
    document.getElementById('slider2').style.backgroundImage='url(\'./image/Content_Slider2_3rdSwiper.webp\')';
})



/** 
 * animation changes slide
 * 
*/
//list url for banner
const sourceBanner=[
    './image/Header_banner1.webp',
    './image/Header_banner2.webp',
    './image/Header_banner3.jpg'
]
// set begin value
document.getElementById('banner_nav').children[0].style.height='3px'
document.getElementById('banner_nav').children[1].style.height='1px'
document.getElementById('banner_nav').children[2].style.height='1px'

document.getElementById('banner_nav').children[0].addEventListener('click',function(){
    setTimeout(function(){
        // change banner_nav's children height
        document.getElementById('banner_nav').children[0].style.height='3px'
        document.getElementById('banner_nav').children[1].style.height='1px'
        document.getElementById('banner_nav').children[2].style.height='1px'
        // change image
        document.getElementById('banner').style.backgroundImage=`url('${sourceBanner[0]}')`
    },0)
    setTimeout(function(){
        // add transition for word
    document.getElementById('banner_content').animate([{left:'-65%'},{left:'0%'}],{duration:650,delay:0})
    },1)
})

document.getElementById('banner_nav').children[1].addEventListener('click',function(){
    setTimeout(function(){
        // change banner_nav's children height
        document.getElementById('banner_nav').children[0].style.height='1px'
        document.getElementById('banner_nav').children[1].style.height='3px'
        document.getElementById('banner_nav').children[2].style.height='1px'
        // change image
        document.getElementById('banner').style.backgroundImage=`url('${sourceBanner[1]}')`
    })
    setTimeout(function(){
        // add transition for word
    document.getElementById('banner_content').animate([{left:'-65%'},{left:'0%'}],{duration:650,delay:0})
    },1)
})

document.getElementById('banner_nav').children[2].addEventListener('click',function(){
    setTimeout(function(){
        // change banner_nav's children height
        document.getElementById('banner_nav').children[0].style.height='1px'
        document.getElementById('banner_nav').children[1].style.height='1px'
        document.getElementById('banner_nav').children[2].style.height='3px'
        // change image
        document.getElementById('banner').style.backgroundImage=`url('${sourceBanner[2]}')`
    })
    setTimeout(function(){
        // add transition for word
    document.getElementById('banner_content').animate([{left:'-65%'},{left:'0%'}],{duration:650,delay:0})
    },1)
})



/** 
 * fake swiper animation for slide 1
 * note : the code still shake while it run
 * 
 */
let temp1,temp2,temp3,t1,t2,t3
let imageOfSlide1=[
    "./image/Content_Slider1_1stImage.webp",
    "./image/Content_Slider1_2ndImage.webp",
    "./image/Content_Slider1_3rdImage.webp"
]

document.getElementById('slide1_left_hexagon').addEventListener('click',function(){
    temp1=imageOfSlide1[0]
    temp2=imageOfSlide1[1]
    temp3=imageOfSlide1[2]

    document.getElementById('slide2_span').setAttribute('class','light')
    setTimeout(function(){document.getElementById('slide2_span').setAttribute('class','shadow')},450)

    imageOfSlide1[0]=temp2
    imageOfSlide1[1]=temp3
    imageOfSlide1[2]=temp1

    document.getElementById('slider1_prev').style.backgroundImage=`url('${imageOfSlide1[2]}')`
    document.getElementById('slider1_image1').style.backgroundImage=`url('${imageOfSlide1[0]}')`
    document.getElementById('slider1_image2').style.backgroundImage=`url('${imageOfSlide1[1]}')`
    document.getElementById('slider1_image3').style.backgroundImage=`url('${imageOfSlide1[2]}')`

    document.getElementById('slider1_prev').animate([{left:'-54%',},{left:'-85%'}],{duration:720,})
    document.getElementById('slider1_image1').animate([{left:'-5%',},{left:'-52.2%'}],{duration:680,})
    document.getElementById('slider1_image2').animate([{left:'34%',},{left:'-20%',}],{duration:650,})
    document.getElementById('slider1_image3').animate([{left:'30%'},{left:'5%'}],{duration:780,})
    // transform word
    document.getElementById('slide_title').animate([{marginLeft:'30%'},{marginLeft:'0%'}],{duration:600})
    document.getElementById('content_sub').animate([{marginLeft:'30%'},{marginLeft:'0%'}],{duration:500})

})

document.getElementById('slide1_right_hexagon').addEventListener('click',function(){
    t1=imageOfSlide1[0]
    t2=imageOfSlide1[1]
    t3=imageOfSlide1[2]

    imageOfSlide1[0]=t3
    imageOfSlide1[1]=t1
    imageOfSlide1[2]=t2

    document.getElementById('slider1_image1').style.backgroundImage=`url('${imageOfSlide1[2]}')`
    document.getElementById('slider1_image2').style.backgroundImage=`url('${imageOfSlide1[0]}')`
    document.getElementById('slider1_image3').style.backgroundImage=`url('${imageOfSlide1[1]}')`
    document.getElementById('slider1_next').style.backgroundImage=`url('${imageOfSlide1[2]}')`

    document.getElementById('slider1_image1').animate([{left:'-80%',},{left:'-54%'}],{duration:600,})
    document.getElementById('slider1_image2').animate([{left:'-55%',},{left:'-20%',}],{duration:680,})
    document.getElementById('slider1_image3').animate([{left:'-56%'},{left:'8%'}],{duration:720,})
    document.getElementById('slider1_next').animate([{left:'36%'},{left:'95%'}],{duration:720,})
    document.getElementById('slide3_span').animate([{backgroundColor:'rgba(0,0,0,0.8)'},{backgroundColor:'rgba(0,0,0,0)'}],{duration:550,delay:0})
    // transform word
    document.getElementById('slide_title').animate([{marginLeft:'-50%'},{marginLeft:'0%'}],{duration:500})
    document.getElementById('content_sub').animate([{marginLeft:'-50%'},{marginLeft:'0%'}],{duration:600})
})

document.getElementById('left_right_hexagon').addEventListener('click',function(){
    if (document.getElementById('slider1_image3').style.backgroundImage=='url("./image/Content_Slider1_1stImage.webp")')
    {
        document.getElementById('slide_title').innerText='URUS'
        document.getElementById('content_sub').innerText='UNLOCK ANY ROAD'
    }
    else if (document.getElementById('slider1_image3').style.backgroundImage=='url("./image/Content_Slider1_2ndImage.webp")')
    {
        document.getElementById('slide_title').innerText='AVENTADOR'
        document.getElementById('content_sub').innerText='REAL EMOTIONS SHAPE THE FUTURE'
    }
    else{
        document.getElementById('slide_title').innerText='HURACÁN'
        document.getElementById('content_sub').innerText='BASED ON A TRUE STORY'
    }
})



/**
 *  aniamtion for new slide1_smaller that replace slide1 if width<=1029px
 */
 document.getElementById('title_mini').innerText='URUS'
 document.getElementById('explain').innerText='UNLOCK ANY ROAD'

setInterval(
function(){
    let id=document.querySelector('.swiper-slide-active').id
    if( id=='mini1' ){
        document.getElementById('title_mini').innerText='URUS'
        document.getElementById('explain').innerText='UNLOCK ANY ROAD'
        // document.getElementById('title_mini').animate([{opacity:0},{opacity:1}],{duration:300})
        // document.getElementById('explain').animate([{opacity:0},{opacity:1}],{duration:300})
    }
    if( id=='mini2' ){
        document.getElementById('title_mini').innerText='AVENTADOR'
        document.getElementById('explain').innerText='REAL EMOTIONS SHAPE THE FUTURE'
        // document.getElementById('title_mini').animate([{opacity:0},{opacity:1}],{duration:300})
        // document.getElementById('explain').animate([{opacity:0},{opacity:1}],{duration:300})
    }
    if( id=='mini3' ){
        document.getElementById('title_mini').innerText='HURACÁN'
        document.getElementById('explain').innerText='BASED ON A TRUE STORY'
        // document.getElementById('title_mini').animate([{opacity:0},{opacity:1}],{duration:300})
        // document.getElementById('explain').animate([{opacity:0},{opacity:1}],{duration:300})
    }
},100)


