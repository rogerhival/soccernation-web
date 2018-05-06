import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamsComponent, TeamDetailComponent, LoginComponent, UserComponent } from './pages';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Api } from './services/api/api';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamDetailComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
