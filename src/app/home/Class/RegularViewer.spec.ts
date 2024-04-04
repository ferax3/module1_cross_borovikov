import { RegularViewer } from "./RegularViewer";

describe("RegularViewer Testing", ()=>{
    let regularviewer1: RegularViewer;
    let regularviewer2: RegularViewer;
    let regularviewer3: RegularViewer;

    //Перед виконанням усіх тестів створимо екземпляр класу RegularViewer
    beforeEach(()=>{
        regularviewer1 = new RegularViewer(5);
        regularviewer2 = new RegularViewer(300);
        regularviewer3 = new RegularViewer(31);
    });
    //?тестуємо чи створили екземпляр класу
    it("Створення екземпляру класу", ()=>{
        expect(regularviewer1).toBeTruthy();
    });
    //?створення об'єкта з від'ємним значенням
    it("Створення екземпляру класу з від\'мним значенням к-сті відвідувань", ()=>{
        expect(() => new RegularViewer(-5)).toThrow(new Error("Від'ємною кількість не може бути!"));
    });
    //?Тестування методу Сast();
    it("К-сть відвідувань замала для знижки",()=>{
        let a1 = regularviewer1.Cost(100);
        let a2 = 100;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
    it("К-сть відвідувань перевищує надання знижки, максимум який сягає до 20%",()=>{
        let a1 = regularviewer2.Cost(100);
        let a2 = 80;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
    it("К-сть відвідувань надає знижку для 31 відвідування 3%",()=>{
        let a1 = regularviewer3.Cost(100);
        let a2 = 97;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
    it("Вказана від'ємна ціна",()=>{
        expect(() => {
            regularviewer3.Cost(-100);
        }).toThrowError("Ціна не може бути меншою за 0!");
    });
});