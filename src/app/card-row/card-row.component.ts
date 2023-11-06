import { Component } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-card-row',
  templateUrl: './card-row.component.html',
  styleUrls: ['./card-row.component.css']
})

export class CardRowComponent {
  constructor(public gameService: GameService) { }
}
