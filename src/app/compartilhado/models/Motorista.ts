import { Veiculo } from './Veiculo';
import { Usuario } from './Usuario';

export class Motorista extends Usuario {
    dadosVeiculo = new Veiculo();
    localizacao: null;
    codigo: string;
}
