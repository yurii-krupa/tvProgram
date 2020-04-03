import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BadgeComponent } from './shared/components/badge/badge.component';
import { ListViewComponent } from './shared/components/list-view/list-view.component';
import { ListViewItemComponent } from './shared/components/list-view/list-view-item/list-view-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BadgeComponent,
    ListViewComponent,
    ListViewItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
