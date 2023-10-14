export const users = [
    { id: 1, name: 'User 1', profileImageUrl: 'profile1.jpg' },
    { id: 2, name: 'User 2', profileImageUrl: 'profile2.jpg' },
  ];
  
  export const chatList = [
    { userId: 1, lastMessage: 'Hello', dateTime: '10:30 AM' },
    { userId: 2, lastMessage: 'Hi there!', dateTime: '11:15 AM' },
    // Add more chat list items
  ];
  interface ChatMessages {
    [userId: string]: { text: string; sender: string; dateTime: string }[];
  }
  
  export const chatMessages = {
    1: [
      { text: 'Hello', sender: 'user', dateTime: '10:30 AM' },
      { text: 'Hi!', sender: 'other', dateTime: '10:31 AM' },
      // Add more messages for User 1
    ],
    2: [
      { text: 'Hi there!', sender: 'user', dateTime: '11:15 AM' },
      { text: 'Hey!', sender: 'other', dateTime: '11:16 AM' },
      // Add more messages for User 2
    ],
  };
  