import { TecnologiaModel } from "./tecnologia.model";
import { VagaModel } from "./vaga.model";

export class VagaPesoModel {
    public VagaPesoId: number = null;
    public TecnologiaId: number;
    public Tecnologia: TecnologiaModel = null;
    public Peso : number = null;
    public VagaId: number;
    public Vagas: VagaModel = new VagaModel();

}