import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../funcionario/funcionario';

firebase.initializeApp(environment.firebase)

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {
  //o Subject e um tipo especial de Observable
  //permite enviar e receber dados
  private funcionarioEdit = new Subject<any>()

  storageRef = firebase.app().storage().ref()
  
  constructor(
    private fireAngular: AngularFirestore
  ) { }

  listarFuncionarios(): Observable<any>{
    return this.fireAngular.collection('funcionario').snapshotChanges();
  }

  addFuncionario(funcionario: Funcionario): Promise<any>{
    return this.fireAngular.collection('funcionario').add(funcionario)
  }

  excluirFuncionario(id:string): Promise<any>{
    return this.fireAngular.collection('funcionario').doc(id).delete()
  }

  //o next coloca os dados do func escolhido dentro do Subject
  pegarDadosDoFuncionarioEscolhido(funcionario: Funcionario){
    return this.funcionarioEdit.next(funcionario)
  }

  //nesse metodo e retornado os dados que estao no Subject
  getfuncionarioEdit(): Observable<Funcionario>{
    return this.funcionarioEdit.asObservable()
  }

  editarFuncionario(id: string, funcionario: Funcionario): Promise<any>{
    return this.fireAngular.collection('funcionario').doc(id).update(funcionario)
  }
  //a funçaõ putString faz a conversao do arquivo imgBase para blob
  async subirImagen(nome:string, imgBase64:any){

    try{
      let resultado = await this.storageRef.child("imgFoto/" + nome).putString(imgBase64, 'data_url')
      console.log(resultado)
      return await resultado.ref.getDownloadURL()
    }catch(err){
      console.log(err)
      return null
    }
  }
}
