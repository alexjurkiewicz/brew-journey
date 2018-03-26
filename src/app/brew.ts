import { Beer } from './beer';
import { BrewStatus } from './brew-status.enum';

let id = 1;

export class Brew {
  id: number;
  public status: BrewStatus = BrewStatus.Brewed;

  constructor(
    public beer: Beer,
    public amount: number,
    public brewCost: number,
  ) {
    this.id = id;
    id++;
  }
  public toString(): string {
    return `${this.beer.name} (${this.amount}L) (${this.status})`;
  }
}
