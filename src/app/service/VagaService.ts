import { Injectable, Inject } from '@angular/core';
import { Jsonp, URLSearchParams, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { get } from "http";
import { Observable } from "rxjs/Observable";
import { TecnologiaModel } from "../model/tecnologia.model";
import { Servidor } from "./ip.servidor";
import { CandidatoModel } from "../model/candidato.model";
import { VagaModel } from "../model/vaga.model";

@Injectable()
export class VagaService {

  // Classe contrutora
  constructor(public _http: Http) { }

  // URL base da API
  protected url: string = Servidor.Ip();

  //Buscar Todas as vagas em aberto
  buscarTodasAbertas(): Observable<any> {
    return this._http.get(this.url + "vaga/BuscarTodasAbertas/")
      .map(res => res.json());
  }

  //Buscar Todas as vagas encerradas
  buscarTodasEncerradas(): Observable<any> {
    return this._http.get(this.url + "vaga/BuscarTodasEncerradas/")
      .map(res => res.json());
  }

  //Buscar Vaga por ID
  buscarPorId(id: string): Observable<any> {
    return this._http.get(this.url + "vaga/BuscarPorId/" + id)
      .map(res => res.json());
  }

  //Cadastrar uma vaga
  cadastrar(vaga: VagaModel): Observable<any> {
    return this._http.post(this.url + "vaga/Cadastrar", vaga)
      .map(res => res.json());
  }

  //Finalizar uma caga
  finalizar(vaga: VagaModel): Observable<any> {
    return this._http.post(this.url + "vaga/Finalizar", vaga)
      .map(res => res.json());
  }


  //Editar uma vaga
  editar(vaga: VagaModel): Observable<any> {
    return this._http.post(this.url + "vaga/Editar", vaga)
      .map(res => res.json());
  }

  //Excluir uma vaga
  excluir(vaga: VagaModel): Observable<any> {
    return this._http.post(this.url + "vaga/Excluir", vaga)
      .map(res => res.json());
  }

}