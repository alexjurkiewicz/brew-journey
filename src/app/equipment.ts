export class Equipment {
  constructor(public masher: string = 'none', public boiler: string = 'none', public fermenter: string = 'none') {}
  toHTML(): string {
    return `<ul>
    <li>Masher: ${this.masher}</li>
    <li>Boiler: ${this.boiler}</li>
    <li>Fermenter: ${this.fermenter}</li>
    </ul>
    `
  }
}
