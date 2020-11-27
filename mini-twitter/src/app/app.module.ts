import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
=======
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import {FormsModule} from '@angular/forms';
>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8

// Angular Material
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
<<<<<<< HEAD
import { AuthService } from './services/auth.service';
import { SignUpComponent } from './sign-up/sign-up.component';
=======
import { SignupComponent } from './signup/signup.component';

>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
<<<<<<< HEAD
    SignUpComponent
=======
    SignupComponent
>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
<<<<<<< HEAD
    FlexLayoutModule,
    FormsModule,
    HttpClientModule
=======
    HttpClientModule,
    FormsModule
>>>>>>> c1bc0cdfe98ba4794c65cb6af83115c47908eed8
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
