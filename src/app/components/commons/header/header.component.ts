import { Component, HostListener } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from '../../hero/hero.component';
import { AboutComponent } from "../../about/about.component";
import { ProjectsComponent } from "../../projects/projects.component";
import { NgClass, NgStyle } from '@angular/common';
import { SomeTechnologiesComponent } from "../../some-technologies/some-technologies.component";
import { ContactComponent } from "../../contact/contact.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl:  './header.component.scss',
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatSidenavModule,
        HeroComponent,
        AboutComponent,
        ProjectsComponent,
        NgStyle,
        SomeTechnologiesComponent,
        ContactComponent,
        FooterComponent,
        NgClass
    ]
})


export class HeaderComponent {

  menuOpened: boolean = false;
  screenWidth: number;
  navbarfixed : boolean = false;

  
  constructor() {
    // set screenWidth on page load
    this.screenWidth = window.innerWidth;
    // Agregamos un listener de redimensionamiento
    window.addEventListener('resize', this.handleResize);
    // Llamamos a handleResize para establecer el estado inicial
    this.handleResize();
  }

  @HostListener('window:scroll',['$event'])onScroll(){
    if(window.scrollY > 100) {
      this.navbarfixed=true;
    }
    else{
      this.navbarfixed=false;
    }
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

  closeMenu() {
    this.menuOpened=false;
    }
}
