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
  // permet d'obtenir la liste de Timeline
  getServiceList() {
    return this.http.get<Timeline[]>(this.baseAPIUrl)
  }
  // permet d'obtenir la liste des cartes
  getCardsList(timelineID : number){
   return this.http.get<Card[]>(this.baseAPIUrl+'/'+timelineID+'/card')

  }

}
