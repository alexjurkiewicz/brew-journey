import { Injectable } from '@angular/core';

import { Brew } from './brew';
import { BrewStatus } from './brew-status.enum';
import { Packaging } from './packaging';
import { MessageBoxService } from './message-box.service';
import { PlayerStatusService } from './player-status.service';

@Injectable()
export class SellingService {

  constructor(
    public messageBox: MessageBoxService,
    public playerStatus: PlayerStatusService,
  ) { }

  sell(brew: Brew): void {
    const markup = (brew.packaging as Packaging).markup;
    const brewCost = brew.brewCost;
    const revenue = brewCost * markup * brew.quality;
    brew.status = BrewStatus.Sold;
    this.playerStatus.money += revenue;
    this.messageBox.add(`Sold ${brew.beer.name} for $${revenue}, a ${revenue / brewCost * 100}% markup on brew cost`);
  }

}
