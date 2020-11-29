import { Component, Input, OnInit } from '@angular/core';
import { clubEvent } from '../club-event';

@Component({
  selector: 'event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css'],
})
export class EventDetailComponent implements OnInit {
  @Input() clubEvent:clubEvent;
  constructor() { }

  ngOnInit(): void {
  }

}
