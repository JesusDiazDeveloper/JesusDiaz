import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

export const routes: Routes = [
    {path: '' , component: HomeComponent},
    {path : '/project' , component: ProjectDetailsComponent}
];
