import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { NavBarComponent } from "../../components/nav-bar/nav-bar.component";
import { CommonModule } from '@angular/common';
import { Route, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [NavBarComponent, CommonModule, RouterModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {

  constructor(private router : Router){}

  newTaskDay(){
    this.router.navigate(['/tasks/new']);
  }

  @Output() cTask = new EventEmitter<void>();

  closeTask(){
    this.cTask.emit();
  }

}
