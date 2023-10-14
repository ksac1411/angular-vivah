// chat-message.model.ts

export interface ChatMessage {
    sender: string;     // The sender's name or identifier
    content: string;    // The content of the message
    timestamp: Date;    // The timestamp when the message was sent
  }
  