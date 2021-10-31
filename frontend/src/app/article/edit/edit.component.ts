import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ArticleService } from '../article.service';
import { Article } from '../article';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  article: Article;
  form: FormGroup;


  constructor(
    public articleService: ArticleService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idArticle'];
    this.articleService.find(this.id).subscribe((data: Article)=>{
      this.article = data;
    });


this.form = new FormGroup({
  topic:  new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
  description: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ]),
  categorie: new FormControl('', [ Validators.required, Validators.pattern('^[a-zA-ZÁáÀàÉéÈèÍíÌìÓóÒòÚúÙùÑñüÜ \-\']+') ])
});

}
get f(){
  return this.form.controls;
}
submit(){
  console.log(this.form.value);
  this.articleService.update(this.id, this.form.value).subscribe(res => {
       console.log('Person updated successfully!');
       this.router.navigateByUrl('article/index');
  })
}
}
