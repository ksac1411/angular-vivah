import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';

interface PhonebookItem {
  profilephoto: string;
  name: string;
  phoneNumber: string;
  // Add other properties as needed
}

@Component({
  selector: 'app-phonebook',
  templateUrl: './phonebook.component.html',
  styleUrls: ['./phonebook.component.css']
})
export class PhonebookComponent implements OnInit {
  phonebookList: PhonebookItem[] = []; // Use the defined interface

  constructor(private userserviceService: UserserviceService) { }

  ngOnInit() {
    const userId = '1'; // Replace this with the actual user ID
    this.getPhonebookList(userId);
  }

  getPhonebookList(userId: string): void {
    this.userserviceService.getPhonebookList(userId)
      .subscribe(
        (data: Object[]) => {
          this.phonebookList = data as PhonebookItem[];
          console.log(data); // Log the data to the console for debugging
        },
        (error: any) => {
          // Handle errors here
          console.error('Error fetching phonebook list', error);
        }
      );
  }
  
}
