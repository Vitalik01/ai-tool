import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [model, setModel] = useState("openai");
  const [systemPrompt, setSystemPrompt] = useState("");
  const [userData, setUserData] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");
    setError("");

    if (!userData && !systemPrompt) {
      setError("User Input and System Prompt are required.");
      setLoading(false);
      return;
    }
    if (!systemPrompt) {
      setError("System Prompt is required.");
      setLoading(false);
      return;
    }
    if (!userData) {
      setError("User Input is required.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post("http://127.0.0.1:5000/api/chat", {
        model,
        systemPrompt,
        userData,
      });

      let fullResponse = "";
      const responseText = res.data.response;
      for (let i = 0; i < responseText.length; i++) {
        fullResponse += responseText[i];
        setResponse(fullResponse);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 401) {
          setError("Invalid API key. Please check your API credentials.");
        } else if (error.response.status === 500) {
          setError(error.response);
          setError("Server error. Please try again later.");
        } else {
          setError(
            `API Error: ${
              error.response.data.error || error.response.statusText
            }`
          );
        }
      } else if (error.request) {
        setError("Network error. Please check your internet connection.");
      } else {
        setError(`Unexpected error: ${error.message}`);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>AI Interaction Tool</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Model:
          <select value={model} onChange={(e) => setModel(e.target.value)}>
            <option value="openai">OpenAI</option>
            <option value="anthropic">Anthropic</option>
          </select>
        </label>
        <label>
          System Prompt:
          <textarea
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            placeholder="Enter system instructions for the model..."
          />
        </label>
        <label>
          User Input:
          <textarea
            value={userData}
            onChange={(e) => setUserData(e.target.value)}
            placeholder="Enter user question or message..."
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>

      {error && (
        <div className="error">
          <p>{error}</p>
        </div>
      )}

      {response && (
        <div className="response">
          <h2>Model Response:</h2>
          <p>{response}</p>
        </div>
      )}
    </div>
  );
}

export default App;
