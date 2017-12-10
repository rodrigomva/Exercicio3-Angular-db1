import { CandidatoModel } from "./candidato.model";
import { VagaPesoModel } from "./vagaPeso.model";

export class VagaModel {
         public VagaId : number = null;
         public Nome : string = "";
         public Encerrado : boolean = false;
         public Candidatos: Array<CandidatoModel>;
         public Pesos: Array<VagaPesoModel>;
         public TotalCandidatos : number = null;

}