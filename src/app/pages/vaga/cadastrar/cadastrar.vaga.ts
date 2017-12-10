import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";
import { Router, ActivatedRoute } from "@angular/router";
import { VagaService } from "../../../service/VagaService";
import { VagaModel } from "../../../model/vaga.model";
import { CandidatoModel } from "../../../model/candidato.model";
import { CandidatoService } from "../../../service/CandidatoService";

@Component({
  templateUrl: './cadastrar.vaga.html'
})

export class CadastrarVagaComponent implements OnInit {
  public vaga: VagaModel;
  public vagaId: any;
  public erroServidor: String;

  constructor(public vagaSerivce: VagaService, public candidatoSerivce: CandidatoService, private router: Router, private route: ActivatedRoute) {
  }


  ngOnInit() {
    this.vaga = new VagaModel();
    //Busca Parametro
    this.route.params.subscribe(params => {
      this.vagaId = params['vagaId'];
      //Se tiver parametro, busca por ID
      if (this.vagaId > 0)
        this.buscarPorId();
    });
  }

  //Quando for salvar verificar se já esta cadastro ou não
  salvar() {
    if (this.vaga.VagaId > 0)
      this.editar();

    else
      this.cadastrar();
  }

  cadastrar() {
    this.erroServidor = null;
    this.vagaSerivce.cadastrar(this.vaga)
      .subscribe(data => {
        this.vaga = data;
      },
      error => {
        this.erroServidor = error._body;
      });
  }

  editar() {
    this.erroServidor = null;
    this.vagaSerivce.editar(this.vaga)
      .subscribe(data => {
        this.vaga = data;
      },
      error => {
        this.erroServidor = error._body;
      });
  }

  buscarPorId() {
    this.vagaSerivce.buscarPorId(this.vagaId)
      .subscribe(vaga => this.vaga = vaga,
      error => { this.erroServidor = error._body; });
  }

  //Confirma a exclusão do candidato
  confirmarExlucaoCandidato(item: CandidatoModel) {
    if (confirm("Deseja excluir o candidato " + item.Nome)) {
      this.excluirCandidato(item);
    }
  }

  //Exclui o candidato
  excluirCandidato(candidato: CandidatoModel) {
    this.candidatoSerivce.excluir(candidato)
      .subscribe(data => {
        this.buscarPorId();
      },
      error => { this.erroServidor = error._body;});
  }
}
