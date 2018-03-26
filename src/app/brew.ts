import { Beer } from './beer';

let id = 1;

export class Brew {
  id: number;
  constructor(public beer: Beer, public amount: number) {
    this.id = id;
    id++;
  }
  public toString(): string {
    return `${this.beer.name} (${this.amount}L)`;
  }
}
