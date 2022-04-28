class RecentlyPlayed{
    constructor()
    {
        this.item= [];
    } 

    push(element){ 
        for(var i=0; i<15; i++){
            if(this.item[i] == element) 
               this.item.splice(i, 1);
        }
        if(this.item.length==15){ 
            this.item.splice(0, 1);
        }
        this.item.push(element);
    }

    /*pop(){
        if(this.item.length==0)
            return "Underflow";
        return this.item.pop()
    }

    splice(element){
        if(this.item.length==0)
            return "Underflow";
        this.item.splice(element, 1);
    }
*/
    print(element)
    {
        return this.item[element];
    }

}

export default RecentlyPlayed;