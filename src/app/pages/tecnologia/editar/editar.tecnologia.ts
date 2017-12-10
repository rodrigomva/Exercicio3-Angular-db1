import { Component, OnInit, HostListener, ViewContainerRef } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { TecnologiaService } from "../../../service/TecnologiaService";
import { TecnologiaModel } from "../../../model/tecnologia.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: './editar.tecnologia.html'
})

export class EditarTecnologiaComponent implements OnInit {
    public tecnologia: TecnologiaModel;
    public erroServidor: String;

    constructor(public tecnologiaSerivce: TecnologiaService, private router: Router, private route: ActivatedRoute) {
    }


    ngOnInit() {
        this.tecnologia = new TecnologiaModel();

        //Buscar parametro da tecnologiaId
        this.route.params.subscribe(params => {
            let tecnologiaId = params['tecnologiaId'];
            this.buscarPorId(tecnologiaId);
        });
    }

    buscarPorId(tecnologiaId: string) {
        this.tecnologiaSerivce.buscarPorId(tecnologiaId)
            .subscribe(tecnologia => this.tecnologia = tecnologia,
            error => console.log(error));
    }

    editar() {
        this.erroServidor = null;
        this.tecnologiaSerivce.editar(this.tecnologia)
            .subscribe(data => {
                this.router.navigate(['./tecnologias']);
            },
            error => {
                this.erroServidor = error._body;
            });
    }
}
