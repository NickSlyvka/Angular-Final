import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user.model';

@Injectable({
    providedIn: 'root'
})

export class UsersService {
    constructor(private http: HttpClient) {}

    private registerUrl = "https://reqres.in/api/users";

    postUser(user: User) {
        const body = {name: user.name, email: user.email, password: user.password, confirmPassword: user.confirmPassword}
        return this.http.post(this.registerUrl, body);
    }
}