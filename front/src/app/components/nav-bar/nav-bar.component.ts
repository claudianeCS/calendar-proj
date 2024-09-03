import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
;

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  rotaAtual:string = "";

  constructor(private router: Router, private route : ActivatedRoute){}

  ngOnInit() {
    this.verificarRota();
    console.log(this.router.url);
  } 

  verificarRota() {
      this.rotaAtual = this.router.url
  }
 
}
