import { Component, OnInit } from '@angular/core';
import { FinanceiroService } from '../../services/financeiro.service';
import { RespostaDolar, RespostaEuro } from '../../services/types/moedas';

@Component({
  selector: 'app-criar-conta',
  standalone: true,
  imports: [],
  templateUrl: './criar-conta.component.html',
  styleUrl: './criar-conta.component.css'
})
export class CriarContaComponent implements OnInit {
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
