import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { Router, RouterModule } from '@angular/router';
import { NewTaskComponent } from "../new-task/new-task.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule ,FooterComponent, NavBarComponent, RouterModule, NewTaskComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router : Router){}

  isVisible = false;

  createANewTask(){
    this.isVisible = true;
  }

}


