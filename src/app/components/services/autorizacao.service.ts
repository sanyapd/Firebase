import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizacaoService {

  autorizacao = false

  constructor() { }

  autorizar(){
    localStorage.setItem('login', "sim")
  }

  deslogar(){
    localStorage.clear()
  }
 //!! se o login existir retorna true senao false
  obterStatusLogin = () => !!localStorage.getItem('login')
}
