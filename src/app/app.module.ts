import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ChainService } from "./service/chain.service";
import { HomePageComponent } from './home-page/home-page.component';
import { ChainCardComponent } from './home-page/chain-card/chain-card.component';
import { ChainDetailPageComponent } from './chain-detail-page/chain-detail-page.component';
import { FormsModule } from "@angular/forms";
import { HighlightService } from "./service/highlight.service";
import { HttpClientModule } from "@angular/common/http";
import { LeftHandMenuComponent } from './chain-detail-page/left-hand-menu/left-hand-menu.component';
import {
  SynchronizationScriptsComponent
} from './chain-detail-page/synchronization-scripts/synchronization-scripts.component';
import { AboutComponent } from './chain-detail-page/about/about.component';
import { NewsComponent } from './chain-detail-page/news/news.component';
import {ApiComponent} from "./chain-detail-page/api/api.component";
import { InstallationScriptsComponent } from './chain-detail-page/installation-scripts/installation-scripts.component';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from "ngx-google-analytics";
import { SummaryComponent } from './chain-detail-page/summary/summary.component';
import { NgCircleProgressModule } from "ng-circle-progress";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { LeftHandMenuService } from "./service/left-hand-menu.service";
import { CheatSheetComponent } from './chain-detail-page/cheat-sheet/cheat-sheet.component';
import { UpgradeScriptsComponent } from './chain-detail-page/upgrade-scripts/upgrade-scripts.component';
import {Router, Scroll} from "@angular/router";
import {ViewportScroller} from "@angular/common";
import {filter} from "rxjs";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    ChainCardComponent,
    ChainDetailPageComponent,
    LeftHandMenuComponent,
    SynchronizationScriptsComponent,
    AboutComponent,
    NewsComponent,
    InstallationScriptsComponent,
    SummaryComponent,
    CheatSheetComponent,
    UpgradeScriptsComponent,
    ApiComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    NgxTwitterTimelineModule,
    HttpClientModule,
    NgxGoogleAnalyticsModule.forRoot('G-J46ZYRRDQD'),
    NgxGoogleAnalyticsRouterModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      outerStrokeWidth: 5,
      innerStrokeWidth: 5,
      outerStrokeColor: "rgba(120, 192, 0, 1)",
      innerStrokeColor: "rgba(120, 192, 0, 0.4)",
      animationDuration: 500,
      animation: true,
      responsive: true
    }),
    NgbModule
  ],
  providers: [ChainService, HighlightService, LeftHandMenuService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router, viewportScroller: ViewportScroller) {
    viewportScroller.setOffset([0, 80]);
    router.events.pipe(filter(e => e instanceof Scroll)).subscribe((e: any) => {
      if (e.anchor) {
        // anchor navigation
        setTimeout(() => {
          viewportScroller.scrollToAnchor(e.anchor);
        })
      } else if (e.position) {
        // backward navigation
        viewportScroller.scrollToPosition(e.position);
      } else {
        // forward navigation
        viewportScroller.scrollToPosition([0, 80]);
      }
    });
  }
}