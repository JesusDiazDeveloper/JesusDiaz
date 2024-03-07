import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from "../commons/buttons/primary-button/primary-button.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    imports: [PrimaryButtonComponent , TranslateModule]
})
export class HeroComponent   {


}
