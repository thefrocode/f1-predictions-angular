import { Component, OnInit } from '@angular/core';
import { ChampionshipRound} from '@f1-predictions-angular/shared/data-access/models'
import { Store } from '@ngrx/store'
import { selectAllChampionshipRounds, selectChampionshipRound} from '@f1-predictions-angular/championship-rounds/data-access'
import { Observable } from 'rxjs';
@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'select-championship-rounds-list',
  templateUrl: './championship-rounds-list.component.html',
  styleUrls: ['./championship-rounds-list.component.scss'],
})
export class ChampionshipRoundsListComponent implements OnInit{

  rounds$: Observable<ChampionshipRound[]> = this.store.select(selectAllChampionshipRounds)

  constructor(private store: Store){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  onChange(championshipRoundId: string){
    console.log(championshipRoundId)
    this.store.dispatch(selectChampionshipRound({
      selectedId: +championshipRoundId
    }))
  }
}
