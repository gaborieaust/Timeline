import { Component, OnInit } from '@angular/core';
import {Service} from "../../service";


@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.css']
})
export class EditionComponent implements OnInit {
  CardList = this.service.getCardsList()

  constructor(private service: Service)
  { }

  ngOnInit(): void {

  }

}
