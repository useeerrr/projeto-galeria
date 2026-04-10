import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Header } from './template/header/header';
import { Footer } from './template/footer/footer';
import { Home } from './components/home/home';
import { ListarProduto } from './components/produto/listar-produto/listar-produto';
import { CadastrarProduto } from './components/produto/cadastrar-produto/cadastrar-produto';

@NgModule({
  declarations: [
    App,
    Header,
    Footer,
    Home,
    ListarProduto,
    CadastrarProduto
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
