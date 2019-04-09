import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/_models/posts.model';
import { Comments } from 'src/app/_models/comments.model';
import { Router } from '@angular/router';
import { PostsService } from 'src/app/_services/posts.service';

@Component({
    selector: 'post-detail',
    templateUrl: './post-detail.component.html',
    styleUrls: ['./post-detail.component.css'],
})

export class PostDetailComponent {
    @Input() post: Posts;
    @Input() comments: Comments[] = [];

    comment: Comments = new Comments();

    constructor(private router: Router,
                private postsService: PostsService) {}

    commentSend(comment: Comments) {
        this.postsService.postComments(comment).subscribe(
          (data: Comments) => {
            console.log(data);
            this.comments.push(data);
          }
        )
      }
    onBack() {
        this.router.navigate(['/']);
      }
    
}