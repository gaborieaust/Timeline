import { Component, OnInit } from '@angular/core';
import {Service} from "../service";

@Component({
  selector: 'app-timelines',
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.css']
})
export class TimelinesComponent implements OnInit {
  timelineList = this.service.getServiceList()

  constructor(private service: Service) {
}

  ngOnInit(): void {
  }
  onClick(){
  let timelineList = this.service.getServiceList()
    console.log(timelineList)
    console.log(this.service.getServiceList())
}
}
