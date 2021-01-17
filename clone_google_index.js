// document.addEventListener('DOMContentLoaded', function() {
//     if (document.getElementById("myInput").value.length > 1) {
//         document.getElementById("header").className = "hideHeader";
//     } else {
//         ContactsearchFX();
//         document.getElementById('myInput').addEventListener('input', ContactsearchFX);
//     }
// });

// const Searching = Search.prototype;

// function Search() {
//     this.keyword = document.querySelector('input[name="q"]');
//     this.button = document.querySelector('.google_search')
//     this.form = document.querySelector('.text');


//     this.Engine();
// }

// Searching.Engine = function() {
//     this.form.addEventListener('submit', e => {
//         e.preventDefault();

//         let keyword = this.keyword.value;

//         location.href = 'https://www.google.co.kr/search?q=' + keyword;
//     });

// }
// new Search();




function enterSearch() {
    var target = document.getElementsByName("q").value;

    location.href = "http://www.google.co.kr/search?" + target;
}