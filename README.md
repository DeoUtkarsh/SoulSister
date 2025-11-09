## Soul Sister – Tavus Conversational Avatar

React/Vite demo app that spins up a Tavus Conversational Video Interface (CVI) session so anyone can speak with an AI avatar in real time. Daily’s WebRTC SDK handles the media transport; Tavus provides the LLM, replica video, and voice.

### Project Layout
- `my-tavus-app/` — main Vite project (TypeScript, React 19)
  - `src/` contains UI, CVI hooks, and Daily integrations
  - `components/cvi` holds reusable media widgets (`Conversation`, device selectors, audio wave)
  - `App.tsx` creates conversations and hosts the UI shell
- `check.py` — simple Python script for testing replica lookups (replace hard-coded credentials before use)

### Local Development
```bash
cd my-tavus-app
npm install
cp .env.example .env   # or create .env manually
# fill in VITE_TAVUS_API_KEY / VITE_REPLICA_ID / VITE_PERSONA_ID
npm run dev
```
The dev server defaults to `http://localhost:5173`. Click **Start Conversation**, allow mic access, and chat.

### Production Build
```bash
npm run build
```
Outputs static assets in `my-tavus-app/dist`, ready for Netlify, Vercel, or any static host that supports client-side routing.

### Deploying to Netlify (Free Tier)
1. Push the project to GitHub/GitLab/Bitbucket (omit `node_modules/`).
2. In Netlify, choose **Add new site → Import an existing project** and select the repo.
3. Build settings:
   - Base directory: `my-tavus-app`
   - Build command: `npm run build`
   - Publish directory: `my-tavus-app/dist`
4. Add environment variables in the Netlify dashboard:
   - `VITE_TAVUS_API_KEY`
   - `VITE_REPLICA_ID`
   - `VITE_PERSONA_ID`
5. Deploy and test the generated `*.netlify.app` URL.

### Security Notes
- Never commit real API keys. Use `.env` files locally and Netlify environment variables in production.
- Rotate any keys that were previously committed.

### License
MIT

