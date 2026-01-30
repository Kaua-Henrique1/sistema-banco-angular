import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { Corrente } from "./corrente_conta";
import { Poupanca } from "./poupanca_conta";

export class Funcionario {
    _cliente: Cliente
    _conta: Conta

    constructor(cliente: Cliente, conta: Conta) {
        this._cliente = cliente
        this._conta = conta
    }

    criar_conta(cliente: Cliente, saldo_inicial: number, escolha_conta: number) {
        if (escolha_conta == 0) {
            new Poupanca(cliente, saldo_inicial)       
        } else {
            new Corrente(cliente, saldo_inicial)       
        }
    }

    autorizar_emprestimo(cliente: Cliente, valor_empresto: number) {
        const renda_bruta_30 = (cliente.renda_bruta * 0.3) 
        if (valor_empresto <= renda_bruta_30) {
            return true
        }
        return false
    }

    realizar_emprestimo(cliente: Cliente, valor_empresto: number) {
        let isTrue = this.autorizar_emprestimo(cliente, valor_empresto)  
        if (!isTrue) {
            return false
        }
        if (this.conta.cliente_titular == cliente) {
        }

    }
    
    public set cliente(v : Cliente) {
        this._cliente = v;
    }
    public get cliente() : Cliente {
        return this._cliente
    }
    
    public set conta(v : Conta) {
        this._conta = v;
    }
    public get conta() : Conta {
        return this._conta
    }
}