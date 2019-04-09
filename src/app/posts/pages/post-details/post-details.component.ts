import { Component, OnInit, Input } from '@angular/core';
import { Posts } from 'src/app/_models/posts.model';
import { Comments } from 'src/app/_models/comments.model';
import { PostsService } from 'src/app/_services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  template: `
  <div class="container">
    <div class="row">
        <div class='col-md-8 offset-md-2'>
          <post-detail [post]="post" [comments]="comments"></post-detail>            
        </div>        
    </div>
</div>`
})
export class PostDetailsComponent implements OnInit {
  post: Posts;
  comments: Comments[] = [];

  constructor(private postsService: PostsService,
              private route: ActivatedRoute,
              private routes: Router) { }

  ngOnInit() {
    // const param = this.route.snapshot.paramMap.get('id');
    this.route.params.subscribe(params => {
      const param = params['id']; 
      if (param) {
        const id = +param;
        this.getPost(id);
        this.postsService.getComments(id).subscribe(
          c => this.comments = c
        );            
      }
    })    
  }  

  getPost(id: number) {
    this.postsService.getPost(id).subscribe(
      post => this.post = post
    )
  }  

  // onBack() {
  //   this.routes.navigate(['/']);
  // }

}
