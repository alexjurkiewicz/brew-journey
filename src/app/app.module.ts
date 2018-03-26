import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MessageBoxComponent } from './message-box/message-box.component';

import { PlayerStatusService } from './player-status.service';
import { MessageBoxService } from './message-box.service';
import { BrewerService } from './brewer.service';
import { BeerDataService } from './beer-data.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    ActionBarComponent,
    MessageBoxComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    PlayerStatusService,
    MessageBoxService,
    BrewerService,
    BeerDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
