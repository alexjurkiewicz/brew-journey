import { Beer } from './beer';
import { BrewStatus } from './brew-status.enum';
import { Packaging } from './packaging';

let id = 1;

export class Brew {
  id: number;
  public status: BrewStatus = BrewStatus.Brewed;
  public packaging?: Packaging = undefined;

  constructor(
    public beer: Beer,
    public amount: number,
    public brewCost: number,
    public quality: number,
  ) {
    this.id = id;
    id++;
  }
  public toString(): string {
    return `${this.beer.name} (${this.amount}L) (${this.status})`;
  }
}
