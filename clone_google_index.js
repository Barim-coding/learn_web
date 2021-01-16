const Searching = Search.prototype;

function Search() {
    this.keyword = document.querySelector('input[name="q"]');
    this.button = document.querySelector('.google_search')
    this.form = document.querySelector('.text');


    this.Engine();
}

Searching.Engine = function() {
    this.form.addEventListener('submit', e => {
        e.preventDefault();

        let keyword = this.keyword.value;

        location.href = 'https://www.google.co.kr/search?q=' + keyword;
    });

}
new Search();