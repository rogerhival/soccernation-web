import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent, TeamDetailComponent, LoginComponent, UserComponent, CompetitionComponent, CompetitionDetailComponent, StandingsComponent, CompetitionFormComponent, HomeComponent, FixtureGenerateComponent } from './pages';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyComponent } from './pages';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default route if empty like "http://localhost:4200"
  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'team', component: TeamComponent },
  { path: 'teamDetail/:id', component: TeamDetailComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'competitionDetail/:id', component: CompetitionDetailComponent },
  { path: 'competitionForm', component: CompetitionFormComponent },
  { path: 'standings/:idCompetition', component: StandingsComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'fixtureGenerate/:idCompetition', component: FixtureGenerateComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
