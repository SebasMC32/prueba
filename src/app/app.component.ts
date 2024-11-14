import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CityComponent } from './components/city/city.component';
import { ActivityComponent } from './components/activity/activity.component';
import { UsersComponent } from './components/users/users.component';
import { FloraComponent } from './components/flora/flora.component';
import { FaunaComponent } from './components/fauna/fauna.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CityComponent,ActivityComponent,UsersComponent,FloraComponent,FaunaComponent,MatToolbarModule,
    RouterLink,
    MatMenuModule,
    MatIconModule,
    MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TripBundleProject';
}
