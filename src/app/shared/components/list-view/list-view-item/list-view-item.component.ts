import { Component, OnInit, Input } from '@angular/core';
import {TvSerial} from '../../../models/tv-serial.model';

@Component({
  selector: 'app-list-view-item',
  templateUrl: './list-view-item.component.html',
  styleUrls: ['./list-view-item.component.less']
})
export class ListViewItemComponent implements OnInit {

  @Input() item: TvSerial;

  constructor() { }

  ngOnInit() {

  }

}
