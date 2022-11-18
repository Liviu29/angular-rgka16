import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// export const Interface {

@Injectable({
  providedIn: 'root',
})
export class KioskService {
  private _behaviorSubject = new BehaviorSubject<any>(null);
  private _behaviorSubject$ = this._behaviorSubject.asObservable();

  private url = 'https://graph.cloud.selfpay.ro/v2/opendata/terminal/locations';

  constructor(private httpClient: HttpClient) {}

  getListKiosk() {
    return this.httpClient.get<any>(this.url);
  }

  getListKioskkk() {
    return this._behaviorSubject$;
  }

  setlistKiosk(value) {
    this._behaviorSubject.next(value)
  }

}
