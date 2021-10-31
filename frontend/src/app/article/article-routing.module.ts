import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: 'article', redirectTo: 'article/index', pathMatch: 'full'},
  { path: 'article/index', component: IndexComponent },
  { path: 'article/create', component: CreateComponent },
  { path: 'article/edit/:idArticle', component: EditComponent } 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
