import { Conta } from "./conta";
import { Cliente } from "./cliente";

export class Poupanca extends Conta {

    constructor(cliente_titular: Cliente,saldo: number) {
        super(cliente_titular, saldo)
    }
}
