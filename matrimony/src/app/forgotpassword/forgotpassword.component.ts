import { Component } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { UserserviceService } from '../userservice.service';
import { Logindata } from '../logindata';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  logindata: Logindata = new Logindata(); // Initialize a User object

  
  @ViewChild('newPasswordInput')
  newPasswordInput!: ElementRef;
  @ViewChild('confirmPasswordInput')
  confirmPasswordInput!: ElementRef;

  constructor(private usersserviceService: UserserviceService) {} // Inject the service
  submitForm() {
    // Check if passwords match before sending the reset request
    if (this.logindata.password === this.logindata.confirmPassword) {
      this.usersserviceService.resetPassword(this.logindata.usernameOrEmail, this.logindata.password)
        .subscribe(
          (response:any) => {
            console.log('Password reset successful:', response);
            // Handle success, e.g., display a success message or navigate to a login page.
          },
          (error:any) => {
            console.error('Password reset failed:', error);
            // Handle error, e.g., display an error message.
          }
        );
    } else {
      console.error('Passwords do not match');
      // Handle password mismatch error, e.g., display an error message.
    }

  }
  
  togglePassword(inputType: string) {
    const inputField = inputType === 'new' ? this.newPasswordInput.nativeElement : this.confirmPasswordInput.nativeElement;
    const currentInputType = inputField.type;
    inputField.type = currentInputType === 'password' ? 'text' : 'password';
  }
  // newPasswordVisible = false;
  // confirmPasswordVisible = false;

  // togglePassword(type: 'new' | 'confirm') {
  //   if (type === 'new') {
  //     this.newPasswordVisible = !this.newPasswordVisible;
  //   } else if (type === 'confirm') {
  //     this.confirmPasswordVisible = !this.confirmPasswordVisible;
  //   }
  // }
}