import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingpageComponent } from './pages/landingpage/landingpage.component';
import { RouterModule } from '@angular/router';
import {route} from './routes';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InterviewerregistrationComponent } from './pages/interviewerregistration/interviewerregistration.component';
import { AdminregistrationComponent } from "./pages/adminregistration/adminregistration.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(route)
  ],
  declarations: [LandingpageComponent, LoginComponent, InterviewerregistrationComponent,AdminregistrationComponent]

})
export class RegistrationModule { }
