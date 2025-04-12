import React, { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import classes from "./MatchMaking.module.css";
import Title from "../common/title/Title";
import { PAGE_PATH_URL,PAGE_TITLE } from "../../utilities/const";
import { SessionResult } from "../../ducks/matchMaking/types";
import Spinner from "../common/utils/Spinner";
import { useHistory } from "react-router";


const MatchMaking = (): JSX.Element => {
  const history = useHistory();
  const [userId, setUserId] = useState<string>("");
  const [session, setSession] = useState<SessionResult | null>(null);
  const [status, setStatus] = useState<string>("準備OK");
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [isMatched, setIsMatched] = useState<boolean>(false);
  const handleMatchmaking = async () => {
    setStatus("マッチング待機中...");
    setIsMatching(true);
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
        setIsMatching(false);
        setStatus("準備OK");
        return;
      }

      setStatus("マッチング成立！");
      setIsMatching(false);
      setIsMatched(true);
    } catch (error) {
      setStatus("通信エラー");
      console.error(error);
      setIsMatching(false);
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
        <Button className={`btn-main ${classes.margin_left_5}`}onClick={handleMatchmaking}>
          {status}
        </Button>
        {isMatching && <Spinner />}
        {session && (
          <div className={classes.sessionInfo}>
            <h3>セッション情報</h3>
            <p>Session ID: {session.session_id}</p>
            <p>Player1: {session.player1.id}</p>
            <p>Player2: {session.player2.id}</p>
          </div>
        )}
        {isMatched && history.push(PAGE_PATH_URL.HOME)}
      </div>
    </div>
  );
};

export default MatchMaking;
