import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'app-searchbyid',
  templateUrl: './searchbyid.component.html',
  styleUrls: ['./searchbyid.component.css']
})
export class SearchbyidComponent{


  constructor(private userserviceService: UserserviceService) {} 

  userId:any;  // Define a variable to store the user ID
  user: any; // Define a variable to store the user data

  fetchUser() {
    // Call the user service to fetch user data by ID
    this.userserviceService.getUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }
}








 // Create a method to fetch user data
//   fetchUser() {
//     this.userserviceService.getUserById(this.userId).subscribe((data: any) => {
//       this.user = data;
//     });
// }}