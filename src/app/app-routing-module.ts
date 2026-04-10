import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProduto } from './components/produto/cadastrar-produto/cadastrar-produto';
import { Home } from './components/home/home';
import { ListarProduto } from './components/produto/listar-produto/listar-produto';

const routes: Routes = [
  {path: '',component:Home},
  {path:'produtos', component:ListarProduto},
  {path:'produtos/cadastrar', component:CadastrarProduto}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
