import { Injectable } from '@angular/core';

import { Hop } from './hop';
import { Malt } from './malt';

@Injectable()
export class IngredientDataService {

  malts = [
    new Malt('Homebrew Premix', 1, 1, 0.5),
    new Malt('2-Row', 1, 1, 1),
    new Malt('Crystal 60', 60, 60, 1),
  ];

  hops = [
    new Hop('Homebrew Premix', 5, 1, 0.5),
    new Hop('Cascade', 10, 5, 1),
    new Hop('Citra', 40, 13, 1),
    new Hop('Chinook', 20, 15, 1),
  ];

  constructor() { }

  malt(name: string): Malt | null {
    for (const malt of this.malts) {
      if (name === malt.name) {
        return malt;
      }
    }
    return null;
  }

}
