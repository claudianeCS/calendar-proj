import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [NavBarComponent, CommonModule, RouterModule],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {


  horarios: string[] = [];

  constructor() {}

  ngOnInit(): void {
    this.gerarHorarios();
  }

  gerarHorarios(): void {
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 60) {
        const horaFormatada = ('0' + hour).slice(-2); // Formata horas para 2 dígitos
        const minutoFormatado = ('0' + minute).slice(-2); // Formata minutos para 2 dígitos
        this.horarios.push(`
          ${horaFormatada}:${minutoFormatado}
          `);
      }
    }
  }
}
