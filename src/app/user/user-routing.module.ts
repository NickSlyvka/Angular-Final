import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages';
import { RegisterComponent } from './pages';
import { LoginSocialGuard } from './pages/login/login-social/login-social.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'register', 
    component: RegisterComponent, 
    canActivate: [LoginSocialGuard],
    data: {
      breadcrumb: "Register"
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
