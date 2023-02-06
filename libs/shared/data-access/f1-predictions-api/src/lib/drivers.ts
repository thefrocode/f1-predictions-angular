import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@f1-predictions-angular/shared/app-config';
import { Observable } from 'rxjs';
import { Driver } from '@f1-predictions-angular/shared/data-access/models'
@Injectable({ providedIn: 'root' })
export class DriverApiService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

    getDrivers(): Observable<Driver[]>{
        return this.http.get<Driver[]>(`${this.appConfig.baseURL}/drivers`)
    }

}