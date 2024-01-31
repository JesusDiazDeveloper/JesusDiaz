import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from "../../about/about.component";
import { ProjectsComponent } from "../../projects/projects.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        HeroComponent,
        AboutComponent,
        ProjectsComponent
    ]
})


export class HeaderComponent {
  menuOpened: boolean = false;
  screenWidth: number;

  constructor() {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    // Agregamos un listener de redimensionamiento
    window.addEventListener('resize', this.handleResize);
    // Llamamos a handleResize para establecer el estado inicial
    this.handleResize();
  }

  // Método para manejar el redimensionamiento
  private handleResize = () => {
    // set screenWidth on screen size change
    this.screenWidth = window.innerWidth;

    // Check if screenWidth is greater than 768 and close the menu if it's open
    if (this.screenWidth > 768) {
      this.menuOpened = false; 
    }
  };
}
