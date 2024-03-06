import { Injectable } from '@angular/core';
import { ProjectDTO } from '../models/projects/projectDTO';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: ProjectDTO[] = [
    { id: "1", "name": "Pagina web para un artista de mi ciudad", "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "Proyecto final de la materia Web 1 de mi carrera, en la cual junto con mi compañera desarrollamos una SPA (Single Page Application)  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer   took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with  desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."   
  , links: ["https://google.com.ar"] },
    { id: "2", "name": "unNombre", "img": "assets/projects/2.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
    { id: "3", "name": "unNombre", "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
    { id: "4", "name": "unNombre", "img": "assets/projects/2.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
    { id: "5", "name": "unNombre", "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
    { id: "6", "name": "unNombre", "img": "assets/projects/2.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
    { id: "7", "name": "unNombre", "img": "assets/projects/1.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
    { id: "8", "name": "unNombre", "img": "assets/projects/2.jpg", technologies: ["Java", "JS", "Angular", "React"]
  , description: "aaaaaaaaaaaaaaaaaaaaaaa" , links: ["https://google.com.ar"] },
  ];

  constructor() { }

  getAll(){
    return this.projects;
  }

  getById( id : string){
    const project = this.projects.find(project=>project.id === id);
    if( project ){
      return project
    }
    else{
      return null;
    }
  }

}
