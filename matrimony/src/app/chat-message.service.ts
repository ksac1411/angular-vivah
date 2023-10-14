import { Injectable } from '@angular/core';
import { ChatMessage } from './messenger/chatMessage';
@Injectable({
  providedIn: 'root'
})
export class ChatMessageService {
  getChatData(): ChatMessage[] {
    return [
      // Initialize with chat data
    ];
  }

  constructor() { }
}
