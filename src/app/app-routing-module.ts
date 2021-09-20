import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritoComponent } from './favorito/favorito.component';
import { ListaComponent } from './lista/lista.component'

const routes: Routes = [
    { path: '', component: FavoritoComponent},  { path: 'lista', component: ListaComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }