const messagesData = [
  {
    id: 1,
    artisanName: "Chijioke Okafor",
    messageSnippet:
      "I’m almost done with your project. Just a few final touches...",
    timestamp: "2025-04-01T10:30:00Z",
    fullConversation: [
      {
        sender: "Chijioke Okafor",
        message: "Hello! I’ve started working on your project.",
      },
      {
        sender: "Customer",
        message: "Great! Let me know if you need anything.",
      },
      {
        sender: "Chijioke Okafor",
        message:
          "I’m almost done with your project. Just a few final touches...",
      },
      { sender: "Customer", message: "I can’t wait to see the final result!" },
    ],
  },
  {
    id: 2,
    artisanName: "Adebayo Alabi",
    messageSnippet:
      "I have finished fixing the plumbing issues in your house. Please check it out.",
    timestamp: "2025-03-30T15:00:00Z",
    fullConversation: [
      {
        sender: "Adebayo Alabi",
        message: "I’m on my way to start the plumbing work.",
      },
      { sender: "Customer", message: "Thanks, looking forward to it!" },
      {
        sender: "Adebayo Alabi",
        message:
          "I have finished fixing the plumbing issues in your house. Please check it out.",
      },
      { sender: "Customer", message: "Everything looks good, thanks!" },
    ],
  },
  {
    id: 3,
    artisanName: "Ngozi Okoro",
    messageSnippet:
      "Your painting order is complete. I have delivered it to your address.",
    timestamp: "2025-03-28T09:45:00Z",
    fullConversation: [
      { sender: "Ngozi Okoro", message: "I’ve started painting your wall." },
      { sender: "Customer", message: "Great, make sure the colors pop!" },
      {
        sender: "Ngozi Okoro",
        message:
          "Your painting order is complete. I have delivered it to your address.",
      },
      {
        sender: "Customer",
        message: "Wow, the painting looks amazing! Thank you.",
      },
    ],
  },
  // Add more messages as needed
];

export default messagesData;
