import { Component, OnInit } from '@angular/core';
import { RespostaDolar, RespostaEuro } from '../../services/types/moedas';
import { FinanceiroService } from '../../services/financeiro.service';

@Component({
  selector: 'app-autorizar-emprestimo',
  standalone: true,
  imports: [],
  templateUrl: './autorizar-emprestimo.component.html',
  styleUrl: './autorizar-emprestimo.component.css'
})
export class AutorizarEmprestimoComponent implements OnInit {
  cotacoesDolar?: RespostaDolar;
  cotacoesEuro?: RespostaEuro;

  constructor(private financeiroService: FinanceiroService) {}

  ngOnInit(): void {
    this.financeiroService.getCotacaoDolar().subscribe(dadosDolar => {
      this.cotacoesDolar = dadosDolar;
      let dolarMensagem = "Dólar hoje:"+ dadosDolar.USDBRL.bid;
    })

    this.financeiroService.getCotacaoEuro().subscribe(dadosEuro => {
      this.cotacoesEuro = dadosEuro;
      let euroMensagem = "Euro hoje:" + dadosEuro.EURBRL.bid;
    })
  }
}

