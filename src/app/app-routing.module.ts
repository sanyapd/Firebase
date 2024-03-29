import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuncionarioAdmComponent } from './components/funcionario/funcionario-adm/funcionario-adm.component';
import { FuncionarioCardsComponent } from './components/funcionario/funcionario-cards/funcionario-cards.component';
import { HomeComponent } from './components/templates/home/home.component';

const routes: Routes = [
  {path: "", component:HomeComponent},
  {path: "func-adm", component:FuncionarioAdmComponent},
  {path: "cards-func", component:FuncionarioCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }