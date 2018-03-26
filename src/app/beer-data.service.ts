import { Injectable } from '@angular/core';

import { Beer } from './beer';
import { BeerType } from './beer-type.enum';

@Injectable()
export class BeerDataService {

  beers = [
    new Beer('Starter\'s Special', BeerType.Homebrew, 1, 0, 7 ),
    new Beer('Off-The-Shelf Pale Ale', BeerType.Pale_Ale, 5, 5, 15),
  ];

  beer(id: number): Beer {
    return this.beers[id];
  }

  constructor() { }

}
