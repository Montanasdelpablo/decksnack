
import {extendObservable} from 'mobx';
import request from 'superagent';

class crAPI {
    constructor(){
        extendObservable(this, {
            cards: []
        })
        this.getCards()  
    }

    find(val){
        let cards = this.cards
        var value = val
        var arr = []
         for (var i=0; i < cards.length; i++) {
            if (cards[i].idName === value) {
                arr.push(cards[i])
            }
        }
        return arr
    }
    getImageLink(idName, route){
       return `http://www.clashapi.xyz/images/${route}/${idName}.png`
    }

    getCards() {
        
        let uri = `http://www.clashapi.xyz/api/cards`
        request.get(uri).end((err, res) => {
            if(err){
                console.log(err)
            }
            this.cards = res.body
        })
    }


}

const ClashRoyale = new crAPI()

window.clashroyale = ClashRoyale

export default ClashRoyale;