
import {extendObservable} from 'mobx';
import ClashRoyale from './clashroyaleapi.js';

class Search {
    constructor(){
        extendObservable(this, {
            cards: []
        })
        this.getCards()
    }
    returnresults(){
        return this.searchresults
    }
    getCards(){
       this.cards = ClashRoyale.cards
    }

    find(val) {
      let newArray = ClashRoyale.find(val)
      this.searchresults = newArray  
    }


}

const search = new Search()

window.search = search

export default search