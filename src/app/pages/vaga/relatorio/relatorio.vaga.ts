import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Router, ActivatedRoute } from "@angular/router";
import { VagaService } from "../../../service/VagaService";
import { Servidor } from "../../../service/ip.servidor";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  templateUrl: './relatorio.vaga.html'
})

export class RelatorioVagaComponent implements OnInit {
  public vagaId : any;
  public url : any;

  constructor(public vagaSerivce: VagaService,private route: ActivatedRoute, private sanitizer: DomSanitizer,) {
  }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.vagaId = params['vagaId'];
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(Servidor.Ip()+"Vaga/Relatorio/"+ this.vagaId);
    });
  }
}
