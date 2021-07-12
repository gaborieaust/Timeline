import { Component, OnInit } from '@angular/core';
import {Service} from "../../service";
import {ActivatedRoute} from "@angular/router";
import {Card} from "../../timelines";
import {Observable} from "rxjs";


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  CardList = this.service.getCardsList(1)



  constructor(
    private service: Service,
    private route: ActivatedRoute,)
  { }

  ngOnInit()  {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('ID'));
    console.log(productIdFromRoute)
    this.CardList = this.service.getCardsList(productIdFromRoute);




  }

}
