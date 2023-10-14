import { Component } from '@angular/core';
import { MessengerService } from '../messenger.service';

@Component({
  selector: 'app-messenger',
  templateUrl: './messenger.component.html',
  styleUrls: ['./messenger.component.css'],
})
export class MessengerComponent {
  selectedUser: any = null;
  chatList: any[] = [];
  
  newMessage: string = ''; // Define the newMessage property

  constructor(private messengerService: MessengerService,
    ) {}

  ngOnInit() {
    // Load chat user list from your service (assuming MessengerService provides this data)
    this.chatList = this.messengerService.getChatList();
    this.chatList=[
    {
      userAvatar: 'assets/man-avatar-profile-vector-21372076.jpg',
      userName: 'User 1',
      lastMessage: 'Hello there!',
      timestamp: '2023-09-25T12:30:00' // Example timestamp (ISO format)

    },
    {
      userAvatar: 'assets/man-avatar-profile-vector-21372076',
      userName: 'User 2',
      lastMessage: 'How are you doing?',
      timestamp: '2023-09-25T12:30:00' // Example timestamp (ISO format)

    },
    // Add more chat items as needed
    {
      userAvatar: 'assets/man-avatar-profile-vector-21372076.jpg',    
        userName: 'User 3',

      lastMessage: 'How are you doing?',
      timestamp: '2023-09-25T12:30:00' // Example timestamp (ISO format)

    },
   
  ];
  }

  openChat(user: any): void {
    this.selectedUser = user;
  }

  closeChat(): void {
    this.selectedUser = null;
  }
  sendMessage(message: string): void {
    // Implement sending messages functionality here
    // You can use this.selectedUser to identify the recipient
  }
}
