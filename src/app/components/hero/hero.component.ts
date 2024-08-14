import { AfterViewChecked, AfterViewInit, Component, ElementRef, HostListener, inject, ViewChild } from '@angular/core';
import { PrimaryButtonComponent } from "../commons/buttons/primary-button/primary-button.component";
import { TranslateModule } from '@ngx-translate/core';
import { CvService } from '../../services/cv/cv.service';

@Component({
    selector: 'app-hero',
    standalone: true,
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss',
    imports: [PrimaryButtonComponent , TranslateModule]
})
export class HeroComponent   {

    _CvService = inject(CvService);
    cvUrl !: string;
    
    ngOnInit(): void {
        this._CvService.getCV().subscribe(cv=>{
            this.cvUrl = "https://drive.google.com/uc?export=download&id="+cv.url;
        })
    }

}
