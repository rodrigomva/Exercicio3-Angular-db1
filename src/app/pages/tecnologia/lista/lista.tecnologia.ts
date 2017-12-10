import { Component, OnInit, HostListener } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";


@Component({
  templateUrl: './lista.tecnologia.html'
})

export class ListaTecnologiaComponent implements OnInit {
  public list: any;
  public ultimoId: any;
  public carregando: boolean = false;
  public erroServidor : String;
  constructor(public tecnologiaSerivce: TecnologiaService) {

  }


  ngOnInit() {
    // Carregar as tecnologias
    this.buscarTodosAtivos();
  }

  buscarTodosAtivos() {
    this.tecnologiaSerivce.buscarTodosAtivos()
      .subscribe(data => {
        //Carrega a lista com o retorno da requisicao
        this.list = data;
      },
      error => this.erroServidor = error._body);
  }


  //Confirma se dejea excluir mesmo
  confirmarExlucao(item: TecnologiaModel) {
    if (confirm("Deseja excluir a tecnologia  " + item.Nome)) {
      this.excluir(item);
    }
  }

  //Excluir a tecnologia
  excluir(item: TecnologiaModel) {
    this.tecnologiaSerivce.excluir(item)
      .subscribe(data => {
        this.buscarTodosAtivos();
      },
      error => {
        this.erroServidor = error._body;
      });
  }


}
