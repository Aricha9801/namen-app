/**
 * Het resultaat dat aangeklikt is.
 * Kan op twee manieren gegevens in laden. Met de constructor of de methode loadInAttributes.
 */
class ClickedResultaat {
    constructor(res, naam, naamOfficieel, naamNl, naamFries, types, overige){
        this._res = res;
        this._naam = naam;
        this._naamOfficieel = naamOfficieel;
        this._naamNL = naamNl;
        this._naamFries = naamFries;

        if(types){
            this._types = types;
        }else{
            this._types = [];
        }

        if (overige) {
            this._overige = overige;
            let url = this._res.getUrl();
            this._overige.unshift({key : "brt link",value: url})
        }else{
            this._overige = [];
        }

        if(this._naam === undefined){
            if(this._naamOfficieel !== undefined){
                this._naam = naamOfficieel;
            }else if(this._naamNL !== undefined){
                this._naam = this._naamNL;
            }else{
                this._naam = this._naamFries;
            }
        }

        this._subscribers = [];
    }

    getNaamFries(){
        return this._naamFries;
    }

    getNaamNl(){
        return this._naamNL;
    }

    /**
     *
     * @param naam String
     * @param naamOfficieel String
     * @param naamnl String
     * @param naamfries String
     * @param type array Strings
     * @param overige array {key: string, value: string}
     */
    loadInAttributes(naam, naamOfficieel, naamnl, naamfries, type,  overige){
        this._naam = naam;
        this._naamOfficieel = naamOfficieel;
        this._naamNL = naamnl;
        this._naamFries = naamfries;
        this._types = type;
        this._overige = overige;

        let url = this._res.getUrl();
        this._overige.unshift({key : "brt link",value: url});

        if(this._naam === undefined){
            if(this._naamOfficieel !== undefined){
                this._naam = this._naamOfficieel;
            }else if(this._naamNL !== undefined){
                this._naam = this._naamNL;
            }else{
                this._naam = this._naamFries;
            }
        }
    }

    upDateSubScribers(){
        this._subscribers.map(subscriber => subscriber.update());
    }

    /**
     * Als je wilt subscriben moet je de methode update implementeren.
     * Ook niet vergeten om te unsubscriben.
     * @param subscriber
     */
    subscribe(subscriber){
        this._subscribers.push(subscriber);
    }

    unsubscribe(subscriber){
        this._subscribers.filter(subscriberList  => {
            return subscriberList !== subscriber;
        });
    }

    getNaamOfficieel(){
        return this._naamOfficieel;
    }

    getUrl(){
        return this._res.getUrl();
    }

    getNaam(){
        return this._naam;
    }

    getAsFeature(){
        return this._res.getAsFeature();
    }

    getTypeString(){
        return this._types.join(", ");
    }

    getAttributes(){
        return this._overige;
    }
}

export default ClickedResultaat;