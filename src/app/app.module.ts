import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { NotificationComponent } from './notification/notification.component';
import { ScoreComponent } from './score/score.component';
import { CardRowComponent } from './card-row/card-row.component';
import { CardComponent } from './card-row/card/card.component';
import { TimerComponent } from './timer/timer.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    QuestionComponent,
    NotificationComponent,
    ScoreComponent,
    CardRowComponent,
    CardComponent,
    TimerComponent,
    GameOverComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
  ],
})

export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTrophy);
  }
 }
