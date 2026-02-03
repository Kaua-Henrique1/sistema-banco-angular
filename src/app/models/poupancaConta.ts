import { Conta } from "./conta";
import { Cliente } from "./cliente";

export class Poupanca extends Conta {

    constructor(clienteTitular: Cliente,saldo: number) {
        super(clienteTitular, saldo)
    }
}
