import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespostaDolar, RespostaEuro } from './types/moedas';

@Injectable({
  providedIn: 'root'
})
export class FinanceiroService {

  private readonly dolarAPI = 'https://economia.awesomeapi.com.br/json/last/USD-BRL';
  private readonly euroAPI = 'https://economia.awesomeapi.com.br/json/last/EUR-BRL';

  constructor(private http:HttpClient) { }

  getCotacaoDolar(): Observable<RespostaDolar>{
    return this.http.get<RespostaDolar>(this.dolarAPI);
  }
  getCotacaoEuro(): Observable<RespostaEuro>{
    return this.http.get<RespostaEuro>(this.euroAPI);
  }
}
