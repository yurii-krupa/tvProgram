import { Component, OnInit } from '@angular/core';
import { DataLoaderService } from './../../services/data-loader.service';
import {TvSerial} from '../../models/tv-serial.model';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.less']
})
export class ListViewComponent implements OnInit {

  items: TvSerial[] = [];

  constructor(
    private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
    this.fetchData();
  }

  private fetchData() {
    this.dataLoaderService.getTvSerials()
      .pipe(map(response => {
        const items = [];
        for (const item in response) {
          if (response.hasOwnProperty(item)) {
            items.push(new TvSerial(response[item]));
          }
        }
        return items;
      }))
      .subscribe(items => {
        this.items = items;
      });
  }

}
