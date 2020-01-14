import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-custom-web-component',
  templateUrl: './custom-web-component.component.html',
  styleUrls: ['./custom-web-component.component.css']
})
export class CustomWebComponentComponent implements OnInit {

  @Input() public value: string;

  constructor() {
  }

  ngOnInit() {
    console.log('component mounted');
  }

}
