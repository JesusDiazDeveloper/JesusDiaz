import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-custom-modal',
  standalone: true,
  imports: [],
  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss'
})
export class CustomModalComponent {
  @Output() close = new EventEmitter<any>();

  @Input ({ required: true }) custom_message !: string;

  constructor() { }
  
  ngOnInit() { 
    
  }

  closeModal() {
      this.close.emit();
  }

  getMessageLines(): string[] {
    // Dividir el mensaje en líneas usando '\n' como separador
    return this.custom_message.split('\n');
  }
}
