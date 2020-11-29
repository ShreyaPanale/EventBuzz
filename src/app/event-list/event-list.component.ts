import { Component, Input, OnInit , EventEmitter, Output} from '@angular/core';
import { clubEvent } from '../club-event';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css'],
  outputs:['SelectEvent']
})
export class EventListComponent implements OnInit {
  @Input() clubEvents : clubEvent;
  @Output() SelectEvent = new EventEmitter<clubEvent>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelectEvent(eve:clubEvent){
    this.SelectEvent.emit(eve);
  }
}
