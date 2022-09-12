import { AlunosSelecaoModel } from 'src/app/compartilhado/models/AlunosSelecaoModel';
import { AlunosGrupoModel } from './AlunosGrupoModel';
export class GrupoModel {
    id: string;
    codigoMotorista: string;
    titulo: string;
    descricao: string;
    horarioDe: string;
    horarioAte: string;
    alunosGrupo = [new AlunosGrupoModel()];
}
