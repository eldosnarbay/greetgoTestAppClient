import {Injectable} from '@angular/core';
import {Headers, Http, RequestOptions, Response} from '@angular/http';
import {AppComponent} from '../app.component';
import {map} from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(public http: Http) { }

  public logIn(name: string, password: string) {

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    const base64Credential: string = btoa( name + ':' + password);
    headers.append('Authorization', 'Basic ' + base64Credential);

    const options = new RequestOptions();
    options.headers = headers;

    return this.http.get(AppComponent.API_URL + '/login' , options)
      .pipe(map((response: Response) => {
        const user = response.json().principal;
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      }));
  }

  logOut() {
    return this.http.post(AppComponent.API_URL + '/logout', {})
      .pipe(map((response: Response) => {
        localStorage.removeItem('currentUser');
      }));

  }
}
