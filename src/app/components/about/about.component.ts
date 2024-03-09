  import { NgClass } from '@angular/common';
  import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

  @Component({
    selector: 'app-about',
    standalone: true,
    imports: [NgClass , TranslateModule],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
  })
  export class AboutComponent {
    
  }
