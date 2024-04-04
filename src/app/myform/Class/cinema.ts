import { RegularViewer } from "src/app/home/Class/RegularViewer";
import { StudentViewer } from "src/app/home/Class/StudentViewer";

export class Cinema {
    name: string = '';
    capacity: number = 1;
    address: string = '';
    regularviewers: RegularViewer[]=[];
    studentviewers: StudentViewer[]=[];
    constructor(name: string, capacity: number, address: string, regularviewers: RegularViewer[], studentviewers: StudentViewer[]){
        this.name = name;
        this.capacity = capacity;
        this.address = address;
        this.regularviewers = regularviewers;
        this.studentviewers = studentviewers;
    }
}