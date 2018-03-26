import { Injectable } from '@angular/core';

import { Brew } from './brew';

@Injectable()
export class SellingService {

  constructor() { }

  sell(brew: Brew): void {
    console.log('selling something');
  }

}
