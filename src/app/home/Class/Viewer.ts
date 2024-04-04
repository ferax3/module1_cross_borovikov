export abstract class Viewer {
    visits: number
    constructor(visits: number) {
        this.visits = visits;
        if (this.visits < 0){
            throw new Error("Від'ємною кількість не може бути!");
        }
    }
    Visit(){
        this.visits = this.visits + 1;
    }
    abstract Cost(price: number): any;
}