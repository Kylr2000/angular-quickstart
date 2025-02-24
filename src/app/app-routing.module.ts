import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResumeComponent } from './resume/resume.component';
import { ProjectsComponent } from './project/projects.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect default path
  { path: 'home', loadComponent: () => import('./app.component').then(m => m.AppComponent) },
  { path: 'resume', loadComponent: () => import('./resume/resume.component').then(m => m.ResumeComponent) },
  { path: 'project', loadComponent: () => import('./project/projects.component').then(m => m.ProjectsComponent) },
  { path: '**', redirectTo: 'home' } // Wildcard route for 404s
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })], // Hash-based routing
  exports: [RouterModule]
})
export class AppRoutingModule { }
