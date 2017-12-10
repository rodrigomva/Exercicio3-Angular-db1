import { Injectable, Inject } from '@angular/core';
import { Jsonp, URLSearchParams, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { get } from "http";
import { Observable } from "rxjs/Observable";
import { TecnologiaModel } from "../model/tecnologia.model";
import { Servidor } from "./ip.servidor";
import { CandidatoModel } from "../model/candidato.model";

@Injectable()
export class CandidatoService {

  // Classe contrutora
  constructor(public _http: Http) { }

  // URL base da API
  protected url : string = Servidor.Ip();

  //Buscar candidatos por vaga
  buscarPorVaga(id: string): Observable<any> {
    return this._http.get(this.url + "candidato/BuscarPorVaga/" + id)
      .map(res => res.json());
  }

  //Buscar candidato por ID
  buscarPorId(id: string): Observable<any> {
    return this._http.get(this.url + "candidato/BuscarPorId/" + id)
      .map(res => res.json());
  }

  //Cadastrar um candidato
  cadastrar(candidato: CandidatoModel): Observable<any> {
    return this._http.post(this.url + "candidato/Cadastrar", candidato)
      .map(res => res.json());
  }

//Excluir um candidato
  excluir(candidato: CandidatoModel): Observable<any> {
    return this._http.post(this.url + "candidato/Excluir", candidato)
      .map(res => res.json());
  }


}