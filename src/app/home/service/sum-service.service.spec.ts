import { TestBed } from '@angular/core/testing';

import { SumServiceService } from './sum-service.service';
import { StudentViewer } from '../Class/StudentViewer';
import { RegularViewer } from '../Class/RegularViewer';

describe('SumServiceService', () => {
  let service: SumServiceService;
  let service1: SumServiceService;
  let service2: SumServiceService;
  let service3: SumServiceService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SumServiceService);
    service1 = TestBed.inject(SumServiceService);
    service2 = TestBed.inject(SumServiceService);
    service3 = TestBed.inject(SumServiceService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it("Перевірка методу getSumsPrice(), коли задано певна кількість постійних клієнтів і відсутні студенти", ()=>{
    let sum1=0;
    let sum2=0;
    let st:StudentViewer[]=[];
    let rg:RegularViewer[]=[];
    rg.push(new RegularViewer(5));
    rg.push(new RegularViewer(10));
    for(let i = 0; i < rg.length; i++){
      sum1+=rg[i].Cost(100);
    }//повинно бути 100+99(бо скидка 1% за 10 кожних відвідень)
    for(let i = 0; i < st.length; i++){
      sum1+=st[i].Cost(100);
    }
    sum2 = service1.getSumsPrice(rg,st);
    expect(199).toBe(sum2);
    // expect(sum1).toBe(sum2);
  });

  it("Перевірка методу getSumsPrice(), коли задано певна кількість постійних клієнтів і студентів", ()=>{
    let sum1=0;
    let sum2=0;
    let st:StudentViewer[]=[];
    let rg:RegularViewer[]=[];
    rg.push(new RegularViewer(5));
    rg.push(new RegularViewer(10));//знижка тут
    st.push(new StudentViewer(10));
    st.push(new StudentViewer(9));//знижка тут

    for(let i = 0; i < rg.length; i++){
      sum1+=rg[i].Cost(100);
    }//повинно бути 100+99(бо скидка 1% за 10 кожних відвідень)
    for(let i = 0; i < st.length; i++){
      sum1+=st[i].Cost(100);
    }// перший студент без знижки, інший зі знижкою 50% (100+50)
    //в результаті 199+150=349
    sum2 = service2.getSumsPrice(rg,st);
    expect(349).toBe(sum2);
    // expect(sum1).toBe(sum2);
  });
  it("Перевірка методу getSumsPrice(), коли не задано ніяких глядачів", ()=>{
    let sum1=0;
    let sum2=0;
    let st:StudentViewer[]=[];
    let rg:RegularViewer[]=[];

    for(let i = 0; i < rg.length; i++){
      sum1+=rg[i].Cost(100);
    }
    for(let i = 0; i < st.length; i++){
      sum1+=st[i].Cost(100);
    }
    sum2 = service3.getSumsPrice(rg,st);
    expect(0).toBe(sum2);
    // expect(sum1).toBe(sum2);
  });
});
