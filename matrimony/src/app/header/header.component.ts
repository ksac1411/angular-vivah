import { Component ,OnInit} from '@angular/core';
import { UserserviceService } from '../userservice.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {
  isLoggedIn: boolean = false;

  constructor(    private userservice: UserserviceService) { }
  
  
  
  

  OnInit(): void {
    this.userservice.isLoggedIn.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
