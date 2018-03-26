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
    const packaging = this.packagingData.packages[0];
    const items =  Math.floor(brew.amount / packaging.sizePerPackage); // any extra is discarded
    const cost = packaging.costPerPackage * items;

    this.playerStatus.money = this.playerStatus.money - cost;
    this.messageBoxService.add(
      `Packaged the ${brew.beer.name} into ${items} ${packaging.name}
      which cost ${this.currencyPipe.transform(cost)}.`);
    brew.status = BrewStatus.Packaged;
    brew.packaging = packaging;
  }

}
