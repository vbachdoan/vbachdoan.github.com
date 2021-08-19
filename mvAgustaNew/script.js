// transform image of slide2
document.getElementById('model1').addEventListener('click', function () {
    document.getElementById('model1').style.color = '#000'
    document.getElementById('model2').style.color = 'rgb(187,187,187)'
    document.getElementById('model3').style.color = 'rgb(187,187,187)'
    document.getElementById('model4').style.color = 'rgb(187,187,187)'
})
document.getElementById('model2').addEventListener('click', function () {
    document.getElementById('model1').style.color = 'rgb(187,187,187)'
    document.getElementById('model2').style.color = '#000'
    document.getElementById('model3').style.color = 'rgb(187,187,187)'
    document.getElementById('model4').style.color = 'rgb(187,187,187)'
})
document.getElementById('model3').addEventListener('click', function () {
    document.getElementById('model1').style.color = 'rgb(187,187,187)'
    document.getElementById('model2').style.color = 'rgb(187,187,187)'
    document.getElementById('model3').style.color = '#000'
    document.getElementById('model4').style.color = 'rgb(187,187,187)'
})
document.getElementById('model4').addEventListener('click', function () {
    document.getElementById('model1').style.color = 'rgb(187,187,187)'
    document.getElementById('model2').style.color = 'rgb(187,187,187)'
    document.getElementById('model3').style.color = 'rgb(187,187,187)'
    document.getElementById('model4').style.color = '#000'
})
//hover animation