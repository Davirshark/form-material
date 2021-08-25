import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Cliente } from './cliente'

export interface PeriodicElement {
  name: string;
  position: number;
  numero: number;
  bairro: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Davi', numero: 842 , bairro: 'Vila Pery'},
  {position: 2, name: 'Elias', numero: 1006, bairro: 'Papicu'},
  
];


@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.component.html',
  styleUrls: ['./favorito.component.css']
})

export class FavoritoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'numero', 'bairro'];
  dataSource = ELEMENT_DATA;

  formCliente: FormGroup;
    constructor() { }
  
    ngOnInit() {
      this.createForm(new Cliente());
    }
  
    createForm(cliente: Cliente) {
      this.formCliente = new FormGroup({
        nome: new FormControl(cliente.nome),
        tipo: new FormControl(cliente.tipo),
        data: new FormControl(cliente.data),
        rua: new FormControl(cliente.rua),
        numero: new FormControl(cliente.numero),
        ativo: new FormControl(cliente.ativo),
        bairro: new FormControl(cliente.bairro),
        uf: new FormControl(cliente.uf),
        cidade: new FormControl(cliente.cidade),
        
      }
      
      
      )
      
    }
  
  }