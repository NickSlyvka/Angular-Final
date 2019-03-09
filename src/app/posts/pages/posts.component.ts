import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  newTitle: string = 'Posts'
  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle(this.newTitle);
  }

}
