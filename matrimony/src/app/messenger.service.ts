import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessengerService {
  
  chatList: string[] = ['User 1', 'User 2']; // Sample chat list
  messages: { sender: string, message: string }[] = []; // Sample messages

  constructor() { }

  // Function to get chat list
  getChatList(): string[] {
    return this.chatList;
  }

  // Function to get messages for a specific user
  getMessages(user: string): { sender: string, message: string }[] {
    return this.messages.filter(msg => msg.sender === user);
  }

  // Function to send a message
  sendMessage(sender: string, message: string) {
    this.messages.push({ sender, message });
  }
}