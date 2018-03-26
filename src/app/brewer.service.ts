import { Injectable } from '@angular/core';

import { MessageBoxService } from './message-box.service';
import { PlayerStatusService } from './player-status.service';
import { Brew } from './brew';

@Injectable()
export class BrewerService {

  constructor(
    private messages: MessageBoxService,
    private status: PlayerStatusService,
  ) { }

  brew() {
    this.messages.add('Brewing a beer...');
    let brew = new Brew(this.status.skill, 'Homebrew');
    this.status.money -= 7;
    this.status.brews.push(brew);
  }

}
