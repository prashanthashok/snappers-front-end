import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class CribsService {

  public newCribData = new Subject<any>();


  constructor(private http: Http) { }


  getAllCribs() {
    
    return this.http.get('../assets/response.json')
    .map(res => res.json());
  }

  addCrib(data){
    data.image = 'default-crib';
    this.newCribData.next(data);
  }
}
