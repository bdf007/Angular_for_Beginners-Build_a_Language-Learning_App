import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css'],
})

export class GameOverComponent {
  constructor(public gameService: GameService) { }
}
