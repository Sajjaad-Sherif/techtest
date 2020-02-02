import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { ApiService } from '../api.service';
import {Game} from '../models/Games';
import {Jackpot} from '../models/Jackpot';
import { from } from 'rxjs';


@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private jackpots:Jackpot[];
  jackpotValue:number;
  @Input() game:Game;
  @Input() jackpot:Jackpot[];
  ribbon: boolean;
  category: string;
  constructor( private apiServicec: ApiService ) { }

  ngOnInit() {
    //console.log(this.jackpot)

    this.jackpots = this.jackpot;
    if(this.game.categories.indexOf('new') > -1) {
      this.ribbon = true;
      this.category = 'new';
    }
    if(this.game.categories.indexOf('top') > -1) {
      this.ribbon = true;
      this.category = 'top';
    }

    this.jackpotValueUpdater( this.jackpots );
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChanges) {
    //console.log(changes);
    this.jackpots = changes.jackpot.currentValue;
    this.jackpotValueUpdater( this.jackpots );
  }

  jackpotValueUpdater(jackpot: Jackpot[]){
    if(this.jackpot){
      jackpot.forEach(snap => {
        if (snap.game === this.game.id) {
          this.jackpotValue = snap.amount;
        }
      });
    }
  }
}
