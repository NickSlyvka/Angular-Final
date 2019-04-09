import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent, PostDetailsComponent, PostDetailComponent, PostComponent } from './pages';
import { FormsModule } from '@angular/forms';
import { CapitalizeFirstPipe } from '../_pipes/capitalizefirst.pipe';

@NgModule({
  declarations: [
    PostsComponent,
    PostComponent,
    PostDetailsComponent,
    PostDetailComponent,
    CapitalizeFirstPipe
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    PostComponent
  ]
})
export class PostsModule { }
