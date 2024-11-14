import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-fauna',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './fauna.component.html',
  styleUrl: './fauna.component.css'
})
export class FaunaComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
