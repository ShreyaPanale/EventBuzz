import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'non-technical',
  templateUrl: './non-technical.component.html',
  styleUrls:['./non-technical.component.css']
})
export class NONTECHNICALComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggle = true;
  status = 'Like'; 

  enableDisableRule(job) {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Like' : 'Liked';
  }
}
