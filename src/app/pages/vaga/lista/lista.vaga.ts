import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";
import { VagaService } from "../../../service/VagaService";
import { VagaModel } from "../../../model/vaga.model";


@Component({
  templateUrl: './lista.vaga.html'
})

export class ListaVagaComponent implements OnInit {
  public list: any;
  public ultimoId: any;
  public aberto: boolean = true;
  public erroServidor : String;
  constructor(public vagaSerivce: VagaService) {

  }


  ngOnInit() {
    // Carregar as vagas em aberto
    this.buscarTodosAbertos();
  }

  buscarTodosAbertos() {
    this.aberto = true;
    this.vagaSerivce.buscarTodasAbertas()
      .subscribe(data => {
        //Carrega a lista com o retorno da requisicao
        this.list = data;
      },
      error => this.erroServidor = error._body);
  }

  buscarTodosEncerrados(){
    this.aberto = false;
    this.vagaSerivce.buscarTodasEncerradas()
      .subscribe(data => {
        //Carrega a lista com o retorno da requisicao
        this.list = data;
      },
      error => this.erroServidor = error._body);    
  }

    //Confirma a exclusão da vaga
  confirmarExlucao(item: VagaModel) {
    if (confirm("Deseja excluir a vaga " + item.Nome)) {
      this.excluirCandidato(item);
    }
  }

  //Exclui o vaga
  excluirCandidato(vaga: VagaModel) {
    this.vagaSerivce.excluir(vaga)
      .subscribe(data => {
        this.buscarTodosAbertos();
      },
      error => { this.erroServidor = error._body;});
  }

}
