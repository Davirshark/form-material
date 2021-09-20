import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FormGroup, FormControl, FormBuilder, Validator } from '@angular/forms';
import { Cliente } from './cliente'
import { favoritoService }  from './favoritoservice.componente'
import { ActivatedRoute, Router } from '@angular/router';

@Component({ selector: 'app-favorito', 
templateUrl: './favorito.component.html', 
styleUrls: ['./favorito.component.css'] }) 

export class FavoritoComponent implements OnInit {

  formCliente: FormGroup;
  example = { nome: "",
      bairro: "",
      numero: "", rua: "", dataNascimento: "", cidade:"", uf: "" };


  constructor(builder: FormBuilder, private favoritoService: favoritoService, private router: Router, private route: ActivatedRoute) {
    this.formCliente = builder.group({
      nome: "",
      bairro: "",
      numero: "", dataNascimento:"", rua: "", cidade: "", id: "", uf: ""
    });
  }

  ngOnInit() {
    this.createForm(new Cliente());
  }

  createForm(cliente: Cliente) {
    this.formCliente = new FormGroup({
      id: new FormControl(cliente.id),
      nome: new FormControl(cliente.nome),
      tipo: new FormControl(cliente.tipo),
      dataNascimento: new FormControl(cliente.dataNascimento),
      rua: new FormControl(cliente.rua),
      numero: new FormControl(cliente.numero),
      ativo: new FormControl(cliente.ativo),
      bairro: new FormControl(cliente.bairro),
      uf: new FormControl(cliente.uf),
      cidade: new FormControl(cliente.cidade),
    }
 )

  }
  nome = '';
  bairro = '';
  numero = '';
  displayedColumns = ['id', 'nome', 'bairro', 'numero'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  procurarCliente(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }
  
  addElement() {
    ELEMENT_DATA.push({
      id: Math.floor(Math.random() *10806),
      nome: this.example.nome,
      bairro: this.example.bairro,
      numero: this.example.numero
    });
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.favoritoService.salvaCliente(this.formCliente.value).subscribe(response => {
      ELEMENT_DATA.push(response),  this.router.navigate(['lista'], { relativeTo: this.route }) 
    }); 

  }
}

export interface Element {
  nome: string;
  id: number;
  bairro: string;
  numero: string;
}

const ELEMENT_DATA: Element[] = [
  { id:Math.floor(Math.random() * 256), nome: 'Davi', bairro: 'Vila Pery', numero: '5' },
  { id:Math.floor(Math.random() * 256), nome: 'Elias', bairro: 'Papicu', numero: '100' },
];