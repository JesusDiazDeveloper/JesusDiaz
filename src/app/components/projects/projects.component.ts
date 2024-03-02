import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';
import { CarouselModule, CarouselResponsiveOptions } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { ProjectDTO } from '../../models/projects/projectDTO';
import { PrimaryButtonComponent } from "../commons/buttons/primary-button/primary-button.component";

@Component({
    selector: 'app-projects',
    standalone: true,
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    imports: [CarouselModule, TagModule, PrimaryButtonComponent]
})
export class ProjectsComponent  {

  projects : ProjectDTO [] = [
    {id : 1 , "name" : "unNombre" , "img": "../../../assets/projects/1.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 2 , "name" : "unNombre" , "img": "../../../assets/projects/2.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 3 , "name" : "unNombre" , "img": "../../../assets/projects/3.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 4 , "name" : "unNombre" , "img": "../../../assets/projects/4.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 5 , "name" : "unNombre" , "img": "../../../assets/projects/5.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 6 , "name" : "unNombre" , "img": "../../../assets/projects/6.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 7 , "name" : "unNombre" , "img": "../../../assets/projects/7.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
    {id : 8 , "name" : "unNombre" , "img": "../../../assets/projects/8.jpg", technologies : ["Java" , "JS" , "Angular" , "React" ] },
  ];

  responsiveOptions : CarouselResponsiveOptions [] = [

            {
                breakpoint: '10000px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '1280px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '769px',
                numVisible: 2,
                numScroll: 1
            },
            {
              breakpoint: '481px',
              numVisible: 1,
              numScroll: 1
          }
        ];





    showOverlayIndex: number | null = null;

    showOverlay(index: number) {
        this.showOverlayIndex = index;
    }

    hideOverlay() {
        this.showOverlayIndex = null;
    }
    
}
      