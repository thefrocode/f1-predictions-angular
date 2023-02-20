import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@f1-predictions-angular/shared/app-config';
import { Observable } from 'rxjs';
import { Prediction } from '@f1-predictions-angular/shared/data-access/models'
@Injectable({ providedIn: 'root' })
export class PredictionApiService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

    makePrediction(prediction: Prediction): Observable<Prediction>{
        return this.http.post<Prediction>(`${this.appConfig.baseURL}/predictions`,prediction)
    }
    getPrediction(round_id: number, player_id:number | null): Observable<Prediction>{
        return this.http.get<Prediction>(`${this.appConfig.baseURL}/predictions/${round_id}/${player_id}`)
    }

}