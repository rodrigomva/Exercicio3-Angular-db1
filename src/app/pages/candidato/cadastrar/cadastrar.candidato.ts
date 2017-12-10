import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";
import { Router, ActivatedRoute } from "@angular/router";
import { VagaService } from "../../../service/VagaService";
import { VagaModel } from "../../../model/vaga.model";
import { CandidatoModel } from "../../../model/candidato.model";
import { CandidatoService } from "../../../service/CandidatoService";
import { CandidatoTecnologiaModel } from "../../../model/candidatoTecnologia.model.";

@Component({
  templateUrl: './cadastrar.candidato.html'
})

export class CadastrarCandidatoComponent implements OnInit {
  public candidato: CandidatoModel;
  public erroServidor: String;
  public listTecnologias: Array<TecnologiaModel>;

  constructor(public candidatoService: CandidatoService, public tecnologiaSerivce: TecnologiaService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.candidato = new CandidatoModel();

    //Carregar as tecnologias
    this.buscarTecnologias();

    //Buscar parametro VagaId
    this.route.queryParams.subscribe(params => {
      this.candidato.VagaId = params['vagaId'];
    });
  }

  buscarTecnologias() {
    this.tecnologiaSerivce.buscarTodosAtivos()
      .subscribe(data => {
        //Carrega a lista com o retorno da requisicao
        this.listTecnologias = data;
      },
      error => console.log(error));
  }

  cadastrar() {
    this.erroServidor = null;
    this.candidatoService.cadastrar(this.candidato)
      .subscribe(data => {
        this.router.navigate(['./vagas/cadastrar', this.candidato.VagaId]);
      },
      error => {
        this.erroServidor = error._body;
      });
  }

  buscarPorId(candidatoId: string) {
    this.candidatoService.buscarPorId(candidatoId)
      .subscribe(candidato => this.candidato = candidato,
      error => console.log(error));
  }

  //Quando o usuario marcar uma tecnologia, então adiciona na lista
  selecionarTecnologia(tecnologia : TecnologiaModel, event : any)
  {
    if(event.target.checked)
    {
      let candidatoTecnologia = new CandidatoTecnologiaModel();
      candidatoTecnologia.TecnologiaId = tecnologia.TecnologiaId;
      this.candidato.Tecnologias.push(candidatoTecnologia);
    }
  }
}
