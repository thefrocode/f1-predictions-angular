import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { APP_CONFIG, AppConfig } from '@f1-predictions-angular/shared/app-config';
import { SocialUser } from "@abacritt/angularx-social-login";
import { Observable } from 'rxjs';
import { AuthResponse } from '@f1-predictions-angular/shared/data-access/models';

@Injectable({ providedIn: 'root' })
export class AuthApiService {

    constructor(@Inject(APP_CONFIG) private appConfig: AppConfig, private http: HttpClient) {}

    signIn(user: SocialUser): Observable<AuthResponse>{
        console.log(user)
        return this.http.post<AuthResponse>(`${this.appConfig.baseURL}/auth/signin`, user)
    }

}