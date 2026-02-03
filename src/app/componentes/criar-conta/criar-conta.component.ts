import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../models/cliente';
import { Corrente } from '../../models/correnteConta';
import { Poupanca } from '../../models/poupancaConta';
import { Funcionario } from '../../models/funcionario';
import { TipoConta } from '../../models/tipoConta';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent {
  nome = "";
  cpf = 0;
  saldo = 0;
  dataNascimento: string = '';
  rendaBruta = 0;
  telefone: number = 0;
  tipoConta = TipoConta;
  tipoContaValida: TipoConta | null = null;

  selecionarTipo(tipo: TipoConta) {
    this.tipoContaValida = tipo;
  }

  formularioValido(): boolean {
    return (
      this.nome.trim().length > 3 &&
      this.cpf.toString().length >= 11 &&
      this.rendaBruta > 0 &&
      this.dataNascimento !== '' &&
      this.tipoContaValida !== null
    );
  }
  criarContaComponente() {
    const novoCliente = new Cliente(this.nome, this.dataNascimento, this.rendaBruta, this.cpf, this.telefone)

    const cc = new Corrente(novoCliente, 0);
    const cp = new Poupanca(novoCliente, 0);

    const botFuncionario = new Funcionario(novoCliente, cc, cp);

    const contaFinal = botFuncionario.criarConta(novoCliente, this.rendaBruta, this.tipoContaValida!);

    console.log('Conta criada com sucesso pelo funcionário:', contaFinal);
    alert(`Conta ${this.tipoContaValida} criada para ${novoCliente.nome}!`);
  }
}

