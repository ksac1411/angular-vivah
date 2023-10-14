import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent {
  @Input() user: any; // Input property to receive the user data

  messages: { sender: string; content: string; timestamp: string }[] = [
    {
      sender: 'User 1',
      content: 'Hello there!',
      timestamp: '2023-09-25T12:30:00' // Example timestamp (ISO format)
    }
  ];
  
  newMessage: string = '';
  sendMessage() {
    if (this.newMessage.trim() !== '') {
      const currentTimestamp = new Date().toISOString(); // Generate current timestamp
      this.messages.push({ sender: 'You', content: this.newMessage, timestamp: currentTimestamp });
      this.newMessage = '';
    }
  }
  
  }

