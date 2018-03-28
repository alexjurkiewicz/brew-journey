import { Component, OnInit } from '@angular/core';

import { MatCheckboxChange } from '@angular/material/checkbox';

import { Malt } from '../malt';
import { Hop } from '../hop';
import { IngredientDataService } from '../ingredient-data.service';

@Component({
  selector: 'app-brew-settings',
  templateUrl: './brew-settings.component.html',
  styleUrls: ['./brew-settings.component.css']
})
export class BrewSettingsComponent implements OnInit {
  public maltAmounts: Map<Malt, number> = new Map();
  public hopAmounts: Map<Hop, number> = new Map();
  // HACK: We need maltAmountKeys because Angular 5 *ngFor can't iterate
  // over ES6 Map or even directly over Array.from(mymap.keys())).
  public maltAmountKeys: Array<Malt>;
  public hopAmountKeys: Array<Hop>;

  constructor(
    public ingredientData: IngredientDataService,
  ) {
    // Init
    for (const malt of this.malts) {
      this.maltAmounts.set(malt, 0);
    }
    this.maltAmountKeys = Array.from(this.maltAmounts.keys());
    for (const hop of this.hops) {
      this.hopAmounts.set(hop, 0);
    }
    this.hopAmountKeys = Array.from(this.hopAmounts.keys());
  }

  ngOnInit() { }

  toggleMalt(event: MatCheckboxChange, malt: Malt): void {
    if (event.source.checked) {
      this.maltAmounts.set(malt, 50);
    } else {
      this.maltAmounts.set(malt, 0);
    }
  }

  get malts(): Array<Malt> {
    return this.ingredientData.malts;
  }

  get activeMalts(): Array<Malt> {
    return this.malts.filter((malt) => (this.maltAmounts.get(malt) || 0) > 0);
  }

  setMaltAmount(malt: Malt, intensity: number) {
    this.maltAmounts.set(malt, intensity);
    if (intensity === 0) {
      // XXX disable the checkbox
    }
  }

  toggleHop(event: MatCheckboxChange, hop: Hop): void {
    if (event.source.checked) {
      this.hopAmounts.set(hop, 50);
    } else {
      this.hopAmounts.set(hop, 0);
    }
  }

  get hops(): Array<Hop> {
    return this.ingredientData.hops;
  }

  get activeHops(): Array<Hop> {
    return this.hops.filter((hop) => (this.hopAmounts.get(hop) || 0) > 0);
  }

  setHopAmount(hop: Hop, intensity: number) {
    this.hopAmounts.set(hop, intensity);
    if (intensity === 0) {
      // XXX disable the checkbox
    }
  }

  brewBeer(): void {
    const malts = this.activeMalts;
    const maltAmounts = malts.map((malt) => this.maltAmounts.get(malt));
    const hops = this.activeHops;
    const hopAmounts = hops.map((hop) => this.hopAmounts.get(hop));
  }
}
