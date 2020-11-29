import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'technical',
  templateUrl: './technical.component.html',
  styleUrls:['./technical.component.css']
})
export class TECHNICALComponent implements OnInit {

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
