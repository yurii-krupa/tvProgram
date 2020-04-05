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
  activeLimit = 5;
  currentPageNumber = 1;
  // searchPhrase = '';

  constructor(
    private dataLoaderService: DataLoaderService
  ) { }

  ngOnInit() {
    this.fetchData(this.activeLimit, this.currentPageNumber);
    // const temp = this.itemsTotal();
  }

  private fetchData(limit?: number, page?: number, searchPhrase?: string): void {
    this.dataLoaderService.getTvSerials(limit, page, searchPhrase)
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

  // get itemsTotal(): number {
  //   let itemsTotal = 1
  //   this.dataLoaderService.getTvSerialsTotal().subscribe(response => {
  //     itemsTotal = +response.length;
  //   });
  //   return itemsTotal;
  // }

  backBtn(): void {
    console.log('back btn');
    // if (this.currentPageNumber > 0) { this.currentPageNumber--; }
    this.currentPageNumber--;
    this.fetchData(this.activeLimit, this.currentPageNumber);
  }
  forwardBtn(): void {
    console.log('forward btn');
    // if (this.currentPageNumber < this.items.length / this.activeLimit) { this.currentPageNumber++; }
    this.currentPageNumber++;
    this.fetchData(this.activeLimit, this.currentPageNumber);
  }

  setItemsLimit(limit: number): void {
    this.activeLimit = limit;
    this.currentPageNumber = 1;
    this.fetchData(limit);
  }

  getActiveLimit(limit: number): boolean {
    return this.activeLimit === limit;
  }

  // get pages() {
  //   // return this.items.length / this.activeLimit;
  //   const pages = [];
  //
  //   for (let i = 0; i < (this.itemsTotal / this.activeLimit); i++) {
  //     pages.push({pageNumber: i});
  //   }
  //   return pages;
  // }

  gotoPage(pageNumber: number): void {
    this.currentPageNumber = pageNumber;
    this.fetchData(this.activeLimit, pageNumber);
  }

  sort(fieldName: string, ascending: boolean = true) {
    this.items.sort((a, b) => {
      if (a[fieldName] < b[fieldName]) {
        return ascending ? -1 : 1;
      }
      if (a[fieldName] > b[fieldName]) {
        return ascending ? 1 : -1;
      }
      return 0;
    });
    // a[fieldName] < b[fieldName] ? -1 : 1);
  }

  sortResponse(fieldName: string, order: string) {

  }

  search(event, value) {
    event.stopPropagation();
    console.log(event, value);
    this.currentPageNumber = 1;
    this.fetchData(this.activeLimit, this.currentPageNumber, value);
  }

}
