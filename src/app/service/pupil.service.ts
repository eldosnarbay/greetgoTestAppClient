import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppComponent} from '../app.component';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class PupilService {
  constructor(private httpClient: HttpClient) {
  }

  getPupils(): Observable<any> {
    return this.httpClient.get(AppComponent.API_URL + '/pupils').pipe(map((data: any) => {
      return data;
    }));
  }

  add(body: any): Observable<any> {
    return this.httpClient.post(AppComponent.API_URL + '/pupils/insert', body);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(AppComponent.API_URL + '/pupils/delete/' + id);
  }
}
