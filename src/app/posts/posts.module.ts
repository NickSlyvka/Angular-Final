import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent, PostDetailsComponent } from './pages';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PostsComponent,
    PostDetailsComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ]
})
export class PostsModule { }
