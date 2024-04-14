import { Component, OnInit, inject, } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from '../../services/contact-service.service';
import { CommonModule, JsonPipe, NgClass } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { EmailJSResponseStatus } from '@emailjs/browser';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, JsonPipe, TranslateModule,NgClass],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private service = inject(ContactServiceService);
  private fb = inject(FormBuilder);

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: '',
    from_email: '',
    subject: '',
    message: '',
  });

  async send() {

    if (this.form.invalid) {
      // Si el formulario no es válido, detener el envío y mostrar un mensaje de error
      alert("Please fill out all fields before submitting.");
      return;
    }

    let data = {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    }

    try {
      const response = <EmailJSResponseStatus>await this.service.send(data);
      if (response.status === 200) {
        // TODO:  create Modal
        alert("Message has been sent succesfully");
        this.form.reset();
      }
      else {
        // TODO:  create Modal
        alert("There was an error, try again later, \n the status was: " + response.status + ", " + response.text);
      }
    } catch (error) {
      // TODO:  create Modal
      alert("There was an error, try again later");
    }
  }

  

  
  hasErrors(controlName: string, errorType: string) {
    return this.form.get(controlName)?.hasError(errorType) && this.form.get(controlName)?.touched
  }
}

