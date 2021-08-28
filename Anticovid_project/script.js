document.getElementById('wrap1').addEventListener('click', function () {
    document.getElementById('arrow1').style.transform = "rotate(180deg)"
    document.getElementById('arrow2').style.transform = "rotate(0deg)"
    document.getElementById('arrow3').style.transform = "rotate(0deg)"
    document.getElementById('arrow4').style.transform = "rotate(0deg)"
})
document.getElementById('wrap2').addEventListener('click', function () {
    document.getElementById('arrow1').style.transform = "rotate(0deg)"
    document.getElementById('arrow2').style.transform = "rotate(180deg)"
    document.getElementById('arrow3').style.transform = "rotate(0deg)"
    document.getElementById('arrow4').style.transform = "rotate(0deg)"
})
document.getElementById('wrap3').addEventListener('click', function () {
    document.getElementById('arrow1').style.transform = "rotate(0deg)"
    document.getElementById('arrow2').style.transform = "rotate(0deg)"
    document.getElementById('arrow3').style.transform = "rotate(180deg)"
    document.getElementById('arrow4').style.transform = "rotate(0deg)"
})
document.getElementById('wrap4').addEventListener('click', function () {
    document.getElementById('arrow1').style.transform = "rotate(0deg)"
    document.getElementById('arrow2').style.transform = "rotate(0deg)"
    document.getElementById('arrow3').style.transform = "rotate(0deg)"
    document.getElementById('arrow4').style.transform = "rotate(180deg)"
})
