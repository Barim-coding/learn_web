const Searching = Search.prototype;

function Search() {
    this.keyword = document.querySelector('input[name="q"]');
    this.form = document.querySelector('.button');

    this.Engine();
}

Searching.Search = function() {
    this.form.addEventListener('submit', a => {
        e.preventDefault();

        let keyword = this.keyword.value;

        location.href = 'https://www.google.co.kr/search?q=' + keyword;
    });
}
new Search();