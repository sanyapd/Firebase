import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cargo } from '../../cargo/cargo';
import { CargoService } from '../../services/cargo.service';
import { FuncionarioService } from '../../services/funcionario.service';
import { Funcionario } from '../funcionario';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent implements OnInit {

  funcionario: FormGroup = this.fb.group({
    nome:['',[Validators.required, Validators.minLength(3)]],
    email:['',[Validators.required, Validators.email]],
    cargo:['',[Validators.required]],
    salario:[''],
    foto:['']
  })

  id:string | undefined
  urlImagem: any = ''
  cargos: Cargo[] = []

  constructor(
    private fb: FormBuilder,
    private funcService: FuncionarioService,
    private cargoService: CargoService
  ) { }

  ngOnInit(): void {
    this.funcService.getfuncionarioEdit().subscribe(resultado => {
      console.log(resultado)
      this.id = resultado.id
      this.urlImagem = resultado.foto
      this.funcionario.patchValue({
        nome:resultado.nome,
        email:resultado.email,
        cargo:resultado.cargo,
        salario:resultado.salario,
        
      })
    })

    this.trazerTodosCargos()
  }

  salvarFuncionario(){
    if(this.id == undefined){
      //executar a funcao de cadastrado
      this.addFuncionario()
    }else{
      //executar a funcao de edicao
      this.editarFuncionario(this.id)
    }
  }

  addFuncionario(){
    const FUNCIONARIO: Funcionario = {
      nome: this.funcionario.value.nome,
      email: this.funcionario.value.email,
      cargo: this.funcionario.value.cargo,
      salario: this.funcionario.value.salario,
      foto: this.urlImagem
    }
    this.funcService.addFuncionario(FUNCIONARIO).then(() =>{
      console.log("Funcionario cadastrado")
      this.funcionario.reset()
    }, error => {
      console.log("Error ao cadastrar o funcionario")
    }) 
  }

  editarFuncionario(id:string){
    const FUNCIONARIO: Funcionario = {
      nome: this.funcionario.value.nome,
      email: this.funcionario.value.email,
      cargo: this.funcionario.value.cargo,
      salario: this.funcionario.value.salario,
      foto: this.urlImagem
    }
    this.funcService.editarFuncionario(id, FUNCIONARIO).then(()=>{
      console.log("Funcionario editado!")
      this.funcionario.reset()
      this.id = undefined
    }, error=>{
      console.log("Erro ao editar um funcionario: " + error)
    })
  }

  carregarImagem(event:any){
    let arquivo = event.target.files[0]
    let reader = new FileReader()

    reader.readAsDataURL(arquivo)
    reader.onloadend = () => {
      console.log(reader.result)
      this.funcService.subirImagen("funcionario" + Date.now(), reader.result).then(urlImagem => {
        console.log(urlImagem)
        this.urlImagem = urlImagem
      })
    }
  }

  trazerTodosCargos(){
    this.cargoService.listarCargos().subscribe(doc =>{
      this.cargos = []
      doc.forEach((element: any) =>{
        this.cargos.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      })
    })
  }
}
