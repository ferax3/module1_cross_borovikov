import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Cinema } from './Class/cinema';
import { AlertController } from '@ionic/angular';
import { RegularViewer } from '../home/Class/RegularViewer';
import { StudentViewer } from '../home/Class/StudentViewer';
import { SumServiceService } from '../home/service/sum-service.service';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss'],
})
export class MyformComponent  implements OnInit {
  cinemaForm!: FormGroup;
  cinema!: Cinema;
  constructor(private fb: FormBuilder, private alertController: AlertController, private sumService: SumServiceService) {
    this.cinemaForm = this.fb.group({
      cinemaName: ['', [Validators.required]],
      cinemaCapacity: ['', [Validators.required]],
      cinemaAddress: [''],
      regulars: new FormArray([new FormControl()]),
      students: new FormArray([new FormControl()]),
    });
  }
  sum = 0;
  //Додавання
  addRegulars(){
    console.log("Add_R");
    (this.cinemaForm.controls['regulars'] as FormArray).push(new FormControl())
  }
  addStudents(){
    console.log("Add_S");
    (this.cinemaForm.controls['students'] as FormArray).push(new FormControl())
  }
  //Видалення
  deleteRegulars(i: any){
    console.log("Delete_R");
    (this.cinemaForm.controls['regulars'] as FormArray).removeAt(i)
  }
  deleteStudents(i: any){
    console.log("Delete_S");
    (this.cinemaForm.controls['students'] as FormArray).removeAt(i)
  }
  //Повертаємо список контролів як FormArray
  getControlsRegulars(){
    return(this.cinemaForm.get('regulars') as FormArray).controls;
  }
  getControlsStudents(){
    return(this.cinemaForm.get('students') as FormArray).controls;
  }
  //Збереження форми
  onSubmit(){
    let name = this.cinemaForm.value.cinemaName;
    let address = this.cinemaForm.value.cinemaAddress;
    let capacity = this.cinemaForm.value.cinemaCapacity;
    const studentValues = this.cinemaForm.get('students') as FormArray;
    const studentData: any[] = studentValues.getRawValue();
    const regularValues = this.cinemaForm.get('regulars') as FormArray;
    const regularData: any[] = regularValues.getRawValue();
    let regulars: RegularViewer[]=[];
    let students: StudentViewer[]=[];
    for(let i = 0; i < studentData.length; i++){
      let tempStudent = new StudentViewer(studentData[i]);
      students.push(tempStudent);
    }
    for(let i = 0; i < regularData.length; i++){
      let tempRegular = new RegularViewer(regularData[i]);
      regulars.push(tempRegular);
    }
    // console.log('Значення елементів students:', studentData);
    this.cinema = new Cinema(name, capacity, address, regulars, students);
    this.sum = this.sumService.getSumsPrice(regulars,students);
    
    console.log("Submit");
    console.log(this.cinema);
  }
  ngOnInit() {}

  // async presentAlert(message1: string){
  //   const alert = await this.alertController.create({
  //     header: 'Помилка',
  //     subHeader: '',
  //     message: message1,
  //     buttons: ["OK"],
  //   });
  //   await alert.present();
  // }
}
