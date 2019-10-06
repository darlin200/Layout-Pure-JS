let searchSuggestion = document.getElementById("search-form-suggestion");

searchSuggestion.hidden = true;

let searchBlock = document.getElementById("search-form");
searchBlock.hidden = true;
document.getElementById("search-button").onclick = function() {
    searchBlock.hidden = false;
    document.getElementById("wrapper-header").hidden = true;
    searchSuggestion.hidden = false;
    document.getElementById('text-wrapper').style.marginTop = '0px';

}

document.getElementById("close-search").onclick = function() {
    searchBlock.hidden = true;
    document.getElementById("wrapper-header").hidden = false;
}




const typeOfHelps = document.getElementById("type-of-helps")
const modalOfhelps = document.getElementById("modal-for-fast-help");
const spanOfHelps = document.getElementsByClassName("close-fast-help-modal")[0];
typeOfHelps.onclick = function() {
    modalOfhelps.style.display = "block";
}
spanOfHelps.onclick = function() {
    modalOfhelps.style.display = "none";
}