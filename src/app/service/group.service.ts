import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AppComponent} from '../app.component';
import {map} from 'rxjs/operators';

@Injectable()
export class GroupService {
  constructor(private httpClient: HttpClient) {
  }

  public getAll(): Observable<any> {
    return this.httpClient.get(AppComponent.API_URL + '/groups').pipe(map((data: any) => {
      return data;
    }));
  }
}
