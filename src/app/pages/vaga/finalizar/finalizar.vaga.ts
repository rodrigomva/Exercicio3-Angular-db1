import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";
import { Router, ActivatedRoute } from "@angular/router";
import { VagaService } from "../../../service/VagaService";
import { VagaModel } from "../../../model/vaga.model";
import { CandidatoModel } from "../../../model/candidato.model";
import { CandidatoService } from "../../../service/CandidatoService";
import { VagaPesoModel } from "../../../model/vagaPeso.model";

@Component({
    templateUrl: './finalizar.vaga.html'
})

export class FinalizarVagaComponent implements OnInit {
    public vaga: VagaModel;
    public vagaId: any;
    public erroServidor: String;
    public listTecnologias: Array<TecnologiaModel>;

    constructor(public vagaSerivce: VagaService, public tecnologiaService: TecnologiaService, private router: Router, private route: ActivatedRoute) {
    }


    ngOnInit() {
        this.vaga = new VagaModel();

        //Busca todas as tecnologias
        this.buscarTecnologias();

        //Buscar parametro da vaga Id
        this.route.params.subscribe(params => {
            this.vagaId = params['vagaId'];
            if (this.vagaId > 0)
                this.buscarPorId();
        });
    }

    salvar() {
        this.erroServidor = null;
        this.vaga.Pesos = new Array<VagaPesoModel>();

        //Passa todos os valores do peso para a tabela de VagaPeso
        for (var tecnologia of this.listTecnologias) {
            let vagaPeso = new VagaPesoModel();
            vagaPeso.TecnologiaId = tecnologia.TecnologiaId;
            vagaPeso.VagaId = this.vagaId;
            vagaPeso.Peso = tecnologia.PesoVaga;
            this.vaga.Pesos.push(vagaPeso);
        }
        
        this.vagaSerivce.finalizar(this.vaga)
            .subscribe(data => {
                this.router.navigate(['./vagas/relatorio', this.vaga.VagaId]);
            },
            error => {
                this.erroServidor = error._body;
            });
    }


    buscarPorId() {
        this.vagaSerivce.buscarPorId(this.vagaId)
            .subscribe(vaga => {
                this.vaga = vaga;
                this.vaga.Candidatos = null;
            },error => this.erroServidor = error._body);
    }


    buscarTecnologias() {
        this.tecnologiaService.buscarTodosAtivos()
            .subscribe(data => {
                //Carrega a lista com o retorno da requisicao
                this.listTecnologias = data;
            },
            error => this.erroServidor = error._body);
    }
}
