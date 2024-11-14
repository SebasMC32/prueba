import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Fauna } from '../models/Fauna';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class FaunaService {
  private url = `${base_url}/faunas`;
  private listaCambio = new Subject<Fauna[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Fauna[]>(this.url);
  }
  insert(c: Fauna) {
    return this.http.post(this.url, c);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Fauna[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Fauna>(`${this.url}/${id}`);
  }
  update(ci: Fauna) {
    return this.http.put(this.url, ci);
  }
}
