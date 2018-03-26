import { Injectable } from '@angular/core';

import { MessageBoxService } from './message-box.service';
import { PlayerStatusService } from './player-status.service';
import { Brew } from './brew';
import { Beer } from './beer';
import { BeerDataService } from './beer-data.service';

@Injectable()
export class BrewerService {

  constructor(
    private messages: MessageBoxService,
    private status: PlayerStatusService,
    private beerData: BeerDataService,
  ) { }

  brew(beer: Beer) {
    this.messages.add(`Brewing a ${beer.name} beer...`);
    const brew = new Brew(beer, 10);
    this.status.money -= beer.cost;
    this.status.skill += beer.experience;
    this.status.brews.push(brew);
  }

}
