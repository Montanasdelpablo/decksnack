
import {extendObservable} from 'mobx';
import request from 'superagent';

class ClashRoyale {
    constructor(){
        extendObservable(this, {
            cards: []
        })
        this.getCards()  
    }
    returnCards(){
        return this.cards.splice()
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

export default ClashRoyale;