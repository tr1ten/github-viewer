import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DisplayErrorComponent } from './display-error/display-error.component';
import { LoadingComponent } from './loading/loading.component';
import { DisplayReposComponent } from './display-repos/display-repos.component';
import { GithubButtonModule } from 'ng-github-button';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    DisplayErrorComponent,
    LoadingComponent,
    DisplayReposComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    GithubButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
