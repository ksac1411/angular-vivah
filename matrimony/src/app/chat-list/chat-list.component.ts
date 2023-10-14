import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
  userList: any[] = [
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

  constructor() {}

  ngOnInit(): void {}
  openChat(user: any): void {
    // Implement the logic to open a chat window for the selected user (user)
    // You can set the selected chat user property or perform any necessary actions here
  }
}
