import { Component } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [NavBarComponent, FooterComponent, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  mostrar = false;

  selecionado = false;

  toggleSelecionado() {
    this.selecionado = !this.selecionado;

    console.log(this.selecionado);
  }

  

  toggle() {
    this.mostrar = !this.mostrar;
    console.log(this.mostrar)
  }

  constructor(private router: Router){
  }

  isActive = false; // Initial state

  toggleIcon() {
    this.isActive = !this.isActive; // Toggle state

  }
  resgiterSucefull(){
    this.router.navigate([""]);
  }
}

//verify if the two passwords are the same