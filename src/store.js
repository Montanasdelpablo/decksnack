import Search from './store/search.js';

const search = new Search()

window.search = search

const Store = {
    search,
}

const store = Store

export default store