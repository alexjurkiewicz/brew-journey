import { Injectable } from '@angular/core';

@Injectable()
export class MessageBoxService {
  messages: Array<string> = [];

  constructor() {
    this.add('Welcome to Craft Journey!');
  }

  add(message: string): void {
    this.messages.push(message);
  }

}
