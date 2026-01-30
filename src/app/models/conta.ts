import { Cliente } from "./cliente"

export abstract class Conta {
    protected _saldo: number
    protected _cliente_titular: Cliente
    protected _data_criacao_conta: Date

    constructor(cliente_titular: Cliente, data_criacao_conta: Date) {
        this._saldo = 0
        this._cliente_titular = cliente_titular
        this._data_criacao_conta = data_criacao_conta
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