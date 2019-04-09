import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from 'src/app/_services/posts.service';
import { Posts } from 'src/app/_models/posts.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html'
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];

  postId: number = 1;
  postTitle: string = 'Hello';

  newTitle: string = 'Posts'
  constructor(private title: Title,
              private postsService: PostsService) { }

  ngOnInit() {
    this.title.setTitle(this.newTitle);
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts)
    })
  }
  
}