import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  onSubmit(form: NgForm) {
    console.log('Form Submitted!', form.value);
    // Aquí podrías enviar los datos a un servicio para autenticar al usuario
  }

}
