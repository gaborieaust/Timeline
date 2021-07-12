import { Component, OnInit } from '@angular/core';
import {Service} from "../service";
import {ActivatedRoute} from "@angular/router";
import {Timeline,} from "../timelines";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  timelineList = this.service.getServiceList()
  timeline: Timeline | undefined;

  constructor(
    private service: Service,
    private route: ActivatedRoute,
  ) {
  }

  ngOnInit() {

}

  onClick() {
    let timelineList = this.service.getCardsList(1)
    console.log(timelineList)
    console.log(this.service.getServiceList())


  }
}
