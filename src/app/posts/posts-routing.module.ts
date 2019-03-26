import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './pages';
import { PostDetailsComponent, PostDetailsGuard } from './pages';

const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: '', redirectTo: 'posts', pathMatch: 'full'},
  { path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostDetailsGuard] }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
