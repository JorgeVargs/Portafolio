import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './components/Landing/header/header.component';

import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { AboutMeComponent } from './components/Dashboard/about-me/about-me.component';
import { ExperienceComponent } from './components/Dashboard/experience/experience.component';
import { SkillsComponentD } from './components/Dashboard/skills/skills.component';
import { ProyectosComponent } from './components/Dashboard/proyectos/proyectos.component';
import { ContactComponent } from './components/Dashboard/contact/contact.component'

const routes: Routes = [
  { path: '', component: HeaderComponent,},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'dashboard/about-me', component: AboutMeComponent},
  { path: 'dashboard/experience', component: ExperienceComponent},
  { path: 'dashboard/skills', component: SkillsComponentD},
  { path: 'dashboard/proyectos',component: ProyectosComponent},
  { path: 'dashboard/contacto', component:ContactComponent },
  { path: '**', pathMatch:'full',redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
