import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route)

  ],
  declarations: [LandingpageComponent, LoginComponent]
})
export class RegistrationModule { }
