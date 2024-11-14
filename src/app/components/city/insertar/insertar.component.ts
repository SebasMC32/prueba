import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { City } from '../../../models/City';
import { CityService } from '../../../services/city.service';
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
export class InsertarCityComponent {
  form: FormGroup = new FormGroup({});
  city: City = new City();
  id: number = 0;
  edicion: boolean = false;

  listaProvincias: { value: string; viewValue: string }[] = [
    { value: 'Amazonas', viewValue: 'Amazonas' },
    { value: 'Cusco', viewValue: 'Cusco' },
    { value: 'Lima', viewValue: 'Lima' },
    { value: 'Lambayeque', viewValue: 'Lambayeque' },
    { value: 'Piura', viewValue: 'Piura' },
  ];
  listaDepartamentos: { value: string; viewValue: string }[] = [
    { value: 'Amazonas', viewValue: 'AMAZONAS' },
    { value: 'Cusco', viewValue: 'CUSCO' },
    { value: 'Lima', viewValue: 'LIMA' },
    { value: 'Lambayeque', viewValue: 'LAMBAYEQUE' },
    { value: 'Piura', viewValue: 'PIURA' },
  ];
  constructor(
    private cS: CityService,
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
      hdepartamento: ['', Validators.required],
      hlatitud: ['', Validators.required],
      hlongitud: ['', Validators.required],
      hprovincia: ['', Validators.required],
      
    });
  }
  insertar(): void {
    if (this.form.valid) {
      this.city.idCity = this.form.value.hcodigo;
      this.city.nameCity = this.form.value.hnombre;
      this.city.departmentCity = this.form.value.hdepartamento;
      this.city.latitudeCity = this.form.value.hlatitud;
      this.city.lengthCity = this.form.value.hlongitud;
      this.city.provinceCity = this.form.value.hprovincia;
      
      if (this.edicion) {
        //update
        this.cS.update(this.city).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      } else {
        //insert
        this.cS.insert(this.city).subscribe((data) => {
          this.cS.list().subscribe((data) => {
            this.cS.setList(data);
          });
        });
      }

      /**/
    }
    this.router.navigate(['ciudades']);
  }
  init() {
    if (this.edicion) {
      this.cS.listId(this.id).subscribe((data) => {
        this.form = new FormGroup({
          hcodigo: new FormControl(data.idCity),
          hnombre: new FormControl(data.nameCity),
          hdepartamento: new FormControl(data.departmentCity),
          hlatitud: new FormControl(data.latitudeCity),
          hlongitud: new FormControl(data.lengthCity),
          hprovincia: new FormControl(data.provinceCity),
          
        });
      });
    }
  }
}
