import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumview',
  templateUrl: './sumview.component.html',
  styleUrls: ['./sumview.component.scss'],
})
export class SumviewComponent  implements OnInit {
  @Input() public sum!: number;
  constructor() { }

  ngOnInit() {}

}
