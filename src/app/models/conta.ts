import { Cliente } from "./cliente"

export abstract class Conta {
    protected _saldo: number
    protected _cliente_titular: Cliente
    protected _data_criacao_conta: Date

    constructor(cliente_titular: Cliente, saldo: number) {
        this._saldo = saldo || 0 
        this._cliente_titular = cliente_titular
        this._data_criacao_conta = new Date()
    }

    protected consultar_saldo(): number {
        return this.saldo
    }

    protected creditar(valor: number) {
        if (valor <= 0) {
            return;
        }
        this.saldo += valor
    }

    protected debitar(valor: number) {
        let saldo_atual = this.consultar_saldo()

        if (saldo_atual < valor) {
            return undefined
        }
        this.saldo -= valor
        return true
    }

    protected trasferir(cliente_creditar: Conta, valor_transferir: number) {
        let valor_debitado = this.debitar(valor_transferir)
        if (valor_debitado = undefined) {
            return false
        }
        cliente_creditar.creditar(valor_transferir)
        return true
    }

    
    public get saldo() : number {
        return this._saldo
    }
    public set saldo(v : number) {
        this._saldo = v;
    }
    
    
    public get cliente_titular() : Cliente {
        return this._cliente_titular
    }
    public set cliente_titular(v : Cliente) {
        this._cliente_titular = v;
    }
    
    public get data_criacao_conta() : Date {
        return this._data_criacao_conta
    }
    public set data_criacao_conta(v : Date) {
        this._data_criacao_conta = v;
    }
}