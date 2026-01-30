import { Conta } from "./conta";
import { Cliente } from "./cliente";

export class Corrente extends Conta {

    constructor(cliente_titular: Cliente, data_criacao_conta: Date) {
        super(cliente_titular, data_criacao_conta)
    }
}
