import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-flora',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './flora.component.html',
  styleUrl: './flora.component.css'
})
export class FloraComponent {
  constructor(public route:ActivatedRoute){
   
  }
}
