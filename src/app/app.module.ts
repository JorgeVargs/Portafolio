import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { CarouselModule} from 'ngx-owl-carousel-o';
import { EditorModule } from '@tinymce/tinymce-angular';
import { NgsRevealModule } from 'ngx-scrollreveal';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/Landing/header/header.component';
import { WorkExperienceComponent } from './components/Landing/work-experience/work-experience.component';
import { SkillsComponent } from './components/Landing/skills/skills.component';
import { ProjectsComponent } from './components/Landing/projects/projects.component';
import { ContactoComponent } from './components/Landing/contacto/contacto.component';
import { FooterComponent } from './components/footer/footer.component';

import { DashboardComponent } from './components/Dashboard/dashboard/dashboard.component';
import { AboutMeComponent } from './components/Dashboard/about-me/about-me.component';
import { ExperienceComponent } from './components/Dashboard/experience/experience.component';
import { DataServices } from './services/data.service';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';


@NgModule({//decorador
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    WorkExperienceComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactoComponent,
    FooterComponent,
    DashboardComponent,
    AboutMeComponent,
    ExperienceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    NgsRevealModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }