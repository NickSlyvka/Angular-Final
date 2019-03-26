import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent, ContactComponent } from './pages';

const routes: Routes = [
  { path: 'about', 
    component: AboutComponent,
    data: {
      breadcrumb: 'About'
    } 
  },
  { path: 'contact', 
    component: ContactComponent,
    data: {
      breadcrumb: 'Contact'
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
