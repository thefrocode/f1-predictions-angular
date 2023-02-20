import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { APP_CONFIG, AppConfig } from "@f1-predictions-angular/shared/app-config";
import { LeaderBoard, Points } from "@f1-predictions-angular/shared/data-access/models";
import { Observable } from "rxjs";
@Injectable({ providedIn: 'root' })
export class ResultApiService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

    getPoints(round_id: number,player_id: number| null,): Observable<Points>{
        return this.http.get<Points>(`${this.appConfig.baseURL}/results/points/${round_id}/${player_id}`)
    }

    getLeaderboard(): Observable<LeaderBoard[]>{
        return this.http.get<LeaderBoard[]>(`${this.appConfig.baseURL}/results/leaderboard`)
    }

}