import React, { useEffect, useState } from "react";
import axios from "axios";
import "./leaderboard.css";

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState({});
  const [activeSport, setActiveSport] = useState("");

  useEffect(() => {
  const fetchLeaderboard = async () => {
    try {
      // For now, hardcode sport OR loop through all sports
      const sports = ["Badminton", "Squash", "Table Tennis", "Lawn Tennis"]; // update with your actual sports
      const allData = {};

      for (const sport of sports) {
        const res = await axios.get(`http://localhost:8080/leaderboard/${sport}`);
        allData[sport] = res.data;
      }

      setLeaderboard(allData);
      setActiveSport(sports[0]);
    } catch (error) {
      console.error("Failed to fetch leaderboard", error);
    }
  };
  fetchLeaderboard();
}, []);

  const handleTabClick = (sport) => {
    setActiveSport(sport);
  };

  return (
    <div className="leaderboard-container">
      <h1>IITB Pre-Camp Ladder</h1>

      {/* Sport Tabs */}
      <div className="leaderboard-tabs">
        {Object.keys(leaderboard).map((sport) => (
          <button
            key={sport}
            className={`leaderboard-tab ${
              activeSport === sport ? "active" : ""
            }`}
            onClick={() => handleTabClick(sport)}
          >
            {sport}
          </button>
        ))}
      </div>

      {/* Podium for top 3 */}
      {activeSport && leaderboard[activeSport] && (
        <div className="podium">
          {leaderboard[activeSport][1] && (
            <div className="place second">
              <h3>{leaderboard[activeSport][1].name}</h3>
              <p>Rank 2</p>
            </div>
          )}
          {leaderboard[activeSport][0] && (
            <div className="place first">
              <h3>{leaderboard[activeSport][0].name}</h3>
              <p>Rank 1</p>
            </div>
          )}
          {leaderboard[activeSport][2] && (
            <div className="place third">
              <h3>{leaderboard[activeSport][2].name}</h3>
              <p>Rank 3</p>
            </div>
          )}
        </div>
      )}

      {/* Leaderboard Table */}
      {activeSport && leaderboard[activeSport] && (
        <div className="leaderboard-table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Player</th>
                <th>Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard[activeSport].map((player, index) => (
                <tr key={player.id}>
                  <td>{index + 1}</td>
                  <td>{player.name}</td>
                  <td>{player.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Leaderboard;
