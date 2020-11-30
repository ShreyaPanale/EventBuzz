import { Injectable } from '@angular/core';
//To get events from db ->http service
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './event';
@Injectable()
export class EventService {
  
  private _getUrl = "/api/Events";
  private _postUrl = "/api/Event";
  private _putUrl = "/api/Event/";
  private _deleteUrl = "/api/Event/";

  constructor(private _http: HttpClient) { }

  getEvents() : Observable<Event[]>{
    return this._http.get<Event[]>(this._getUrl);
  }
}