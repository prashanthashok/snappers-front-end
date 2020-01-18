import { CribsService } from './../services/cribs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
export class CribListingComponent implements OnInit {

  cribs: Array<any>;
  error: string;
  sortField: string = 'price';
  sortDirection: string = 'asc';

  sortFields: Array<string> = [
    'address',
    'area',
    'bathrooms',
    'price',
    'type',
    'bedrooms'
  ];

  constructor(private cribService: CribsService) { }

  ngOnInit() {
    this.cribService.getAllCribs()
      .subscribe(data => this.cribs = data,
      error => this.error = error.statusText);

      this.cribService.newCribData
      .subscribe(newCrib =>{
        this.cribs.push(newCrib);
      });
  }
}
