import { Component, OnInit } from '@angular/core';
import { Event } from './../event'
import { EventService } from './../event.service'

@Component({
  selector: 'event-center',
  templateUrl: './event-center.component.html',
  styleUrls: ['./event-center.component.css'],
  providers:[EventService]
})
export class EventCenterComponent implements OnInit {

  public Events : Event[];

  selectedEvent:Event;
  
  constructor(private _EventService:EventService) { }

  ngOnInit(){
    this._EventService.getEvents()
    .subscribe(data => {console.log(data)});
  }

  onSelectEvent(event:any){
    this.selectedEvent = event;
    console.log(this.selectedEvent);
  }

}
