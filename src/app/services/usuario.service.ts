import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { User } from '../usuarios/usuarios.interface';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  private readonly URL = 'https://reqres.in/api';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    return this.http
      .get(`${this.URL}/users`)
      .pipe(map((resp: any) => resp?.data || []));
  }
}
