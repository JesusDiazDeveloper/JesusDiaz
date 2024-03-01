import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {


  async send(data: any) {
    emailjs.init('HZBWjwdhDBzEJTX0O');
    try {
      let response = await emailjs.send("service_1lfbeh4", "template_5az5z1q", data);
      return response;
    } catch (error) {
      return error;
    }

  }
}
