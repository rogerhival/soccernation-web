import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent, TeamDetailComponent, LoginComponent, UserComponent, CompetitionComponent, CompetitionDetailComponent } from './pages';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // default route if empty like "http://localhost:4200"
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'team', component: TeamComponent },
  { path: 'teamDetail/:id', component: TeamDetailComponent },
  { path: 'competition', component: CompetitionComponent },
  { path: 'competitionDetail/:id', component: CompetitionDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {
}
