import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comments } from '../_models/comments.model';
import { Posts } from '../_models/posts.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class PostsService {
    private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    private commentsUrl = 'https://jsonplaceholder.typicode.com/comments?postId=';

    constructor(private http: HttpClient) {}

    getPosts(): Observable<Posts[]> {
        return this.http.get<Posts[]>(this.postsUrl);
    }

    getPost(id: number): Observable<Posts> {
        return this.getPosts().pipe(
            map((posts: Posts[]) => posts.find(p => p.id === id))
        );
    }

    getComments(id: number): Observable<Comments[]> {
        return this.http.get<Comments[]>(this.commentsUrl+id)
    }

    postComments(comment: Comments) {
        const body = {body: comment.body};
        return this.http.post('https://my-json-server.typicode.com/typicode/demo/comments', body);
    }
}