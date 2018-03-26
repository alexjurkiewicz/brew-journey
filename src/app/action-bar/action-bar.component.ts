import { Component, OnInit } from '@angular/core';

import { PlayerStatusService } from '../player-status.service';
import { BrewerService } from '../brewer.service';
import { BeerDataService } from '../beer-data.service';
import { Beer } from '../beer';

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  constructor(
    public playerStatus: PlayerStatusService,
    public brewer: BrewerService,
    public beerData: BeerDataService,
  ) {
  }

  ngOnInit() {
  }

  purchaseEquipment() {
    this.playerStatus.purchaseEquipment();
  }

  brew(beer: Beer) {
    this.brewer.brew(beer);
  }

}
