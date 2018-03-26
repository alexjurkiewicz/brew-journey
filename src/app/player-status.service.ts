import { Injectable } from '@angular/core';

import { Equipment } from './equipment';
import { Brew } from './brew';
import { Beer } from './beer';
import { MessageBoxService } from './message-box.service';

@Injectable()
export class PlayerStatusService {
  public money: number;
  public skill: number;
  public equipment: Equipment;
  public brews: Array<Brew>;

  constructor(
    private messageBox: MessageBoxService,
  ) {
    this.money = 100;
    this.skill = 1;
    this.equipment = new Equipment();
    this.brews = [];
  }

  canBrew(beer: Beer): boolean {
    return this.equipment.boiler !== 'none'
      && this.equipment.fermenter !== 'none'
      && this.money >= beer.cost
      && this.skill >= beer.requiredSkillLevel;
  }

  cantBrewReasons(beer: Beer): string {
    const reasons = [];
    if (beer.cost > this.money) {
      reasons.push('not enough money');
    }
    if (this.equipment.boiler === 'none' || this.equipment.fermenter === 'none') {
      reasons.push('need brewing equipment');
    }
    if (this.skill < beer.requiredSkillLevel) {
      reasons.push(`need ${beer.requiredSkillLevel} skill`);
    }
    return reasons.join(', ');
  }

  purchaseEquipment() {
    this.equipment.boiler = 'All-in-one homebrew kit';
    this.equipment.fermenter = 'All-in-one homebrew kit';
    this.money -= 20;
    this.messageBox.add('Purchased an all-in-one homebrew kit for $20');
  }

}
