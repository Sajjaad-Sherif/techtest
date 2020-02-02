import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component'
import {NewGamesComponent} from './new-games/new-games.component'


const routes: Routes = [
  {path:'new-games', component: NewGamesComponent , pathMatch: 'full'},
  {path:'', component: ContentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
