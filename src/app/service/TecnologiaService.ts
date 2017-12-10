import { Injectable, Inject } from '@angular/core';
import { Jsonp, URLSearchParams, Http, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map'
import { get } from "http";
import { Observable } from "rxjs/Observable";
import { TecnologiaModel } from "../model/tecnologia.model";
import { Servidor } from "./ip.servidor";

@Injectable()
export class TecnologiaService {

  // Classe contrutora
  constructor(public _http: Http) { }

  // URL base da API
  protected url : string = Servidor.Ip();;

  //Buscar Todas as tecnologias
  buscarTodos(): Observable<any> {
    return this._http.get(this.url + "tecnologia/BuscarTodos")
      .map(res => res.json());
  }

//Buscar Todas as tecnologias ativas
  buscarTodosAtivos(): Observable<any> {
    return this._http.get(this.url + "Tecnologia/BuscarTodosAtivos")
      .map(res => res.json());
  }


//Buscar Tecnologia por ID
  buscarPorId(id: string): Observable<any> {
    return this._http.get(this.url + "Tecnologia/BuscaPorId/" + id)
      .map(res => res.json());
  }

//Cadastrar uma tecnologia
  cadastrar(tecnologia: TecnologiaModel): Observable<any> {
    return this._http.post(this.url + "Tecnologia/Cadastrar", tecnologia)
      .map(res => res.json());
  }

//Editar uma tecnologia
  editar(tecnologia: TecnologiaModel): Observable<any> {
    return this._http.post(this.url + "Tecnologia/Editar", tecnologia)
      .map(res => res.json());
  }

//Excluir uma tecnologia
  excluir(tecnologia: TecnologiaModel): Observable<any> {
    return this._http.post(this.url + "Tecnologia/Excluir", tecnologia)
      .map(res => res.json());
  }


}