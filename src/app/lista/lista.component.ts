import { Component, OnInit } from '@angular/core';
import { favoritoService } from '../favorito/favoritoservice.componente';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../favorito/cliente';
import {MatTable} from '@angular/material/table';

export interface PeriodicElement {
  position: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  
]


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  clientes: Cliente[] = [];
  value: string = '';

  constructor(private favoritoService: favoritoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.favoritoService.getClientes().subscribe(response => {
      this.clientes = response;
    })
  }
  
  selecionaCliente(cliente: Cliente) {
    this.router.navigate(['/cliente'], { relativeTo: this.route, state: cliente })
  }

  search() {
    this.favoritoService.procuraCliente(this.value).subscribe(response =>{
      this.clientes=response
    })
  }

  onClick() {
    this.router.navigate(['../'], {relativeTo: this.route})   
  }

  

  


}