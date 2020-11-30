import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';
import { Event } from '../event';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  @Input() Events : [];
  @Output() public SelectEvent = new EventEmitter<Event>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectEvent(eve:Event){
    this.SelectEvent.emit(eve);
  }
}
