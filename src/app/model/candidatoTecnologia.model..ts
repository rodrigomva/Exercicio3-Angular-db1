import { TecnologiaModel } from "./tecnologia.model";
import { VagaModel } from "./vaga.model";
import { CandidatoModel } from "./candidato.model";

export class CandidatoTecnologiaModel {
         public CandidatoTecnologiaId : number = null;
         
         public TecnologiaId : number;
         public Tecnologia : TecnologiaModel = null;

         public CandidatoId : number;
         public Candidato :CandidatoModel = null;
}