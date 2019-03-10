import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PostsService } from 'src/app/_services/posts.service';
import { Posts } from 'src/app/_models/posts.model';
import { Comments } from 'src/app/_models/comments.model';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Posts[] = [];
  comments: Comments[] = [];

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
