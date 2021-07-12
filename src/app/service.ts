import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Card, Timeline} from "./timelines";


@Injectable({
  providedIn: 'root'
})
export class Service {

  baseAPIUrl = 'http://localhost:8080/api/timeline';

  constructor(private http: HttpClient) {
  }
  // permet d'obtenir le nom du timeline
  getServiceList() {
    return this.http.get<Timeline[]>(this.baseAPIUrl)
  }
  // permet d'btenir les cartes
  getCardsList(){
    return this.http.get<Card[]>(this.baseAPIUrl+'/1/card')

  }

}
