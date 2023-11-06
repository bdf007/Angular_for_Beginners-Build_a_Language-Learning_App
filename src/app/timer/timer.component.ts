import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})

export class TimerComponent {
  constructor(public gameService: GameService) { }

  public getTimeLeftPercent(): number {
    return this.gameService.getTimeLeftPercent();
  }
}
