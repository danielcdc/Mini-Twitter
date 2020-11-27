import { Component, OnInit } from '@angular/core';
import { SignUpDto } from '../dto/signup.dto';
import { RegisterService } from '../services/register.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registro : SignUpDto;
  
  constructor(private signUpService: RegisterService) {
     this.registro = new SignUpDto("", "", "");
   }

  ngOnInit(): void {
  }

  doSignUp(){
      this.signUpService.signUp(this.registro).subscribe(respuesta => {
      alert("API Token" + respuesta.token);
      alert(`${this.registro.username} dado de alta.`)
    });
  }

}
