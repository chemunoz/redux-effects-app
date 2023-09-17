import { createReducer, on } from '@ngrx/store';
import {
  cargarUsuarios,
  cargarUsuariosError,
  cargarUsuariosSuccess,
} from './usuarios.actions';
import { Usuario } from '../models/usuario.model';

export interface UsuariosState {
  users: Usuario[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

export const usuariosInitialState: UsuariosState = {
  users: [],
  loaded: false,
  loading: false,
  error: null,
};

export const usuariosReducer = createReducer(
  usuariosInitialState,
  on(cargarUsuarios, (state): UsuariosState => ({ ...state, loading: true })),
  on(
    cargarUsuariosSuccess,
    (state, { usuarios }: any): UsuariosState => ({
      ...state,
      loading: false,
      loaded: true,
      users: [...usuarios],
    })
  ),
  on(
    cargarUsuariosError,
    (state, { error }: any): UsuariosState => ({
      ...state,
      loading: false,
      loaded: false,
      error,
    })
  )
);
