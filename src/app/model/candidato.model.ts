import { VagaModel } from "./vaga.model";
import { CandidatoTecnologiaModel } from "./candidatoTecnologia.model.";

export class CandidatoModel {
         public CandidatoId : number = null;       
         public Nome : string = "";
         public Email : string = "";
         public VagaId : number;
         public Vaga :VagaModel = null;
         public Tecnologias : Array<CandidatoTecnologiaModel> = new Array<CandidatoTecnologiaModel>();
}