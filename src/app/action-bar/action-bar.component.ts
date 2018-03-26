import { Component, OnInit } from '@angular/core';

import { PlayerStatusService } from '../player-status.service';
import { BrewerService } from '../brewer.service'

@Component({
  selector: 'app-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

  constructor(
    public playerStatus: PlayerStatusService,
    public brewer: BrewerService,
  ) {
  }

  ngOnInit() {
  }

  purchaseEquipment() {
    this.playerStatus.purchaseEquipment();
  }

  brewBeer() {
    this.brewer.brew();
  }

}
