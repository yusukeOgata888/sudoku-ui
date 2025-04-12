export interface SessionResult {
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