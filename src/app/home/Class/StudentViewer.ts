import { Viewer } from "./Viewer";

export class StudentViewer extends Viewer{
    constructor(visits: number){
        super(visits);
    }
    override Cost(price: number) {
        if (price < 0){
            throw new Error("Ціна не може бути меншою за 0!");
        }
        let discount = 0;
        if (!(this.visits % 3)){
            discount = 0.5;
        }
        return price * (1 - discount);
    }
}