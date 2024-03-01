import { Component, inject, } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactServiceService } from '../../services/contact-service.service';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { JsonPipe } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, MatInputModule, FormsModule, ReactiveFormsModule, JsonPipe],
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



    let data = {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message,
    }

    try {
      const response = await this.service.send(data);
      if (response) {
        console.log(response);
        alert("Message has been sent succesfully");
        this.form.reset();
      }
      else {
        alert("There was an error, try again later");
      }
    } catch (error) {
      alert("There was an error, try again later");
    }


  }
}

