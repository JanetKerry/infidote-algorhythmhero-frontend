import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { HeaderComponent } from './components/header/header.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { GamelogicComponent } from './components/gamelogic/gamelogic.component';
import { MusicdataService } from './services/musicdata.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HeaderComponent,
    LeaderboardComponent,
<<<<<<< HEAD
    GamelogicComponent
=======
>>>>>>> 77e10ad9555543672542dc4524180230856d61c6
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MusicdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
