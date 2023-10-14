import { Component } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };
  submitForm() {
    console.log('Form Data:', this.formData);
  }

}
