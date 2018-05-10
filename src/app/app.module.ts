import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TeamComponent, TeamDetailComponent, LoginComponent, UserComponent, CompetitionComponent, CompetitionDetailComponent, StandingsComponent, CompetitionFormComponent } from './pages';
import { HomeComponent, CompanyComponent } from './pages';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Api } from './services/api/api';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TeamComponent,
    TeamDetailComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,
    CompetitionComponent,
    CompetitionDetailComponent,
    CompetitionFormComponent,
    StandingsComponent,
    CompanyComponent
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
