import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ArticleService } from '../article.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  constructor(
    public articleService: ArticleService,
    private router: Router
  ) { }

  ngOnInit(): void {

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
    this.articleService.create(this.form.value).subscribe(res => {
         console.log('Article created successfully!');
         this.router.navigateByUrl('article/index');
    })
  }
}
