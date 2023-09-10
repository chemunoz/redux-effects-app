import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  constructor(private usuarioService: UsuarioService) {}

  ngOnInit() {
    this.usuarioService
      .getUsers()
      .pipe(
        tap(console.log),
        map((resp) => resp.data)
      )
      .subscribe(console.log);
  }
}
