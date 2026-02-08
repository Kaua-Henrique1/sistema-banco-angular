import { CommonModule } from '@angular/common';
import { Component, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavesServiceService } from '../../services/naves-service.service';
import { Naves } from '../../services/types/nave';

@Component({
  selector: 'app-detalhes-nave',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhes-nave.component.html',
  styleUrl: './detalhes-nave.component.css'
})
export class DetalhesNaveComponent implements OnInit {
  nave = signal<Naves | null>(null);
  imagemUrl = signal<string>('');

  private imagensNaves: Record<string, string> = {
    '2': 'CR90.jpg',
    '3': 'imperial-star-destroyer.jpeg',
    '5': 'Sentinel-class-landing.jpeg',
    '9': 'Orbital-Battle-Station .jpg',
    '10': 'YT-1300-light-freighter.jpeg',
    '11': 'BTL Y-wing.jpg',
    '12': 'T-65 X-wing.jpeg',
    '13': 'Twin-Ion-Engine-Advanced-x1.jpeg',
    '15': 'Executor-class-star-rdreadnought.jpg',
    '17': 'GR-75-medium-transport.jpeg'
  };

  constructor(private route: ActivatedRoute, private service: NavesServiceService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];

      const nomeArquivo = this.imagensNaves[id];
      if (nomeArquivo) {
        this.imagemUrl.set('/image-naves/' + nomeArquivo);
      }

      this.service.buscarNavePorId(id).subscribe((dadosApi: any) => {
        const naveFormatada: Naves = {
          id: id,
          modelo: dadosApi.model,
          descricao: `${dadosApi.starship_class} - ${dadosApi.manufacturer}`,
          max_velocidade: dadosApi.max_atmosphering_speed,
          equipe: dadosApi.crew,
          valor_creditos: dadosApi.cost_in_credits
        };

        this.nave.set(naveFormatada);
      });
    });
  }

  formatarValor(valor: string): string {
    const numeroLimpo = valor.replace(/,/g, '');
    const numero = Number(numeroLimpo);

    if (isNaN(numero)) return valor;

    return numero.toLocaleString('pt-BR');
  }
}