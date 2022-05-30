import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { AboutMeComponent } from './components/Dashboard/about-me/about-me.component';
import { ExperienceComponent } from './components/Dashboard/experience/experience.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  { path: '', component: HeaderComponent,},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/about-me', component: AboutMeComponent},
  { path: 'dashboard/experience', component: ExperienceComponent},
  { path: '**', pathMatch:'full',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
