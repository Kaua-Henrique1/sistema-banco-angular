import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NavesServiceService } from '../../services/naves-service.service';

@Component({
  selector: 'app-detalhes-nave',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalhes-nave.component.html',
  styleUrl: './detalhes-nave.component.css'
})
export class DetalhesNaveComponent implements OnInit {

  nave: any = null; // Guardará os dados da nave específica
  id: string | null = '';

  constructor(private route: ActivatedRoute, private service: NavesServiceService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    if(this.id) {
      this.service.buscarNavePorId(Number(this.id)).subscribe((dados) => {
        this.nave = dados;
      });
    }
  }
}
