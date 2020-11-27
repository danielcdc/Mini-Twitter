
import { Component, OnInit } from '@angular/core';
import { LoginDto } from '../dto/login.dto';
import { AuthService } from '../services/auth.service';
<<<<<<< HEAD
=======

>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: LoginDto;
<<<<<<< HEAD
  constructor(private authService: AuthService) {
    this.usuario = new LoginDto("","");
   }

  ngOnInit(): void {
  }

  /**
   * Llama a un servicio que mande la petición de login a la API.
   */
  doLogin(){
    this.authService.login(this.usuario).subscribe(respuesta => {
      alert("API Token" + respuesta.token);
    });
  }

=======
  
  constructor(private authService: AuthService) { 
    this.usuario = new LoginDto('', '');
  }

  ngOnInit(): void {
  }
  doLogin() {
    // Llamar a un servicio que mande la petición de login
    // a la API.
    this.authService.login(this.usuario).subscribe(respuesta => {
        alert('API TOKEN ' + respuesta.token);
    });
  }
>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8
}

