import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { AboutComponent, ContactComponent } from './pages';


@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule   
  ]
})
export class HomeModule { }
