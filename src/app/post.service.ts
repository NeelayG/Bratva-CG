import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Post } from './post';
  
@Injectable({
  providedIn: 'root'
})
export class PostService {
    
  private url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private httpClient: HttpClient) { }
  
  public getPosts(): Observable<any>{
    return this.httpClient.get<any>(this.url);
  }

  public saveRecords(post: any): Observable<any>{
    return this.httpClient.post<any>(this.url, post);
  }
  
}
