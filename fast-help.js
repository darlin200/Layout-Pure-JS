/* Реализация модуля Поиск */
let searchButton = document.getElementById("search-button");
let search = document.getElementById("search-form-wrapper");
let closeSearch = document.getElementById("close-search");

searchButton.onclick = function() {
    search.style.display = "flex";
}
closeSearch.onclick = () => {
    search.style.display = "none";
}

/* Реализация модуля Поиск c добавлением блока при нажатии на клавиши */
let searchInput = document.getElementById("search-long")
let resultSearch = document.getElementById("search-result");
searchInput.onkeydown = function() {
    resultSearch.style.display = "block";
}



/* Реализация модуля Типы Помощи при нажатии на клавишу Типы помощи */
const typeOfHelps = document.getElementById("type-of-helps")
const modalOfhelps = document.getElementById("modal-for-fast-help");
const spanOfHelps = document.getElementsByClassName("close-fast-help-modal")[0];
typeOfHelps.onclick = function() {
    modalOfhelps.style.display = "block";
}
spanOfHelps.onclick = function() {
    modalOfhelps.style.display = "none";
}