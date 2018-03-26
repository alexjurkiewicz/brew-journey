import { Injectable } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { Brew } from './brew';
import { PackagingDataService } from './packaging-data.service';
import { PlayerStatusService } from './player-status.service';
import { BrewStatus } from './brew-status.enum';
import { MessageBoxService } from './message-box.service';

@Injectable()
export class PackagingService {

  constructor(
    private playerStatus: PlayerStatusService,
    private packagingData: PackagingDataService,
    private messageBoxService: MessageBoxService,
    private currencyPipe: CurrencyPipe,
  ) { }

  package(brew: Brew): void {
    const type = this.packagingData.packages[0];
    const items =  Math.floor(brew.amount / type.sizePerPackage); // any extra is discarded
    const cost = type.costPerPackage * items;

    this.playerStatus.money = this.playerStatus.money - cost;
    this.messageBoxService.add(
      `We packaged the ${brew.beer.name} into ${items} ${type.name}
      which cost ${this.currencyPipe.transform(cost)}.`);
    brew.status = BrewStatus.Packaged;
  }

}
