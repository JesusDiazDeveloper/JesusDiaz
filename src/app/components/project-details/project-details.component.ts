import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDTO } from '../../models/projects/projectDTO';
import { ProjectsService } from '../../services/projects.service';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [TranslateModule,MatIconModule],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent implements OnInit {

  router: ActivatedRoute = inject(ActivatedRoute);
  projectId !: string;
  project !: ProjectDTO | null;
  projectService = inject(ProjectsService);



  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.projectId = params['id'];
      console.log(" this.projectId: " + this.projectId);
      this.project = this.projectService.getById(params['id']);
      console.log("this.project: + " +  this.project);

    })

    console.log(this.project);
  }
  
}
