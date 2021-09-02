
let check = 1
document.getElementById('word_form1').addEventListener('click', function () {
    if (check == 1) {
        check++;
    }
    else check--;
    if (check == 1) {
        document.getElementById('list_form1').style.display = 'none'
    }
    else {
        document.getElementById('list_form1').style.display = 'block'
    }
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('list_form1').addEventListener('click', function () {
    check = 1;
    this.style.display = 'none'
})
document.getElementById('ul_form1').children[1].addEventListener('click', function () {
    document.getElementById('word_form1').innerText = `${document.getElementById('ul_form1').children[1].innerText}`
})
document.getElementById('ul_form1').children[2].addEventListener('click', function () {
    document.getElementById('word_form1').innerText = `${document.getElementById('ul_form1').children[2].innerText}`
})
document.getElementById('ul_form1').children[3].addEventListener('click', function () {
    document.getElementById('word_form1').innerText = `${document.getElementById('ul_form1').children[3].innerText}`
})
document.getElementById('ul_form1').children[4].addEventListener('click', function () {
    document.getElementById('word_form1').innerText = `${document.getElementById('ul_form1').children[4].innerText}`
})
document.getElementById('ul_form1').children[5].addEventListener('click', function () {
    document.getElementById('word_form1').innerText = `${document.getElementById('ul_form1').children[5].innerText}`
})
document.getElementById('ul_form1').children[6].addEventListener('click', function () {
    document.getElementById('word_form1').innerText = `${document.getElementById('ul_form1').children[6].innerText}`
})


// input 2

let check2 = 1
document.getElementById('word_form2').addEventListener('click', function () {
    if (check2 == 1) {
        check2++;
    }
    else check2--;
    if (check2 == 1) {
        document.getElementById('list_form2').style.display = 'none'
    }
    else {
        document.getElementById('list_form2').style.display = 'block'
    }
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('list_form2').addEventListener('click', function () {
    check2 = 1;
    this.style.display = 'none'
})
document.getElementById('ul_form2').children[0].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[0].innerText}`
})
document.getElementById('ul_form2').children[1].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[1].innerText}`
})
document.getElementById('ul_form2').children[2].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[2].innerText}`
})
document.getElementById('ul_form2').children[3].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[3].innerText}`
})
document.getElementById('ul_form2').children[4].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[4].innerText}`
})
document.getElementById('ul_form2').children[5].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[5].innerText}`
})
document.getElementById('ul_form2').children[6].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[6].innerText}`
})
document.getElementById('ul_form2').children[7].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[6].innerText}`
})
document.getElementById('ul_form2').children[8].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[6].innerText}`
})
document.getElementById('ul_form2').children[9].addEventListener('click', function () {
    document.getElementById('word_form2').innerText = `${document.getElementById('ul_form2').children[6].innerText}`
})

// input 3
let check3 = 1
document.getElementById('word_form3').addEventListener('click', function () {
    if (check3 == 1) {
        check3++;
    }
    else check3--;
    if (check3 == 1) {
        document.getElementById('list_form3').style.display = 'none'
    }
    else {
        document.getElementById('list_form3').style.display = 'block'
    }
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('list_form3').addEventListener('click', function () {
    check3 = 1;
    this.style.display = 'none'
})
document.getElementById('ul_form3').children[1].addEventListener('click', function () {
    document.getElementById('word_form3').innerText = `${document.getElementById('ul_form3').children[1].innerText}`
})


// input 5
let check5 = 1
document.getElementById('word_form5').addEventListener('click', function () {
    if (check5 == 1) {
        check5++;
    }
    else check5--;
    if (check5 == 1) {
        document.getElementById('list_form5').style.display = 'none'
    }
    else {
        document.getElementById('list_form5').style.display = 'block'
    }
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('list_form5').addEventListener('click', function () {
    check5 = 1;
    this.style.display = 'none'
})
document.getElementById('ul_form5').children[1].addEventListener('click', function () {
    document.getElementById('word_form5').innerText = `${document.getElementById('ul_form5').children[1].innerText}`
})


//input 6

let check6 = 1
document.getElementById('word_form6').addEventListener('click', function () {
    if (check6 == 1) {
        check6++;
    }
    else check6--;
    if (check6 == 1) {
        document.getElementById('list_form6').style.display = 'none'
    }
    else {
        document.getElementById('list_form6').style.display = 'block'
    }
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
})
document.getElementById('list_form6').addEventListener('click', function () {
    check6 = 1;
    this.style.display = 'none'
})
document.getElementById('ul_form6').children[1].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[1].innerText}`
})
document.getElementById('ul_form6').children[2].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[2].innerText}`
})
document.getElementById('ul_form6').children[3].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[3].innerText}`
})
document.getElementById('ul_form6').children[4].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[4].innerText}`
})
document.getElementById('ul_form6').children[5].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[5].innerText}`
})
document.getElementById('ul_form6').children[6].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[6].innerText}`
})
document.getElementById('ul_form6').children[7].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[6].innerText}`
})
document.getElementById('ul_form6').children[8].addEventListener('click', function () {
    document.getElementById('word_form6').innerText = `${document.getElementById('ul_form6').children[6].innerText}`
})



document.getElementById('toWrite_name').addEventListener('click', function () {
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('last_name').addEventListener('click', function () {
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('cellphone').addEventListener('click', function () {
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('email').addEventListener('click', function () {
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})
document.getElementById('location').addEventListener('click', function () {
    document.getElementById('list_form1').style.display = 'none'
    document.getElementById('list_form2').style.display = 'none'
    document.getElementById('list_form3').style.display = 'none'
    document.getElementById('list_form5').style.display = 'none'
    document.getElementById('list_form6').style.display = 'none'
})

