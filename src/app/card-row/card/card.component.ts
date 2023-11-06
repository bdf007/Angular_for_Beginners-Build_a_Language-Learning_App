import { Component, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from '../../game.service';
import { MessageService } from '../../message.service';

@Component({
  selector: 'app-row-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnDestroy {
  constructor(
    private gameService: GameService,
    private messageService: MessageService,
  ) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message.text === 'CardClicked') {
        if (this.gameService.getCurrentQuestion() !== this.imageName) {
          this.classes = 'fadedCard';
        }
      }
    });
  }

  @Input() imageUrl: string;
  @Input() imageName: string;
  subscription: Subscription
  classes = '';

  public cardClicked(): void {
    this.gameService.checkAnswer(this.imageName);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
