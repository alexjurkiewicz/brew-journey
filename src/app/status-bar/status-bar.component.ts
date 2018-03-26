import { Component, OnInit } from '@angular/core';

import { Equipment } from '../equipment';
import { Brew } from '../brew';
import { PlayerStatusService } from '../player-status.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.css']
})
export class StatusBarComponent implements OnInit {
  constructor(public playerStatus: PlayerStatusService) { }

  ngOnInit() {}

  sellBrew(brew: Brew) {
    console.log('selling');
  }

}
