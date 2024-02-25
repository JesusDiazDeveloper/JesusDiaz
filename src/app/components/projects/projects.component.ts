import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProjectDTO } from '../../models/projects/projectDTO';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CarouselModule ,TagModule ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent  {

  projects : ProjectDTO [] = [
    {"name" : "unNombre" , "img": "../../../assets/projects/1.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/2.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/3.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/4.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/5.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/6.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/7.jpg"},
    {"name" : "unNombre" , "img": "../../../assets/projects/8.jpg"},
  ];

  responsiveOptions : CarouselResponsiveOptions [] = [];

  interval : number = 3000;
}
      