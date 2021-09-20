import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritoComponent } from './favorito/favorito.component';
import { ListaComponent } from './lista/lista.component'
import { ClienteComponent } from './lista/clienteid.component';

const routes: Routes = [
    { path: '', component: FavoritoComponent},  { path: 'lista', component: ListaComponent}, { path: 'cliente', component: ClienteComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }