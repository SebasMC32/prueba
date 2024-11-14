import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { ListarComponent } from './listar/listar.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [RouterOutlet,ListarComponent],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent {
constructor(public route:ActivatedRoute){
   
}
}
