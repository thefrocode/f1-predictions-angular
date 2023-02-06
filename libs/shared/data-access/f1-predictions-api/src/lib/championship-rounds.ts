import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@f1-predictions-angular/shared/app-config';
import { Observable } from 'rxjs';
import { ChampionshipRound } from '@f1-predictions-angular/shared/data-access/models'
@Injectable({ providedIn: 'root' })
export class ChampionshipRoundApiService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

    getChampionshipRounds(): Observable<ChampionshipRound[]>{
        return this.http.get<ChampionshipRound[]>(`${this.appConfig.baseURL}/championship-rounds`)
    }

}