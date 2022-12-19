import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ColorComponent } from './color/color.component';
import { ArticleComponent } from './hackernews/article/article.component';
import { LikeComponent } from './hackernews/like/like.component';
import { CountdownComponent } from './countdown/countdown.component';
import { RegisterComponent } from './register/register.component';
import { DictionayPageComponent } from './dictionary/dictionay-page/dictionay-page.component';
import { DictionaryDetailComponent } from './dictionary/dictionary-detail/dictionary-detail.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { TodoComponent } from './todo/todo.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ColorComponent,
    ArticleComponent,
    LikeComponent,
    CountdownComponent,
    RegisterComponent,
    DictionayPageComponent,
    DictionaryDetailComponent,
    ProductListComponent,
    ProductCreateComponent,
    TodoComponent,
    ProductEditComponent,
    ProductDeleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
