import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from '../favorito/cliente';
import { favoritoService } from '../favorito/favoritoservice.componente';

@Component({
  selector: 'app-cliente',
  templateUrl: './clienteid.component.html',
  styleUrls: ['./lista.component.css']
})
export class ClienteComponent implements OnInit {

  clientecad: Cliente = {} as Cliente;
  
  constructor(private clienteService: favoritoService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
      this.clientecad = history.state;
  } 

  onClick() {
    this.router.navigate(['/lista'], {relativeTo: this.route})   
  }

}