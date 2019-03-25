import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/_models/posts.model';
import { Comments } from 'src/app/_models/comments.model';
import { PostsService } from 'src/app/_services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  private id;
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

  // next(param: number) {
  //   param +=1;
  //   this.routes.navigate(['/posts']);
  // }

  // nextPost(id: number) {
  //   this.routes.navigate(['/posts', id+1]);
  // }

  comment: Comments = new Comments();

  // newComment: Comments;

  getPost(id: number) {
    this.postsService.getPost(id).subscribe(
      post => this.post = post
    )
  }

  commentSend(comment: Comments) {
    this.postsService.postComments(comment).subscribe(
      (data: Comments) => {
        console.log(data);
        this.comments.push(data);
        // this.newComment = data
      }
    )
  }

  onBack() {
    this.routes.navigate(['/']);
  }

}
