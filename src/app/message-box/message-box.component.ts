import { Component, OnInit } from '@angular/core';

import { MessageBoxService } from '../message-box.service';

@Component({
  selector: 'app-message-box',
  templateUrl: './message-box.component.html',
  styleUrls: ['./message-box.component.css']
})
export class MessageBoxComponent implements OnInit {
  constructor(private messages: MessageBoxService) {}

  ngOnInit() {
  }

}
