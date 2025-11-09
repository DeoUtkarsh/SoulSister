import React, { useState } from "react";
import { CVIProvider } from "./components/cvi/components/cvi-provider";
import { Conversation } from "./components/cvi/components/conversation";

const App: React.FC = () => {
  const [conversationUrl, setConversationUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createConversation = async () => {
    setLoading(true);
    setError(null);

    try {
      console.log("Creating conversation with:", {
        replica_id: import.meta.env.VITE_REPLICA_ID,
        persona_id: import.meta.env.VITE_PERSONA_ID,
      });

      const response = await fetch("https://tavusapi.com/v2/conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_TAVUS_API_KEY || "",
        },
        body: JSON.stringify({
          replica_id: import.meta.env.VITE_REPLICA_ID || "rfe12d8b9597",
          persona_id: import.meta.env.VITE_PERSONA_ID || "pdced222244b",
        }),
      });

      console.log("Response status:", response.status, response.statusText);

      if (!response.ok) {
        // Get detailed error from API
        const errorData = await response.json().catch(() => ({}));
        console.error("API Error Details:", errorData);
        
        const errorMessage = errorData.error || errorData.message || response.statusText;
        throw new Error(`API Error (${response.status}): ${errorMessage}`);
      }

      const data = await response.json();
      console.log("Conversation created successfully:", data);
      setConversationUrl(data.conversation_url);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred";
      setError(errorMessage);
      console.error("Error creating conversation:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <CVIProvider>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          backgroundColor: "#1e1e1e",
          color: "#fff",
          textAlign: "center",
          flexDirection: "column",
          margin: 0,
          padding: 0,
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <h1 style={{ marginBottom: "0.5rem", fontSize: "2.5rem" }}>
          Soul Sister
        </h1>
        <p style={{ marginBottom: "2rem", color: "#aaa", fontSize: "1.1rem" }}>
          Speak your heart out!
        </p>

        {!conversationUrl ? (
          <div>
            <button
              onClick={createConversation}
              disabled={loading}
              style={{
                padding: "1rem 2rem",
                fontSize: "1.1rem",
                background: loading ? "#888" : "#6a0dad",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: loading ? "not-allowed" : "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
              }}
              onMouseOver={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = "#7d1bb3";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }
              }}
              onMouseOut={(e) => {
                if (!loading) {
                  e.currentTarget.style.background = "#6a0dad";
                  e.currentTarget.style.transform = "translateY(0)";
                }
              }}
            >
              {loading ? "Connecting..." : "Start Conversation"}
            </button>
            {error && (
              <div
                style={{
                  marginTop: "1rem",
                  padding: "1rem",
                  backgroundColor: "#ff4444",
                  borderRadius: "6px",
                  maxWidth: "500px",
                }}
              >
                <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>
                  Error:
                </div>
                <div style={{ marginBottom: "1rem" }}>{error}</div>
                <button
                  onClick={createConversation}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.9rem",
                    background: "#fff",
                    color: "#ff4444",
                    border: "none",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        ) : (
          <div
            style={{
              width: "100%",
              maxWidth: "1000px",
              height: "85vh",
              borderRadius: "12px",
              overflow: "hidden",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.5)",
              margin: "0 auto",
            }}
          >
            <Conversation
              conversationUrl={conversationUrl}
              onLeave={() => {
                setConversationUrl(null);
                setError(null);
              }}
            />
          </div>
        )}
      </div>
    </CVIProvider>
  );
};

export default App;
