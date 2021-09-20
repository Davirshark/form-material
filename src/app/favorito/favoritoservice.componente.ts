import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from './cliente';

@Injectable({
  providedIn: 'root'
})
export class favoritoService {

  baseurl: string= 'http://localhost:8080/teste/api';
  constructor(protected http: HttpClient) { }

  getClientes(): Observable<any>{
    return this.http.get<any>(`${this.baseurl}/clientes`);
  }
  salvaCliente(cliente: Cliente): Observable<any>{
    if (cliente.id) return this.http.post<any>(`${this.baseurl}/clientes`, cliente);
    return this.http.post<any>(`${this.baseurl}/clientes`, cliente);
  }
  deleteCliente(id: number): Observable<any>{
    return this.http.delete<any>(`${this.baseurl}/clientes/${id}`);
  }

  procuraCliente(nome: string): Observable<any>{
    return this.http.get<any>(`${this.baseurl}/clientes/getClientesByNome?nome=${nome}`);
  }

}