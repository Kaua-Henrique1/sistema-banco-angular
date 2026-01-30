import { Conta } from "./conta";
import { Cliente } from "./cliente";

export class Poupanca extends Conta {

    constructor(cliente_titular: Cliente, data_criacao_conta: Date) {
        super(cliente_titular, data_criacao_conta)

    }
}
