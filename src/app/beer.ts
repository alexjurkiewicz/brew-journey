import { BeerType } from './beer-type.enum';

export class Beer {
  constructor(public name: string, public type: BeerType) {}
}
