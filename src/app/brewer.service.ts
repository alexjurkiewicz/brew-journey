import { Injectable } from '@angular/core';

import { MessageBoxService } from './message-box.service';

@Injectable()
export class BrewerService {

  constructor(private messages: MessageBoxService) { }

  brew() {
    this.messages.add('Brewing a beer...')
  }

}
