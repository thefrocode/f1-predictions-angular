export interface Prediction{
    round_id: number | null;
    player_id: number;
    p1: number;
    p2: number;
    p3: number;
    p4: number;
    p5: number;
    [key: string]: any;
}
export class Prediction implements Prediction {}
export function emptyPrediction(): Prediction {
  return {
    round_id: null,
    player_id: 0,
    p1: 0,
    p2: 0,
    p3: 0,
    p4: 0,
    p5: 0,  
  };
}
