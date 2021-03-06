
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class ArticleService {
  constructor(private httpClient: HttpClient) { }

  async getArticles() {
    console.log(this.httpClient.get(environment.drupal.articles));
    return this.httpClient.get(environment.drupal.articles);
  }
}
