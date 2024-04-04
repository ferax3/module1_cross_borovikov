import { StudentViewer } from "./StudentViewer";

describe("StudentViewer Testing", ()=>{
    let studentviewer1: StudentViewer;
    let studentviewer2: StudentViewer;    
    let studentviewer3: StudentViewer;

    //Перед виконанням усіх тестів створимо екземпляр класу StudentViewer
    beforeEach(()=>{
        studentviewer1 = new StudentViewer(1);
        studentviewer2 = new StudentViewer(6);
        studentviewer3 = new StudentViewer(22);
    });
    //?тестуємо чи створили екземпляр класу
    it("Створення екземпляру класу", ()=>{
        expect(studentviewer1).toBeTruthy();
    });
    //?створення об'єкта з від'ємним значенням
    it("Створення екземпляру класу з від\'мним значенням к-сті відвідувань", ()=>{
        expect(() => new StudentViewer(-5)).toThrow(new Error("Від'ємною кількість не може бути!"));
    });
    //?Тестування методу Сast();
    it("К-сть відвідувань замала для знижки",()=>{
        let a1 = studentviewer1.Cost(100);
        let a2 = 100;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
    it("К-сть відвідувань, що надає знижки, бо кратне 3",()=>{
        let a1 = studentviewer2.Cost(100);
        let a2 = 50;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
    it("К-сть відвідувань, що не надає знижку, бо не кратне 3",()=>{
        let a1 = studentviewer3.Cost(100);
        let a2 = 100;
        expect(a1.toFixed(2)).toBe(a2.toFixed(2));
    });
    it("Вказана від'ємна ціна",()=>{
        expect(() => {
            studentviewer3.Cost(-100);
        }).toThrowError("Ціна не може бути меншою за 0!");
    });
});