
import {extendObservable} from 'mobx';
import request from 'superagent';

class SearchResults {
    constructor(){
        extendObservable(this, {
            searchresults: []
        })
        this.getResults  
    }

    getResults(val = "") {
        var query = val
        let uri = `http://www.clashapi.xyz/api/cards`
        
        request.get(uri).end((err, res) => {
            if(err){
                console.log(err)
            }
            let searchArr = []
            res.body.map((card) => {
                if (card.idName === query){
                    searchArr.push(card)
                }
            })
            this.searchresults = searchArr
        })
    }


}

const searchResults = new SearchResults()


window.searchresults = searchResults

export default searchResults