# Quick Setup Guide

## Step 1: Add Your Tavus API Key

1. Go to [https://platform.tavus.io/](https://platform.tavus.io/) and sign up/login
2. Get your API key from the dashboard
3. Open the `.env` file in the `my-tavus-app` folder
4. Replace `your_api_key_here` with your actual API key

Your `.env` file should look like:
```
VITE_TAVUS_API_KEY=tvs_abc123your_actual_key_here
VITE_REPLICA_ID=rfe12d8b9597
VITE_PERSONA_ID=pdced222244b
```

## Step 2: Start the Application

Open a terminal in the `my-tavus-app` folder and run:

```bash
npm run dev
```

## Step 3: Open in Browser

Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173`)

## Step 4: Start Talking!

1. Click the **"Start Conversation"** button
2. Allow microphone access when prompted
3. Start speaking naturally - the avatar will listen and respond!

## Features You Get:

✅ **Speech Recognition** - The avatar hears you using Voice Activity Detection (VAD)
✅ **AI Understanding** - Tavus LLM processes your speech and generates intelligent responses  
✅ **Text-to-Speech** - The avatar speaks back to you naturally
✅ **Video Rendering** - Real-time video of the AI avatar
✅ **Natural Conversations** - Maintains context throughout the discussion

## Need Help?

- **Microphone not working?** Check browser permissions
- **API errors?** Verify your API key is correct in `.env`
- **Connection issues?** Restart the dev server: `Ctrl+C` then `npm run dev` again

## Customization

Want to change the avatar or personality? Update these in your `.env` file:
- `VITE_REPLICA_ID` - Changes the avatar appearance
- `VITE_PERSONA_ID` - Changes the AI personality/behavior

Get custom IDs from the Tavus platform dashboard.

---

Enjoy your AI avatar conversations! 🎉

