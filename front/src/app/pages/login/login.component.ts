import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { Router } from '@angular/router';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FooterComponent, NavBarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router : Router){}

  goRegisterPage(){
    this.router.navigate(['register']);
  }
}
