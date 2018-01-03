import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { YouTubeSearchComponent } from './you-tube-search/you-tube-search.component';
import { YouTubeSearchService } from './you-tube-search/you-tube-search.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { YouTubeSearchInjectable } from './you-tube-search/you-tube-search.injectables';
@NgModule({
  declarations: [
    AppComponent,
    YouTubeSearchComponent,
    SearchBoxComponent,
    SearchResultComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [YouTubeSearchInjectable],
  bootstrap: [AppComponent]
})
export class AppModule { }
