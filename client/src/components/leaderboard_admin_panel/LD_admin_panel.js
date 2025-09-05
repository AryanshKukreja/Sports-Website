import React, { useState } from "react";
import axios from "axios";
import "./LD_admin_panel.css";

function LD_AdminPanel() {
  const [name, setName] = useState("");
  const [sport, setSport] = useState("Badminton"); // default sport
  const [points, setPoints] = useState("");
  const [password, setPassword] = useState("");

  const sportsList = ["Badminton", "Table Tennis", "Squash", "Lawn Tennis"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/player", {
        name,
        sport,
        points: parseInt(points, 10),
        password,
      });
      alert("✅ Player added/updated successfully!");
      console.log(response.data);
      setName("");
      setPoints("");
      setPassword("");
    } catch (error) {
      console.error("Failed to add/update player", error);
      alert(error.response?.data?.error || "❌ Failed to add/update player");
    }
  };

  return (
    <div className="admin-panel-container">
      <form onSubmit={handleSubmit} className="admin-form">
        <h2>🏆 Update Leaderboard Score</h2>

        <input
          type="text"
          placeholder="Player Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <select value={sport} onChange={(e) => setSport(e.target.value)} required>
          {sportsList.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Points (+2 for wining, -1 for losing)"
          value={points}
          onChange={(e) => setPoints(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Add / Update Score</button>
      </form>
    </div>
  );
}

export default LD_AdminPanel;
