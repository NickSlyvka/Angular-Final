import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostsService } from 'src/app/_services/posts.service';

@Injectable({
  providedIn: 'root'
})
export class PostDetailsGuard implements CanActivate {
  
  constructor(private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean  {
    const id = +next.url[1].path;

    if (id <= 100) {      
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }
}
