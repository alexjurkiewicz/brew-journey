import { Injectable } from '@angular/core';

import { Beer } from './beer';
import { BeerType } from './beer-type.enum';

@Injectable()
export class BeerDataService {

  beers = [
    new Beer('Starter\'s Special', BeerType.Homebrew ),
    new Beer('Sunset Studies Pale Ale', BeerType.Pale_Ale),
  ]

  constructor() { }

}
