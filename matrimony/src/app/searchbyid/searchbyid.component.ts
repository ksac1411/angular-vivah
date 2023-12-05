import { Component, OnInit} from '@angular/core';
import { User } from '../user';
import { UserserviceService } from '../userservice.service';
import { ShareService } from '../ShareService';


@Component({
  selector: 'app-searchbyid',
  templateUrl: './searchbyid.component.html',
  styleUrls: ['./searchbyid.component.css']
})
export class SearchbyidComponent{


  constructor(private userserviceService: UserserviceService, private shareservice: ShareService) {} 
  userid=this.shareservice.getUserId();

  userId:any;  // Define a variable to store the user ID
  user: any; // Define a variable to store the user data

  fetchUser() {
    // Call the user service to fetch user data by ID
    this.userserviceService.getUserById(this.userId).subscribe((data) => {
      this.user = data;
    });
  }
  

  onSearch() {
    this.fetchUser();
  }
}