import { Viewer } from "./Viewer";

export class RegularViewer extends Viewer{
    constructor(visits: number){
        super(visits);
    }
    override Cost(price: number): number{
        if (price < 0){
            throw new Error("Ціна не може бути меншою за 0!");
        }
        let discount = Math.min(Math.floor(this.visits / 10), 20) * 0.01;
        return price * (1 - discount);
    }
}