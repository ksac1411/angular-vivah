
import { Component, ElementRef, ViewChild } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { UserserviceService } from '../userservice.service';


import { Logindata } from '../logindata';
import { ShareserviceService } from '../shareservice.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})

export class LoginComponent {
  showPassword = false;
  rememberMe = false;
  logindata: Logindata = new Logindata();
  @ViewChild('passwordInput') passwordInput!: ElementRef;
  errorMessage: string | undefined;
  data: any;
globaluserid:any;



  constructor(private router: Router, private userservice: UserserviceService ,private shareService: ShareserviceService) {}





  submitForm() {
    console.log(this.logindata);

    this.userservice.login(this.logindata).subscribe(
      (data: any) => {
        // Check if 'data' has expected properties before navigating
        if (data && data.userid) {
          this.shareService.globaluserid = data.userid; // Store the value in the service
          this.data = data;
          const navigationExtras: NavigationExtras = {
            queryParams: { userData: JSON.stringify(this.data) }
          };
          this.router.navigate(['/dashboard'], navigationExtras);
        } else {
          console.error('Invalid response format:', data);
          this.errorMessage = 'Unexpected response from the server.';
        }
      },
      (error: any) => {
        console.error('Login failed:', error);
        this.errorMessage = "Username and password don't match.";
      }
    );
  }




  togglePassword() {
    const inputType = this.passwordInput.nativeElement.type;
    this.passwordInput.nativeElement.type = inputType === 'password' ? 'text' : 'password';
  }




  navigateToRegister() {
    this.router.navigate(['/signup']);
  }

}