import { Injectable } from '@angular/core';
import { RegularViewer } from '../Class/RegularViewer';
import { StudentViewer } from '../Class/StudentViewer';

@Injectable({
  providedIn: 'root'
})
export class SumServiceService {

  constructor() { }
  //КВИТОК ЗАВЖДИ КОШТУЄ 100 од.
  getSumsPrice(regulars: RegularViewer[], students: StudentViewer[]): number{
    let sum=0;
    for(let i = 0; i < regulars.length; i++){
      sum+=regulars[i].Cost(100);
    }
    for(let i = 0; i < students.length; i++){
      sum+=students[i].Cost(100);
    }
    return sum;
  }
}
