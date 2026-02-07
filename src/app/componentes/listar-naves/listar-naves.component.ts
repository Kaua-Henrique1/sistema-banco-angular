import { Component, OnInit } from '@angular/core';
import { Naves } from '../../services/types/naves';
import { NavesServiceService } from '../../services/naves-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-listar-naves',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-naves.component.html',
  styleUrl: './listar-naves.component.css'
})
export class ListarNavesComponent implements OnInit {

  listaNaves: Naves[] = [];

  constructor(private service: NavesServiceService) { }

  ngOnInit(): void {
    this.service.buscarNaves().subscribe((dadosApi: any) => {
      this.listaNaves = dadosApi.results.map((item: any) => this.listaTratamento(item));

      console.log(this.listaNaves); // Para você testar no F12
    });
  }

  listaTratamento(data: any): Naves {
    const urlParts = data.url.split('/');
    const idExtraido = urlParts[urlParts.length - 2];

    return {
      id: Number(idExtraido),
      modelo: data.model,
      descricao: `${data.starship_class} - ${data.manufacturer}`,
      max_velocidade: data.max_atmosphering_speed,
      equipe: data.crew,
      valor_creditos: data.cost_in_credits
    };
  }
}