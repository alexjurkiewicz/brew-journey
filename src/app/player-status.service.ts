import { Injectable } from '@angular/core';

import { Equipment } from "./equipment";
import { Brew } from "./brew";

@Injectable()
export class PlayerStatusService {
  money: number;
  skill: number;
  equipment: Equipment;
  brews: Array<Brew>;

  constructor() {
    this.money = 100;
    this.skill = 1
    this.equipment = new Equipment();
    this.brews = [];
  }

  canBrew(): boolean {
    return this.equipment.boiler !== 'none'
      && this.equipment.fermenter !== 'none'
      && this.money > 0;
  }

  cantBrewReasons(): string {
    let reasons = []
    if (this.money < 0) {
      reasons.push("not enough money");
    }
    if (this.equipment.boiler === 'none' || this.equipment.fermenter === 'none') {
      reasons.push("need brewing equipment");
    }
    return reasons.join(', ');
  }

  purchaseEquipment() {
    this.equipment.boiler = 'All-in-one homebrew kit';
    this.equipment.fermenter = 'All-in-one homebrew kit';
    this.money -= 20;
  }

}
