import { Component, OnInit } from '@angular/core';
import { Fauna } from '../../../models/Fauna';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'
import { FaunaService } from '../../../services/fauna.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [MatTableModule, MatIconModule,RouterModule],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  datasource: MatTableDataSource<Fauna> = new MatTableDataSource();
  displayedColumns: string[] = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'accion01','accion02'];

  constructor(private fS: FaunaService) {}
  ngOnInit(): void {
    this.fS.list().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
    this.fS.getList().subscribe((data) => {
      this.datasource = new MatTableDataSource(data);
    });
  }

  delete(id: number) {
    this.fS.delete(id).subscribe((data) => {
      this.fS.list().subscribe((data) => {
        this.fS.setList(data);
      });
    });
  }
}
