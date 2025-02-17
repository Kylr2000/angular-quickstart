import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './project/projects.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Default page
  { path: 'resume', component: ResumeComponent },
  { path: 'project', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
