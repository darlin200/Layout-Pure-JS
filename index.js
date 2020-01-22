//function showForm() { 
//  document.getElementById("search-long").hidden = true;
//}
let searchButton = document.getElementById("search-button");

let search = document.getElementById("search-form-wrapper");
let closeSearch = document.getElementById("close-search");
console.log(search);

searchButton.onclick = function () {
    search.style.display = "flex";
}
closeSearch.onclick = () => {
    search.style.display = "none";
    background.style.opacity = '1';
}



const modal = document.getElementById("modal");
const btn = document.getElementById("text-slogan-button-help-now");
const span = document.getElementsByClassName("close")[ 0 ];

btn.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
const myButton = document.getElementsByClassName("type-of-human")
let background = document.getElementsByClassName("wrapper-background")[ 0 ];
const hiddenBank = document.getElementById("card-background-hidden");
const formSecond = document.getElementById("table-second");
const form = document.getElementById("table-first");
const buttonYur = document.getElementById("second-type-of-human");
const buttonFiz = document.getElementById("first-type-of-human");
let wallet = document.getElementsByClassName("wallet")
console.log(hiddenBank)
const buttonYur2 = document.getElementById("second-type-of-human-2");
const buttonFiz2 = document.getElementById("first-type-of-human-2");

buttonYur.onclick = function () {
    form.style.display = "none";
    formSecond.style.display = "flex";
    buttonYur.style.backgroundColor = "#363b5d";
    buttonFiz.style.backgroundColor = "#ffffff";
    buttonFiz.style.color = "#000000";
    buttonYur.style.color = "#fff";
    hiddenBank.style.display = "flex";
    buttonFiz.onclick = function () {
        form.style.display = "flex";
        formSecond.style.display = "none";
        buttonYur.style.backgroundColor = "#ffffff";
        buttonFiz.style.backgroundColor = "#363b5d"
        buttonFiz.style.color = "#ffffff"
        buttonYur.style.color = "#000000"
        hiddenBank.style.display = "none"
    }
}
buttonYur2.onclick = function () {
    form.style.display = "none";
    formSecond.style.display = "flex";
    buttonYur2.style.backgroundColor = "#363b5d";
    buttonFiz2.style.backgroundColor = "#ffffff";
    buttonFiz2.style.color = "#000000";
    buttonYur2.style.color = "#fff";
    hiddenBank.style.display = "flex";
    buttonFiz2.onclick = function () {
        form.style.display = "flex";
        formSecond.style.display = "none";
        buttonYur2.style.backgroundColor = "#ffffff";
        buttonFiz2.style.backgroundColor = "#363b5d"
        buttonFiz2.style.color = "#ffffff"
        buttonYur2.style.color = "#000000"
        hiddenBank.style.display = "none"
    }
}



let searchInput = document.getElementById("search-long")
let resultSearch = document.getElementById("search-result");
searchInput.onkeydown = function () {
    resultSearch.style.display = "block";
}
var active = document.getElementsByClassName("img-background.active");

var cardBackground = document.getElementsByClassName("card-background")
var cardSuggestion = document.getElementById("card-suggestion");
var cards = document.getElementsByClassName("type-of-pay")[ 0 ];
var color = [ "#9c5d9a","#fff" ];
var colors = [ "#c5d5e6","#9c5d9a" ]



var tab; // заголовок вкладки
var tabContent; // блок содержащий контент вкладки
var png = document.getElementsByClassName('img-test-shit')
window.onload = function () {
    tabContent = document.getElementsByClassName('tabContent');
    tab = document.getElementsByClassName('img-background');
    hideTabsContent();
}

function myTest () {
    document.querySelectorAll('.img-background').forEach(function (element) {
        element.addEventListener('click',event => {
            if (event.target.className !== "tabContent") {
                let imgBackground = event.currentTarget;
                let contentToShow = event.currentTarget.getElementsByClassName('tabContent')[ 0 ];

                showTabsContent(imgBackground,contentToShow);
            }
        });
    });
}
myTest()

function hideTabsContent () {
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[ i ].classList.remove('show');
        tabContent[ i ].classList.add("hide");
        tab[ i ].classList.remove('active');
    }
}

function showTabsContent (container,contentToShow) {
    //hide previous tabs
    hideTabsContent();
    //show new tab
    container.classList.add('active');
    contentToShow.classList.remove('hide');
    contentToShow.classList.add('show');
}


var boom = true;

function myFunctionCard () {
    for (let i = 0; i < cardBackground.length; i++) {
        cardBackground[ i ].onclick = function () {
            (boom) ? this.style.backgroundColor = colors[ 1 ] : this.style.backgroundColor = colors[ 0 ];
            boom = !boom;
        }
    }
}


myFunctionCard()
let menu = document.getElementsByClassName('menuTest')[ 0 ];
let buttonMenu = document.getElementsByClassName('menu-btn')[ 0 ];
let content = document.getElementsByClassName("content")[ 0 ]
buttonMenu.addEventListener("click",function (e) {
    e.preventDefault();
    this.classList.toggle('menu-btn_active');
    content.classList.toggle("content_active");
    menu.classList.toggle("menuTest_active")
});


function myFunction () {
    for (let i = 0; i < myButton.length; i++) {
        myButton[ i ].onclick = function () {
            this.classList.toggle("active_button")

        }

    }
}
































/*
Реализация табов через модальные окна
"#9c5d9a";
const modalSecond = document.getElementById("modal-2");
const btnSecond = document.getElementById("second-type-of-human");
const spanSecond = document.getElementsByClassName("close-2")[0];
btnSecond.onclick = function() {
    modalSecond.style.display = "block";
}
spanSecond.onclick = function() {
    modalSecond.style.display = "none";
    modal.style.display = "none";
}

const fizOsoba = document.getElementById("first-first-type-of-human");
fizOsoba.onclick = function() {
    modalSecond.style.display = "none";
}
*/


//Логика происходит так: с помощью нажатия на "search-button" переменна searchBlock в який знаходиться клас "search long" появляється в html документе
//Логика 2 происходит при нажатии на "search-long" серч лонг пропадає і появляється знову класс "серчбаттон"
//trt