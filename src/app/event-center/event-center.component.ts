import { Component, OnInit } from '@angular/core';
import { Event } from './../event'
@Component({
  selector: 'event-center',
  templateUrl: './event-center.component.html',
  styleUrls: ['./event-center.component.css']
})
export class EventCenterComponent implements OnInit {

  Events : Event[] = [
    {"_id":"1","eventName":"A","clubName":"A1", "description":"desc1", "startDate":new Date("2019-01-16"), "endDate":new Date("2019-01-16"), "formLink":"xyz"},
    {"_id":"2","eventName":"B","clubName":"B1", "description":"desc2", "startDate":new Date("2019-01-16"), "endDate":new Date("2019-01-16"), "formLink":"xyz"},
    {"_id":"3","eventName":"C","clubName":"C1", "description":"desc3", "startDate":new Date("2019-01-16"), "endDate":new Date("2019-01-16"), "formLink":"xyz"},
    {"_id":"4","eventName":"D","clubName":"D1", "description":"desc4", "startDate":new Date("2019-01-16"), "endDate":new Date("2019-01-16"), "formLink":"xyz"}
  ];

  selectedEvent:Event;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectEvent(event:any){
    this.selectedEvent = event;
    console.log(this.selectedEvent);
  }

}
