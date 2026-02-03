import { Conta } from "./conta";
import { Cliente } from "./cliente";

export class Corrente extends Conta {
    private taxa = 0.01

    constructor(cliente_titular: Cliente, saldo: number) {
        super(cliente_titular, saldo)
    }


    override debitar(valor: number) {
        let saldo_atual = this.consultarSaldo()

        const valor_taxado = valor + (valor * this.taxa)
        if (saldo_atual < valor_taxado) {
            return undefined
        }
        this.saldo -= valor
        return true
    }
}
