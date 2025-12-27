import { useState } from "react";
import { explainCodeAPI } from "./services/api";

function App() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleExplain = async () => {
    setLoading(true);
    try {
      const data = await explainCodeAPI(code);
      setResult(data.explanation);
    } catch (error) {
      setResult("Error calling backend");
    }
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>AI Code Explainer</h2>

      <textarea
        rows="6"
        cols="60"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Paste code here"
      />

      <br /><br />

      <button onClick={handleExplain}>
        {loading ? "Explaining..." : "Explain Code"}
      </button>

      <pre>{result}</pre>
    </div>
  );
}

export default App;
