import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.less']
})
export class BadgeComponent implements OnInit {

  @Input() badge: string;
  @Input() color: string;
  constructor() { }

  ngOnInit() {
  }

}
