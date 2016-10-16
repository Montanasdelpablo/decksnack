
import {extendObservable} from 'mobx';
import ClashRoyale from './clashroyaleapi.js';
import _ from 'lodash';


class Search {
    constructor(){
        extendObservable(this, {
            cards: [],
            api: new ClashRoyale()
        })
      
    }
    returnCards(){
        this.getCards()
        return this.cards.splice()
    }
    getCards(){
      this.api.getCards()
      let newcards = this.api.returnCards()
      this.cards = newcards
    }

    find(val) {
      let newArray = this.api.find(val)
      val = 2
      this.searchresults = newArray  
    }


}



export default Search