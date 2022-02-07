import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthenticationFacade } from '../auth.facade';
import { TokenPayload, TokenResponse } from '../models/token';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUri = environment.apiUri;

  constructor(private http: HttpClient) {}

  public register(user: TokenPayload): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.apiUri + '/register', user);
  }

  public login(user: TokenPayload): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.apiUri + '/login', user);
  }

  public guestLogin(): Observable<TokenResponse> {
    return this.http.post<TokenResponse>(this.apiUri + '/guestlogin', {});
  }
}
