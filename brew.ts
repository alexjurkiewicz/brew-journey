class Messages {
  messages: Array<string> = [];
  update(): void {
    let list = document.getElementById('messages') as HTMLLIElement;
    list.innerHTML = '';  // empty it -- slow
    for (let msg of this.messages.slice().reverse()) { // reverse a copy
      let el = document.createElement('li');
      el.appendChild(document.createTextNode(msg));
      list.appendChild(el);
    }
  }

  add(msg: string): void {
    this.messages.push(msg);
    this.update();
  }
}

let messages = new Messages();

class Equipment {
  masher: string = 'none';
  boiler: string = 'none';
  fermenter: string = 'none';
  toHTML(): string {
    return `<ul>
    <li>Masher: ${this.masher}</li>
    <li>Boiler: ${this.boiler}</li>
    <li>Fermenter: ${this.fermenter}</li>
    </ul>`
  }
}

interface Brew {
  name: string;
  skill: number;
}

interface PlayerStatus {
    money: number;
    skill: number;
    equipment: Equipment;
    brews: Array<Brew>;
}

var playerstatus: PlayerStatus = {'money': 100, 'skill': 1, 'equipment': new Equipment(), 'brews': []};

function printStatus(status: PlayerStatus): void {
  let statusBox = document.getElementById('statusbox') as HTMLDivElement;
  statusBox.innerHTML = '';
  let p = document.createElement('p');
  p.innerHTML = `<ul>
  <li>Current cash: $${status.money}</li>
  <li>Current skill: ${status.skill}</li>
  <li>Brewing equipment: ${status.equipment.toHTML()}</li>
  <li>Brews on hand: ${status.brews.length}</li>
  </ul>`
  statusBox.appendChild(p);
}

function printActionBar(): void {
  let actionBar = document.getElementById('actionbar') as HTMLDivElement;
  actionBar.innerHTML = ''
  if (playerstatus.equipment.boiler != 'homebrew all-in-one kit') {
    actionBar.innerHTML += '<button type="button" onclick="purchaseEquipment();">Purchase Basic Homebrew Kit ($20)</button>'
  }
  if (playerstatus.equipment.boiler != 'none' && playerstatus.money >= 7) {
    actionBar.innerHTML += '<button type="button" onclick="brew();">Brew a basic beer ($7)</button>';
  }
  if (playerstatus.brews.length !== 0) {
    actionBar.innerHTML += '<button type="button" onclick="sellBrew();">Sell a basic beer brew (+$10)</button>';
  }
}

function refreshUI(): void {
  printStatus(playerstatus);
  printActionBar();
}

function purchaseEquipment(): void {
  playerstatus.equipment.boiler = 'homebrew all-in-one kit';
  playerstatus.equipment.fermenter = 'homebrew all-in-one kit';
  messages.add("You purchase an all-in-one homebrew kit from the supermarket. It takes pre-mashed malt and concentrated hop oil")
  playerstatus.money -= 20;
  refreshUI();
}

function brew(): void {
  let brew = {'name': 'basic', 'skill': playerstatus.skill};
  playerstatus.money -= 7;
  playerstatus.brews.push(brew);
  refreshUI();
}

function sellBrew(): void {
  playerstatus.brews.shift();
  playerstatus.money += 10;
  refreshUI();
}

function main(): void {
  refreshUI();
  messages.add("Welcome to Brew!");
}
window.onload = main;
