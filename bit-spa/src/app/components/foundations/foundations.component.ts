import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { Credentials } from '../../interfaces/credentials';

@Component({
  selector: 'app-foundations',
  imports: [],
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.css'
})

export class FoundationsComponent {
  ooss = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  evitarEnvio: boolean = true;
  urlImagen: string =
    'https://bitinstitute.co/cms/wp-content/uploads/bit-logo.svg';
  colorFondo: string = 'cf-rojo';
  frameworkFavorito: string = '';

  manejarClick() {
    console.log('Hiciste click');
  }

  manejarMouseover() {
    this.colorFondo = 'cf-amarillo';
  }

  manejarMouseleave() {
    this.colorFondo = 'cf-naranja';
  }

  mostrarFrameworkFavorito() {
    console.log(this.frameworkFavorito);
  }

  formLogin = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(''),
  });


manejarLogin() {
  const usuario = this.formLogin.value.usuario;
  const contrasenia = this.formLogin.value.contrasenia;
  if (typeof usuario === 'string' && typeof contrasenia === 'string') {
    const credenciales: Credentials = {
      nombreUsuario: usuario,
      contrasenia: contrasenia,
    };
    console.log('credenciales:', credenciales);
  }
}
}


