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