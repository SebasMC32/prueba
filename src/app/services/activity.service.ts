import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/Activity';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  private url=`${base_url}/actividades`
  constructor(private http:HttpClient) {}
  list(){
    return this.http.get<Activity[]>(this.url)
  }
}
