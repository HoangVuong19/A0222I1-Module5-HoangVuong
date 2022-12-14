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
import { DictionayPageComponent } from './dictionay-page/dictionay-page.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';

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
    DictionaryDetailComponent
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
