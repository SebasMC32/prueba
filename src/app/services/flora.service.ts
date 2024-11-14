import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Flora } from '../models/Flora';
import { Subject } from 'rxjs';
const base_url=environment.base

@Injectable({
  providedIn: 'root'
})
export class FloraService {
  private url = `${base_url}/floras`;
  private listaCambio = new Subject<Flora[]>();

  constructor(private http: HttpClient) {}

  list() {
    return this.http.get<Flora[]>(this.url);
  }
  insert(c: Flora) {
    return this.http.post(this.url, c);
  }
  getList() {
    return this.listaCambio.asObservable();
  }

  setList(listaNueva: Flora[]) {
    this.listaCambio.next(listaNueva);
  }

  delete(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  listId(id: number) {
    return this.http.get<Flora>(`${this.url}/${id}`);
  }
  update(ci: Flora) {
    return this.http.put(this.url, ci);
  }
}
