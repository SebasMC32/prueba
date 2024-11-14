import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Flora } from '../../../models/Flora';
import { FloraService } from '../../../services/flora.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insertar',
  standalone: true,
  imports: [MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatButtonModule,
    CommonModule],
  templateUrl: './insertar.component.html',
  styleUrl: './insertar.component.css'
})
export class InsertarFloraComponent {
  form: FormGroup = new FormGroup({});
  flora: Flora = new Flora();
  id: number = 0;
  edicion: boolean = false;

  constructor(
    private fS: FloraService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {
      this.id = data['id'];
      this.edicion = data['id'] > 0;
      this.init();
    });

    this.form = this.formBuilder.group({
      hcodigo: [''],
      hnombre: ['', Validators.required],
      hespecie: ['', Validators.required],
      hfamilia: ['', Validators.required],
      hlatitud: ['', Validators.required],
      hlongitud: ['', Validators.required],
      hestado: ['', Validators.required],
      
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.flora.idFlora = this.form.value.hcodigo;
      this.flora.nameFlora = this.form.value.hnombre;
      this.flora.spicieFlora = this.form.value.hespecie;
      this.flora.famimlyFlora = this.form.value.hfamilia;
      this.flora.latitudeFlora = this.form.value.hlatitud;
      this.flora.lengthFlora = this.form.value.hlongitud;
      this.flora.stateFlora = this.form.value.hestado;
      
      if (this.edicion) {
        //update
        this.fS.update(this.flora).subscribe((data) => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      } else {
        //insert
        this.fS.insert(this.flora).subscribe((data) => {
          this.fS.list().subscribe((data) => {
            this.fS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['floras']);
  }
  init() {
    if (this.edicion) {
      this.fS.listId(this.id).subscribe((data) => {
        console.log(data);
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idFlora),
          hnombre: new FormControl(data.nameFlora),
          hespecie: new FormControl(data.spicieFlora),
          hfamilia: new FormControl(data.famimlyFlora),
          hlatitud: new FormControl(data.latitudeFlora),
          hlongitud: new FormControl(data.lengthFlora),
          hestado: new FormControl(data.stateFlora),
          
        });
      });
    }
  }
}
