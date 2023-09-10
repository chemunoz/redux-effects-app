import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly URL = 'https://reqres.in/api';
  constructor(private http: HttpClient) {}

  public getUsers() {
    return this.http.get(`${this.URL}/users`);
  }
}
