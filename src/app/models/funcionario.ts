import { Cliente } from "./cliente";
import { Conta } from "./conta";
import { Corrente } from "./correnteConta";
import { Poupanca } from "./poupancaConta";
import { TipoConta } from "./tipoConta";

export class Funcionario {
    _cliente: Cliente
    _contaCorrente: Corrente
    _contaPoupanca: Poupanca

    constructor(cliente: Cliente, corrente: Corrente, poupanca: Poupanca) {
        this._cliente = cliente
        this._contaCorrente = corrente
        this._contaPoupanca = poupanca
    }

    criarConta(cliente: Cliente, saldoInicial: number, escolhaConta: TipoConta) {
        let novaContaCorrente;
        let novaContaPoupanca;
        if (escolhaConta == TipoConta.CORRENTE) {
            novaContaCorrente = new Corrente(cliente, saldoInicial)       
        } else {
            novaContaPoupanca = new Poupanca(cliente, saldoInicial)       
        }

        if (novaContaCorrente == null) {
            return novaContaPoupanca
        } else {
            return novaContaCorrente
        }
    }

    autorizarEmprestimo(cliente: Cliente, valorEmpresto: number) {
        const renda_bruta_30 = (cliente.renda_bruta * 0.3) 
        if (valorEmpresto <= renda_bruta_30) {
            return true
        }
        return false
    }

    realizarEmprestimo(contaDestino: Conta, valorEmpresto: number) {
        let cliente = contaDestino.clienteTitular

        let isTrue = this.autorizarEmprestimo(cliente, valorEmpresto)  
        if (isTrue) {
            contaDestino.creditar(valorEmpresto)
            return true
        }
        return false
    }
    
    public set cliente(v : Cliente) {
        this._cliente = v;
    }
    public get cliente() : Cliente {
        return this._cliente
    }
    
    public set poupanca(v : Poupanca) {
        this._contaPoupanca = v;
    }
    public get poupanca() : Poupanca {
        return this._contaPoupanca
    }

    public set corrente(v : Corrente) {
        this._contaCorrente = v;
    }
    public get corrente() : Corrente {
        return this._contaCorrente
    }

    public set conta(v : Corrente) {
        this._contaCorrente = v;
    }
    public get conta() : Corrente {
        return this._contaCorrente
    }
}