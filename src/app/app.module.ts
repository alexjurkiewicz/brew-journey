import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import 'hammerjs';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';

import { AppComponent } from './app.component';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { PlayerStatusService } from './player-status.service';
import { MessageBoxService } from './message-box.service';
import { BrewerService } from './brewer.service';
import { BeerDataService } from './beer-data.service';
import { PackagingService } from './packaging.service';
import { PackagingDataService } from './packaging-data.service';
import { SellingService } from './selling.service';
import { BrewSettingsComponent } from './brew-settings/brew-settings.component';
import { IngredientDataService } from './ingredient-data.service';


@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    ActionBarComponent,
    MessageBoxComponent,
    BrewSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonToggleModule,
    MatButtonModule,
  ],
  providers: [
    PlayerStatusService,
    MessageBoxService,
    BrewerService,
    BeerDataService,
    PackagingService,
    SellingService,
    PackagingDataService,
    CurrencyPipe,
    IngredientDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
