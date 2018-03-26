import { Component, OnInit } from '@angular/core';

import { Equipment } from '../equipment';
import { Brew } from '../brew';
import { PlayerStatusService } from '../player-status.service';
import { BrewStatus } from '../brew-status.enum';
import { PackagingService } from '../packaging.service';
import { SellingService } from '../selling.service';

function assertUnreachable(x: never): never {
  throw new Error(`Can't get here! (${x})`);
}

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  BrewStatus = BrewStatus;
  constructor(
    public playerStatus: PlayerStatusService,
    public packaging: PackagingService,
    public selling: SellingService,
  ) { }

  ngOnInit() {}

  progressBrew(brew: Brew): void {
    switch (brew.status) {
      case BrewStatus.Brewed:
        this.packaging.package(brew);
        return;
      case BrewStatus.Packaged:
        this.selling.sell(brew);
        return;
      case BrewStatus.Sold:
        return;
    }
    // Ensure we check all cases of the enum
    return assertUnreachable(brew.status);

  }

}
