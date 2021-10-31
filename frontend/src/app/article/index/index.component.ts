import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { debounceTime, tap, switchMap, finalize } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  searchArticlesCtrl = new FormControl();
  filteredArticles: any;
  isLoading = false;
  errorMsg: string;
  articles: Article[] = [];
  constructor(public articleService: ArticleService,    private http: HttpClient  ) { }

  ngOnInit(): void {
    this.articleService.getAll().subscribe((data: Article[])=>{
      this.filteredArticles = data;
      console.log(this.articles);
    })
    this.searchArticlesCtrl.valueChanges
    .pipe(
      debounceTime(500),
      tap(() => {
        this.errorMsg = "";
        this.filteredArticles = [];
        this.isLoading = true;
      }),
      switchMap(value => this.http.get("http://127.0.0.1:8000/article/search?search=" + value)
        .pipe(
          finalize(() => {
            this.isLoading = false
          }),
        )
      )
    )
    .subscribe(data => {
      if (data== undefined) {
        this.errorMsg = data['Error'];
        this.filteredArticles = [];
      } else {
        this.errorMsg = "";
        this.filteredArticles = data;
      }

      console.log(this.filteredArticles);
    });
  }
  deleteArticle(id){
    this.articleService.delete(id).subscribe(res => {
         this.filteredArticles = this.filteredArticles.filter(item => item.id !== id);
         console.log('Article deleted successfully!');
    })
  }
 
}
