import { createContext, useEffect, useState } from "react";
import { childrenProps } from "../types/context.types";
import { RANK_TYPE } from "../types/poker.types";

export const PokerContext = createContext({} as PokerContextType);

export default function PokerContextProvider({ children }: childrenProps) {
  const [status, setStatus] = useState(0);
  const [hand, setHand] = useState<handType>(INITIAL_HAND);
  const [hold, setHold] = useState<string[]>([]);
  const [multiHand, setMultiHand] = useState([INITIAL_HAND]);
  const [multi, setMulti] = useState(1);

  useEffect(() => {
    function duplicateArray(length: number, fillWith: any) {
      return Array(length).fill(fillWith);
    }
    let duplicated = duplicateArray(multi, INITIAL_HAND);
    setMultiHand(duplicated);
  }, [multi]);

  return (
    <PokerContext.Provider
      value={{
        status,
        setStatus,
        hand,
        setHand,
        hold,
        setHold,
        multiHand,
        setMultiHand,
        multi,
        setMulti,
      }}
    >
      {children}
    </PokerContext.Provider>
  );
}

export const INITIAL_DECK = ["2X", "3X", "4X", "5X", "6X"];

export type handType = {
  cards: card[];
  rank: RANK_TYPE;
};

export const INITIAL_HAND: handType = {
  cards: INITIAL_DECK,
  rank: "0" as RANK_TYPE,
};

export type PokerContextType = {
  status: number;
  setStatus: (status: number) => void;
  hand: handType;
  setHand: (hand: handType) => void;
  hold: card[];
  setHold: (hold: card[]) => void;
  multiHand: handType[];
  setMultiHand: (multiHand: handType[]) => void;
  multi: number;
  setMulti: (multi: number) => any;
};

type card = string;
// "SA" | "S2" | "S3" ... ;
