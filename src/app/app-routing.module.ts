import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Default page
  { 
    path: 'resume', 
    loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) 
  },
  { 
    path: 'project', 
    loadChildren: () => import('./project/projects.module').then(m => m.ProjectsModule) 
  },
  { path: '**', redirectTo: '' }  // Redirect unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
