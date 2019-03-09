import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages/posts.component';
import { PostDetailsComponent } from './pages/post-details/post-details.component';

const routes: Routes = [
  { path: '', component: PostsComponent, 
    children : [
      { path: 'post/:id', component: PostDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
