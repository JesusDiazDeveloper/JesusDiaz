import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from "../commons/buttons/primary-button/primary-button.component";

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    imports: [PrimaryButtonComponent]
})
export class HeroComponent   {
    

}
