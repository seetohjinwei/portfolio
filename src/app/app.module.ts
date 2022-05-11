import { BrowserModule } from '@angular/platform-browser';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ScrollToTopComponent } from './components/scroll-to-top/scroll-to-top.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialComponent } from './components/social/social.component';
import { TransformTechPipe } from './components/projects/transform-tech.pipe';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    EducationComponent,
    NavbarComponent,
    ProjectsComponent,
    ScrollToTopComponent,
    SkillsComponent,
    SocialComponent,
    TransformTechPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
