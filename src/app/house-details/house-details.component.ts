
import { Component, OnInit, Input } from '@angular/core';
import { CribsService } from './../services/cribs.service';
import { Crib } from '../crib';

@Component({
  selector: 'house-details',
  templateUrl: './house-details.component.html',
  styleUrls: ['./house-details.component.scss']
})
export class HouseDetailComponent implements OnInit {
  error: string;
  houseDetails: any;
  
  constructor(private cribService: CribsService) { }

  ngOnInit() {
       this.houseDetails = this.cribService.cribData;
   }

     
  

}
