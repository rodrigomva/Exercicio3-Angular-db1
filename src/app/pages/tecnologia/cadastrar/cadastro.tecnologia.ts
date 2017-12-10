import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  templateUrl: './cadastro.tecnologia.html'
})

export class CadastrarTecnologiaComponent implements OnInit {
    public tecnologia : TecnologiaModel;
    public erroServidor : String;

  constructor(public tecnologiaSerivce: TecnologiaService,private router: Router) {
}

  
  ngOnInit() {
      this.tecnologia = new TecnologiaModel();

  }

  cadastrar()
  {
    this.erroServidor = null;
     this.tecnologiaSerivce.cadastrar(this.tecnologia)
      .subscribe(data => {
        this.router.navigate(['./tecnologias']);
      },
      error => {
      this.erroServidor = error._body;
    });
  }
}
