import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { tap } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  usuarios: Usuario[] = [];
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService
      .getUsers()
      .pipe(tap((resp) => (this.usuarios = resp)))
      .subscribe();
  }
}
