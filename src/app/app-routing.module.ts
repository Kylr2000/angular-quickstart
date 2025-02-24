import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './project/projects.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Default page
  { path: 'resume', component: ResumeComponent },
  { path: 'project', component: ProjectsComponent },
  { path: '**', redirectTo: '' }  // Handle 404s, redirect to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],  // Enable hash-based routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
