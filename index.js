//function showForm() { 
//  document.getElementById("search-long").hidden = true;
//}
let searchButton = document.getElementById("search-button");

let search = document.getElementById("search-form-wrapper");
let closeSearch = document.getElementById("close-search");
console.log(search);

searchButton.onclick = function() {
    search.style.display = "flex";
}
closeSearch.onclick = () => {
    search.style.display = "none";
    background.style.opacity = '1';
}



const modal = document.getElementById("modal");
const btn = document.getElementById("text-slogan-button-help-now");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
let background = document.getElementsByClassName("wrapper-background")[0];
const hiddenBank = document.getElementById("card-background-hidden");
const formSecond = document.getElementById("table-second");
const form = document.getElementById("table-first");
const buttonYur = document.getElementById("second-type-of-human");
const buttonFiz = document.getElementById("first-type-of-human");

console.log(hiddenBank)

buttonYur.onclick = function() {
    form.style.display = "none";
    formSecond.style.display = "flex";
    buttonYur.style.backgroundColor = "#363b5d";
    buttonFiz.style.backgroundColor = "#ffffff";
    buttonFiz.style.color = "#000000";
    hiddenBank.style.display = "flex";
    buttonFiz.onclick = function() {
        form.style.display = "flex";
        formSecond.style.display = "none";
        buttonYur.style.backgroundColor = "#ffffff";
        buttonFiz.style.backgroundColor = "#363b5d"
        buttonFiz.style.color = "#ffffff"
        hiddenBank.style.display = "none"
    }
}



let searchInput = document.getElementById("search-long")
let resultSearch = document.getElementById("search-result");
searchInput.onkeydown = function() {
    resultSearch.style.display = "block";
}
var active = document.getElementsByClassName("background-color-color");
var imgBackground = document.getElementsByClassName("img-background");
var cardBackground = document.getElementsByClassName("card-background")
var color = ["#9c5d9a", "#fff"];
var colors = ["#c5d5e6", "#9c5d9a"]
    /*function changeColor() {
        var p = 0;
        for (let i = 0; i < imgBackground.length; i++) {
            imgBackground[i].addEventListener("click", function() {
                p = p < color.length ? ++p : 0;
                this.style.backgroundColor = color[p];
                console.log("ебать работае")
            })
        }
    }
    changeColor()
    const hiddenBank = document.getElementsByClassName("card-background-hidden");
hiddenBank.style.display = "flex";
hiddenBank.style.display = "none"
    */


/*function changeColar() {
    for (let i = 0; i < imgBackground.length; i++) {
        imgBackground[i].onclick = function() {
            this.style.backgroundColor = color[Math.floor(color.length * Math.random())];

        }
    }
}
changeColar()
*/


var boom = true;
var bool = true;

function myFunction() {
    for (let i = 0; i < imgBackground.length; i++) {
        imgBackground[i].onclick = function() {
            (bool) ? this.style.backgroundColor = color[0]: this.style.backgroundColor = color[1];
            bool = !bool;
        }
    }
}
myFunction()

function myFunctionCard() {
    for (let i = 0; i < cardBackground.length; i++) {
        cardBackground[i].onclick = function() {
            (boom) ? this.style.backgroundColor = colors[1]: this.style.backgroundColor = colors[0];
            boom = !boom;
        }
    }
}
myFunctionCard()



































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
// Доработати по джс: записати крестик в поле для того, шоб прі нажатії на нього все пропадало */