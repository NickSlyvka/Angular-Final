import { Component, Input } from '@angular/core';
import { Posts } from 'src/app/_models/posts.model';

@Component({
    selector: 'post-data',
    templateUrl: 'post.component.html',
    styleUrls: ['./post.component.css']
})

export class PostComponent {
    @Input() post: Posts;
    constructor() {}
}