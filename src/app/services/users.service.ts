import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/Users';

const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url=`${base_url}/usuarios`
  constructor(private http:HttpClient) {}

  list(){
    return this.http.get<Users[]>(this.url)
  }
}
