import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { List } from '../models/List';

import 'rxjs/add/operator/map';

@Injectable()
export class ListService {
  private serverApi = 'http://localhost:3000';

  constructor(private http: Http) {}

  public getAllMsgs(): Observable<List[]> {
    const URI = `${this.serverApi}/messagelist/`;
    return this.http
      .get(URI)
      .map(res => res.json())
      .map(res => <List[]>res.lists);
  }

  public addList(list: List) {
    const URI = `${this.serverApi}/messagelist/`;
    const headers = new Headers();
    const body = JSON.stringify({ sender: list.sender, message: list.message });
    headers.append('Content-Type', 'application/json');
    return this.http
      .post(URI, body, { headers: headers })
      .map(res => res.json());
  }
}
