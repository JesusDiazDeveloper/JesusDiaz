import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/commons/header/header.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent , TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(translate : TranslateService){
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');
    translate.use('es');
  }

  title = 'JesusDiazWeb';
}
