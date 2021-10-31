import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [IndexComponent, CreateComponent, EditComponent],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    ArticleRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatAutocompleteModule
  ]
})
export class ArticleModule { }
