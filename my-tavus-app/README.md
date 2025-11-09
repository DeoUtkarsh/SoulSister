# Tavus AI Avatar - Conversational Video Interface

An interactive AI avatar application built with React, TypeScript, and Tavus CVI. Speak naturally and the avatar will listen, understand, and respond in real-time.

## Features

- **Speech Recognition**: Automatically detects when you speak using VAD (Voice Activity Detection)
- **Real-time AI Conversations**: Powered by Tavus LLM for natural conversations
- **Text-to-Speech**: The avatar speaks back to you with natural voice
- **Video Rendering**: High-quality AI avatar video rendering
- **Beautiful UI**: Modern, responsive interface that works in light and dark modes

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- A Tavus API key (get one at [https://platform.tavus.io/](https://platform.tavus.io/))

## Setup Instructions

### 1. Install Dependencies

```bash
cd my-tavus-app
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the `my-tavus-app` directory with the following content:

```env
# Tavus API Configuration
# Get your API key from https://platform.tavus.io/
VITE_TAVUS_API_KEY=your_api_key_here

# Default replica_id (you can change this to your own)
VITE_REPLICA_ID=rfe12d8b9597

# Default persona_id (you can change this to your own)
VITE_PERSONA_ID=pdced222244b
```

**Important**: Replace `your_api_key_here` with your actual Tavus API key from the Tavus platform.

### 3. Run the Application

```bash
npm run dev
```

The application will start on `http://localhost:5173` (or another port if 5173 is in use).

## How to Use

1. **Start the Application**: Run `npm run dev` and open the provided URL in your browser
2. **Click "Start Conversation"**: This will create a new conversation session with the AI avatar
3. **Allow Microphone Access**: Your browser will ask for microphone permissions - click "Allow"
4. **Start Speaking**: Just talk naturally! The avatar will:
   - Listen to your speech using Voice Activity Detection (VAD)
   - Process your words through the AI (LLM)
   - Generate a response
   - Speak back to you with the avatar's voice and video
5. **Continue the Conversation**: Keep talking! The avatar maintains context throughout the conversation
6. **End the Session**: Click the leave/exit button when you're done

## Architecture

### Technologies Used

- **React 18**: UI framework
- **TypeScript**: Type safety
- **Vite**: Fast build tool and dev server
- **Tavus CVI**: Conversational Video Interface
  - Speech Recognition (VAD)
  - LLM for natural language understanding
  - Text-to-Speech (TTS)
  - Real-time video rendering

### Project Structure

```
my-tavus-app/
├── src/
│   ├── components/
│   │   └── cvi/
│   │       ├── components/
│   │       │   ├── audio-wave/
│   │       │   ├── conversation/
│   │       │   ├── cvi-provider/
│   │       │   └── device-select/
│   │       └── hooks/
│   │           ├── use-cvi-call.tsx
│   │           ├── use-local-camera.tsx
│   │           ├── use-local-microphone.tsx
│   │           ├── use-local-screenshare.tsx
│   │           └── use-replica-ids.tsx
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── .env                     # Environment variables (create this!)
├── cvi-components.json      # CVI configuration
├── package.json
└── vite.config.ts
```

## Customization

### Change Avatar Replica

To use a different avatar, update the `VITE_REPLICA_ID` in your `.env` file with your desired replica ID from the Tavus platform.

### Change AI Persona

To modify the AI's personality and behavior, update the `VITE_PERSONA_ID` in your `.env` file with your custom persona ID.

### Modify UI Styling

The main UI styles are in `src/App.tsx` using inline styles. You can customize:
- Background colors
- Button styles
- Avatar container size
- Fonts and spacing

## Troubleshooting

### Microphone Not Working

- Ensure you've granted microphone permissions in your browser
- Check that your microphone is connected and working
- Try refreshing the page and allowing permissions again

### API Key Issues

- Verify your API key is correct in the `.env` file
- Ensure the `.env` file is in the `my-tavus-app` directory (not in a parent folder)
- Restart the dev server after changing environment variables

### Connection Errors

- Check your internet connection
- Verify the Tavus API is accessible
- Check browser console for specific error messages

## Learn More

- [Tavus Documentation](https://docs.tavus.io/)
- [Tavus CVI Integration Guide](https://docs.tavus.io/sections/integrations/embedding-cvi)
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)

## License

MIT License - Feel free to use this project for your own applications!

## Support

For issues with:
- **Tavus API**: Visit [Tavus Support](https://tavus.io/support)
- **This Application**: Check the browser console for errors and ensure all setup steps were followed

---

Built with ❤️ using Tavus CVI
