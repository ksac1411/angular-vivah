import { Component } from '@angular/core';
import { Logindata } from '../logindata';
import { OTP } from '../otp';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent {
  showOtpInput: boolean = false;
  showPasswordInput: boolean = false;
  logindata: Logindata = new Logindata();
  otp: OTP = new OTP();

  constructor(private userService: UserserviceService) {}

  onSubmit() {
    if (!this.showOtpInput) {
      // First, send the OTP
      this.userService.sentOtp(this.logindata.phoneNumber).subscribe(
        (response: any) => {
          // OTP sent successfully
          console.log('OTP sent successfully:', response);
          this.showOtpInput = true;
        },
        (error: any) => {
          // Handle error
          console.error('Error sending OTP:', error);
        }
      );
    } else if (this.showOtpInput && !this.showPasswordInput) {
      // Verify the OTP
      this.userService.verifyOtp(this.otp.otp).subscribe(
        (response: any) => {
          // OTP verified successfully
          console.log('OTP verified successfully:', response);
          this.showPasswordInput = true;
        },
        (error: any) => {
          // Handle error
          console.error('Error verifying OTP:', error);
        }
      );
    } else {
      // Change the password
      if (this.logindata.password === this.logindata.confirmPassword) {
        this.userService.changePassword(this.logindata.password).subscribe(
          (response: any) => {
            // Password changed successfully
            console.log('Password changed successfully:', response);
          },
          (error: any) => {
            // Handle error
            console.error('Error changing password:', error);
          }
        );
      } else {
        // Handle password mismatch error
        console.error('Passwords do not match');
      }
    }
  }

  resendOtp() {
    // Logic for resending the OTP
    this.userService.sentOtp(this.logindata.phoneNumber).subscribe(
      (response: any) => {
        // OTP resent successfully
        console.log('OTP resent successfully:', response);
      },
      (error: any) => {
        // Handle error
        console.error('Error resending OTP:', error);
      }
    );
  }
}
