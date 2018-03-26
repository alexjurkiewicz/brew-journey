export class Brew {
  constructor(public quality: number, public name: string) { }
  public toString(): string {
    return this.name;
  }
}
