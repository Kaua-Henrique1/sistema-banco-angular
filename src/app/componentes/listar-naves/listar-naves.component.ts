import { Component } from '@angular/core';
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
export class ListarNavesComponent{
  listaNaves: any[] = []; 

  constructor(private service: NavesServiceService) { }

  // Esta função só roda quando clicar no botão
  buscarNaves() {
    this.service.buscarNaves().subscribe(
      (dadosApi: any) => {
        this.listaNaves = dadosApi.results.map((item: any) => this.mapToNave(item));
      },
      (erro) => {
        console.error('Erro ao buscar naves', erro);
      }
    );
  }

  mapToNave(data: any) {
    const urlParts = data.url.split('/');
    const idExtraido = urlParts[urlParts.length - 2];
    return {
      id: Number(idExtraido),
      modelo: data.model,
      descricao: data.manufacturer
    };
  }
}