import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
