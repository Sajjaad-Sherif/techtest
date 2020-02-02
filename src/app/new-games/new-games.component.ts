import { Component, OnInit,  Pipe, PipeTransform  } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';
import {Merged} from '../models/merged';

@Component({
  selector: 'app-new-games',
  templateUrl: './new-games.component.html',
  styleUrls: ['./new-games.component.css']
})
export class NewGamesComponent implements OnInit {
  private games: Game[];
  private jackpots: Jackpot[];
  d: Game;

  constructor( private apiServicec: ApiService) { }

  ngOnInit() {
    this.apiServicec.getGames().subscribe((data)=>{
      this.games = data.filter<Game>((d) => (d.categories.indexOf('new') > -1));
      console.log(this.games);
    });

    this.apiServicec.getJackpot().subscribe((jackpot)=>{
      this.jackpots = jackpot;
    });
    this.startTimer();
  }
  startTimer(){
    setInterval(() => {
      this.apiServicec.getJackpot().subscribe((jackpot) => {
        this.jackpots = jackpot;
        //console.log(this.jackpots);
      });
    }, 10000 );
  }

}
