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

const componentPay2 = document.getElementById("table-second");
const componentPay = document.getElementById("table-first");
const click2 = document.getElementById("second-type-of-human");
const click = document.getElementById("first-type-of-human");
click2.onclick = function() {
    componentPay.style.display = "none";
    componentPay2.style.display = "flex";
    click.onclick = function() {
        componentPay.style.display = "flex";
        componentPay2.style.display = "none";
    }
}





/*
Реализация табов через модальные окна

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
// Доработати по джс: записати крестик в поле для того, шоб прі нажатії на нього все пропадало