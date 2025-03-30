import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import classes from "./MatchMaking.module.css";
import Title from "../common/title/Title";
import { PAGE_TITLE } from "../../utilities/const";

interface SessionResult {
  session_id: string;
  player1: {
    id: string;
    rating: number;
  };
  player2: {
    id: string;
    rating: number;
  };
}

const MatchMaking = (): JSX.Element => {
  const [userId, setUserId] = useState<string>("");
  const [session, setSession] = useState<SessionResult | null>(null);
  const [status, setStatus] = useState<string>("");

  const handleMatchmaking = async () => {
    if (!userId) {
      setStatus("ユーザーIDを入力してください");
      return;
    }

    // ユーザーIDは入力値、ratingは固定値として設定
    const player = { id: userId, rating: 1500 };

    try {
      const response = await fetch("http://localhost:8080/matchmaking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(player),
      });

      if (!response.ok) {
        const errText = await response.text();
        setStatus(`Error: ${errText}`);
        return;
      }

      const data = await response.json();
      // "waiting" ステータスが返された場合は後続処理を検討
      if (data.status === "waiting") {
        setStatus("マッチング待機中...");
      } else {
        setSession(data);
        setStatus("マッチング成立！");
      }
    } catch (error) {
      setStatus("通信エラー");
      console.error(error);
    }
  };

  return (
    <div className={classes.main}>
      <Title titleName={PAGE_TITLE.MATCH_MAKING} />
      <div className={classes.contents}>
        <div>
          <label htmlFor="userIdInput">ユーザーID: </label>
          <input
            id="userIdInput"
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <Button variant="secondary" onClick={handleMatchmaking}>
          対戦開始
        </Button>
        <p>{status}</p>
        {session && (
          <div className={classes.sessionInfo}>
            <h3>セッション情報</h3>
            <p>Session ID: {session.session_id}</p>
            <p>Player1: {session.player1.id}</p>
            <p>Player2: {session.player2.id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MatchMaking;
