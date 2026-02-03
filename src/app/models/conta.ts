import { Cliente } from "./cliente"

export abstract class Conta {
    protected _saldo: number
    protected _clienteTitular: Cliente
    protected _dataCriacaoConta: string
    protected contas: Conta[] = [];

    constructor(clienteTitular: Cliente, saldo: number) {
        this._saldo = saldo || 0 
        this._clienteTitular = clienteTitular
        this._dataCriacaoConta = '';
    }

    protected consultarSaldo(): number {
        return this.saldo
    }

    public creditar(valor: number) {
        if (valor <= 0) {
            return;
        }
        this.saldo += valor
    }

    public debitar(valor: number) {
        let saldo_atual = this.consultarSaldo()

        if (saldo_atual < valor) {
            return undefined
        }
        this.saldo -= valor
        return true
    }

    protected trasferir(clienteCreditar: Conta, valorTransferir: number) {
        let valor_debitado = this.debitar(valorTransferir)
        if (valor_debitado === undefined) {
            return false
        }
        clienteCreditar.creditar(valorTransferir)
        return true
    }

    
    public get saldo() : number {
        return this._saldo
    }
    public set saldo(v : number) {
        this._saldo = v;
    }
    
    
    public get clienteTitular() : Cliente {
        return this._clienteTitular
    }
    public set clienteTitular(v : Cliente) {
        this._clienteTitular = v;
    }
    
    public get dataCriacaoConta() : string {
        return this._dataCriacaoConta
    }
    public set dataCriacaoConta(v : string) {
        this._dataCriacaoConta = v;
    }
}