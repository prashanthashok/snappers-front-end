import { Crib } from './../crib';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'crib-card',
  templateUrl: './crib-card.component.html',
  styleUrls: ['./crib-card.component.css']
})
export class CribCardComponent implements OnInit {

  @Input('crib') crib: Crib;
  constructor() { }

  ngOnInit() {
   
  }
  

}
